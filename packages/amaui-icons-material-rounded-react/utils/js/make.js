const path = require('path');
const fg = require('fast-glob');
const fs = require('fs');

const AmauiNode = require('@amaui/node').default;

const wd = process.cwd();

const capitalize = value => value.charAt(0).toUpperCase() + value.slice(1);

const resolve = value => capitalize(value.replace(/[-_]./g, v => v[1] !== undefined ? v[1].toUpperCase() : ''));

const src = path.resolve(wd, './src');

const prefix = 'IconMaterial';

let made = 0;
let icons_ = 0;

const valueMake = async (url, name, short_name) => {
  const valueFile = await AmauiNode.file.get(url, false);

  const viewBox = valueFile.match(/viewBox="([^"]+)"/g)?.[0]?.replace(/viewBox="|"/g, '') || '0 0 24 24';

  let value = (valueFile).match(/<svg[^>]+?>([^$]+?)<\/svg>/)[1];

  value = `import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const ${prefix}${name} = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='${name}'

      short_name='${short_name}'

      viewBox='${viewBox}'

      {...props}
    >
      ${value}
    </Icon>
  );
});

${prefix}${name}.displayName = 'Amaui${prefix}${name}';

export default ${prefix}${name};
`;

  value = value
    .replace(/xlink:href/g, 'xlinkHref')
    .replace(/sketch:type/g, 'sketchType')
    .replace(/xmlns:xlink/g, 'xmlnsXlink')
    .replace(/enable-background/g, 'enableBackground')
    .replace(/clip-path/g, 'clipPath')
    .replace(/fill-opacity/g, 'fillOpacity')
    .replace(/fill-rule/g, 'fillRule');

  await AmauiNode.file.add(path.join(src, `${prefix}${name}.tsx`), value);

  made++;
};

async function method() {
  const root = path.resolve(wd, '../../../other/google-material-icons/symbols/web');
  const rootSrc = path.resolve(wd, '../../../other/google-material-icons/src');

  const icons = (await fg(path.join(root, '/**'), { onlyDirectories: true, deep: 1 })).map(item => path.basename(item)).filter(item => !item.startsWith('types.tsx'));

  const variants = {
    materialsymbolsrounded: 'Rounded'
    // materialsymbolssharp: 'Sharp'
  };

  async function makeIcon(icon) {
    console.log(icon);

    const rootIcon = path.resolve(wd, '../../../other/google-material-icons/symbols/web', icon);

    const iconName = resolve(icon);

    let iconDefault;

    // Variants
    for (const item of Object.keys(variants)) {
      const variant = variants[item];

      const files = (await fg(path.join(rootIcon, item, '/**/*_24px.svg'), { onlyFiles: true }));

      for (const url of files) {
        if (iconDefault === undefined && url.indexOf(`${icon}_24px.svg`) > -1) iconDefault = url;

        const file = path.basename(url);

        let weight = file.match(/wght(100|200|300|500|600|700)/g);

        weight = weight && weight[0].slice(4);

        let grad = file.match(/grad(N25|200)/g);

        grad = grad && grad[0].slice(4);

        const fill = file.indexOf('fill1_') > -1;

        const name = `${iconName}${weight ? `W${weight}` : ''}${grad ? `G${grad}` : ''}${fill ? 'Filled' : ''}`;

        if (
          // Without grad, only regular
          [undefined, null].includes(grad) &&
          // Weights only 100, regular (400) and 700
          ['100', undefined, null].includes(weight)
        ) {
          const exists = (await fg(path.join(src, `${prefix}${name}.tsx`)))[0];

          if (!exists) await valueMake(url, name, iconName);
        }
      }
    }

    // // Two tone
    // const twoTone = (await fg(path.join(rootSrc, `/**/${icon}/materialiconstwotone/24px.svg`), { onlyFiles: true }))[0];

    // const exists_ = (await fg(path.join(src, `${prefix}${iconName}TwoTone.tsx`)))[0];

    // if (!exists_) await valueMake(twoTone || iconDefault, `${iconName}TwoTone`, iconName);

    console.log('Icons', ++icons_);

    console.log('Made', made);
  }

  for (const icon of icons) await makeIcon(icon);

  // Make index.tsx
  const allIcons = (await fg(path.join(src, `/**`), { onlyFiles: true })).filter(item => !item.includes('/index') && !item.includes('/types'));

  let index = `\n`;

  for (const url of allIcons) {
    const name = path.basename(url).slice(0, -4);

    if (['index'].every(item => !name.includes(item))) index += `export { default as ${name} } from './${name}';\n`;
  }

  const indexPath = path.join(src, 'index.tsx');

  // Remove previous index
  if (fs.existsSync(indexPath)) await AmauiNode.file.remove(indexPath);

  // Add new index
  await AmauiNode.file.add(indexPath, index);
}

method();


