const path = require('path');
const fs = require('fast-glob');

const AmauiNode = require('@amaui/node').default;

const wd = process.cwd();

const capitalize = value => value.charAt(0).toUpperCase() + value.slice(1);

const resolve = value => capitalize(value.replace(/[-_]./g, v => v[1] !== undefined ? v[1].toUpperCase() : ''));

const src = path.resolve(wd, './src');

const prefix = 'IconMaterial';

let made = 0;

const valueMake = async (url, name, short_name) => {
  let value = (await AmauiNode.file.get(url, false)).match(/<svg[^>]+?>([^$]+?)<\/svg>/)[1];

  value = `import React from 'react';

import { Icon } from '@amaui/ui-react';

const ${prefix}${name} = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='${name}'
      short_name='${short_name}'

      {...props}
    >
      ${value}
    </Icon>
  );
});

export default ${prefix}${name};
`;

  value = value
    .replace(/xlink:href/g, 'xlinkHref')
    .replace(/sketch:type/g, 'sketchType')
    .replace(/xmlns:xlink/g, 'xmlnsXlink');

  await AmauiNode.file.add(path.join(src, `${prefix}${name}.tsx`), value);

  made++;
};

async function method() {
  const root = path.resolve(wd, '../../../other/google-material-icons/symbols/web');
  const rootSrc = path.resolve(wd, '../../../other/google-material-icons/src');

  const icons = (await fs(path.join(root, '/**'), { onlyDirectories: true, deep: 1 })).map(item => path.basename(item));

  const variants = {
    materialsymbolsrounded: 'Rounded',
    materialsymbolssharp: 'Sharp'
  };

  async function makeIcon(icon) {
    console.log(icon);

    const rootIcon = path.resolve(wd, '../../../other/google-material-icons/symbols/web', icon);
    const iconName = resolve(icon);

    let iconDefault;

    // Variants
    for (const item of Object.keys(variants)) {
      const variant = variants[item];

      const files = (await fs(path.join(rootIcon, item, '/**/*_24px.svg'), { onlyFiles: true }));

      for (const url of files) {
        if (iconDefault === undefined && url.indexOf(`${icon}_24px.svg`) > -1) iconDefault = url;

        const file = path.basename(url);

        let weight = file.match(/wght(100|200|300|500|600|700)/g);

        weight = weight && weight[0].slice(4);

        let grad = file.match(/grad(N25|200)/g);

        grad = grad && grad[0].slice(4);

        const fill = file.indexOf('fill1_') > -1;

        const name = `${iconName}${variant}${weight ? `W${weight}` : ''}${grad ? `G${grad}` : ''}${fill ? 'Filled' : ''}`;

        if (
          // Without grad, only regular
          [undefined, null].includes(grad) &&
          // Weights only 100, regular (400) and 700
          ['100', undefined, null].includes(weight)
        ) await valueMake(url, name, iconName);
      }
    }

    // Two tone
    const twoTone = (await fs(path.join(rootSrc, `/**/${icon}/materialiconstwotone/24px.svg`), { onlyFiles: true }))[0];

    await valueMake(twoTone || iconDefault, `${iconName}TwoTone`, iconName);

    console.log('Made', made);
  }

  for (const icon of icons) await makeIcon(icon);

  // Make index.tsx
  const allIcons = (await fs(path.join(src, `/**`), { onlyFiles: true }));

  let index = `\n`;

  for (const url of allIcons) {
    const name = path.basename(url).slice(0, -4);

    index += `export { default as ${name} } from './${name}'\n`;
  }

  await AmauiNode.file.add(path.join(src, 'index.tsx'), index);
}

method();


