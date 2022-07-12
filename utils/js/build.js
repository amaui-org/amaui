const path = require('path');
const childProcess = require('child_process');
const yargs = require('yargs');
const fse = require('fs-extra');
const fg = require('fast-glob');

const { promisify } = require('@amaui/utils');

const wd = process.cwd();
const moduleFolder = path.basename(wd);
const to = path.resolve(wd, './build');

const exec = promisify(childProcess.exec, { onError: 'resolve' });

const cache = {};

// Build
async function buildBabel(variant = 'esm') {
  const { outPath, log } = cache;

  const env = {
    NODE_ENV: 'production',
    BABEL_ENV: variant,
  };
  const babel = path.resolve(__dirname, '../../babel.config.js');
  const src = path.resolve('./src');

  const out = path.resolve(
    outPath,
    {
      esm: './esm',
      node: './',
    }[variant],
  );

  const arguments = [
    src,

    '--extensions',
    `".js,.jsx,.ts,.tsx"`,

    '--config-file',
    babel,

    '--out-dir',
    out,
  ];

  const cmd = ['babel', ...arguments].join(' ');

  if (log) console.log(`\n🌱 Running ${cmd}\n`);

  const [error, response] = await exec(cmd, { env: { ...process.env, ...env } });

  if (error) {
    console.error('Build babel error: \n' + error + response, '\n\n');

    throw new Error();
  }

  if (response) console.log(response);
}

async function buildUMD() {
  const { log } = cache;

  const env = {
    BABEL_ENV: 'esm',
  };
  const rollup = path.resolve(__dirname, '../../rollup.config.js');

  const arguments = [
    '-c',
    rollup,
  ];

  const cmd = ['rollup', ...arguments].join(' ');

  if (log) console.log(`\n🌱 Running ${cmd}\n`);

  const [error, response] = await exec(cmd, { env: { ...process.env, ...env } });

  if (error) {
    console.error(error);

    if (response) console.error(response);

    console.log();

    throw new Error();
  }

  if (response) console.log(response.slice(1, -1));
}

async function build() {
  const { log } = cache;

  if (log) console.log(`🌱 Build\n`);

  const env = process.env.ENV;

  // Prod
  await buildBabel();

  // Node
  await buildBabel('node');

  // UMD
  if (['babel'].indexOf(env) === -1) await buildUMD();

  if (log) console.log(`🌱 Build done\n`);
}

// Move
async function makePackage() {
  const { log } = cache;

  if (log) console.log(`\n🌱 Making main package.json in build folder\n`);

  // Move main package.json
  const package = require(path.resolve(wd, './package.json'));

  const { scripts, devDependencies, ...other } = package;

  const newPackage = {
    ...other,
    main: './index.js',
    module: './esm/index.js',
    types: './index.d.ts',
  };

  await fse.writeFile(path.resolve(to, './package.json'), JSON.stringify(newPackage, null, 2), 'utf8');

  cache['package'] = newPackage;

  if (log) console.log(`🌱 Main package.json added to build`);
}

const capitalize = value => `${value[0].toUpperCase()}${value.slice(1).toLowerCase()}`;

const name = moduleFolder.split('-').map(item => capitalize(item)).join('');

async function addLicense() {
  const { log } = cache;

  if (log) console.log(`🌱 Adding license to important build files\n`);

  const license = `/** @license ${name} v${cache['package'].version}
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
  `;

  const files = [
    './index.js',
    './esm/index.js',
    `./umd/${moduleFolder}.dev.js`,
    `./umd/${moduleFolder}.prod.min.js`,
  ];

  await Promise.all(
    files.map(async relativePath => {
      const filePath = path.resolve(to, relativePath);
      const exists = fse.existsSync(filePath);

      if (exists) {
        const data = await fse.readFile(filePath, 'utf8');

        if (data.indexOf('@license AMAUI') === -1) await fse.writeFile(filePath, license + data, 'utf8');
      }
    })
  );

  if (log) console.log(`🌱 Appended LICENSE to important build files`);
}

async function moveFile(value) {
  const source = path.resolve(wd, value);
  const target = path.resolve(to, path.basename(value));

  await fse.copy(source, target);
}

async function moveFiles() {
  const { log } = cache;

  const toMoveFiles = [
    'README.MD',
    path.resolve(wd, '../../LICENSE'),
  ];

  if (log) console.log(`🌱 Adding ${toMoveFiles.join(', ')} files to build\n`);

  await Promise.all(toMoveFiles.map(value => moveFile(value)));
}

async function move() {
  const { log } = cache;

  if (log) console.log(`🌱 Move\n`);

  await makePackage();

  await moveFiles();

  await addLicense();

  if (log) console.log(`🌱 Move done\n`);
}

// Types
async function types() {
  const { log } = cache;

  if (log) console.log(`🌱 Types\n`);

  const ts = path.resolve(wd, 'tsconfig.build.json');

  const arguments = [
    '-b',
    ts,
  ];

  const cmd = ['yarn tsc', ...arguments].join(' ');

  if (log) console.log(`\n🌱 Running ${cmd}\n`);

  const [error, response] = await exec(cmd);

  if (error) {
    console.error('Types error: \n' + response.split('\n').slice(1, -2).join('\n'), '\n\n');

    throw new Error();
  }

  if (log) console.log(`🌱 Types done\n`);
}

// Add to modules
async function addToModules() {
  const { log } = cache;

  const folders = (await fg(path.join(path.resolve('build'), '/**'), { onlyDirectories: true, deep: 1 })).filter(item => ['esm', 'umd'].every(item_ => item.indexOf(item_) === -1));

  if (folders.length) {
    if (log) console.log(`\n🌱 Adding to modules\n`);

    await Promise.all(folders.map(item => {
      const name = path.basename(item);

      const newPackage = {
        sideEffects: false,
        main: './index.js',
        module: `../esm/${name}/index.js`,
        types: './index.d.ts',
      };

      return fse.writeFile(path.resolve(wd, 'build', name, './package.json'), JSON.stringify(newPackage, null, 2), 'utf8');
    }));

    if (log) console.log(`🌱 Made package.json in modules`);
  }
}

async function run(argv) {
  // Use argvs in methods
  Object.assign(cache, argv);

  // Minor
  console.log();

  // Build
  // await build();

  // Move
  await move();

  // Types
  await types();

  // Add to modules
  await addToModules();
}

yargs
  .command({
    command: '$0',
    description: 'Build',
    builder: command => command
      .option('out-path', { alias: 'o', default: './build', type: 'string' })
      .option('log', { alias: 'l', type: 'boolean' })
    ,
    handler: run,
  })
  .showHelpOnFail(false)
  .help()
  .strict(true)
  .version(false)
  .parse();
