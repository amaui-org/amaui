const fsNode = require('node:fs/promises');
const path = require('path');
const fs = require('fs');

const AmauiNode = require('@amaui/node').default;

const wd = process.cwd();

const esm = path.resolve(wd, './build/esm');

const index = path.resolve(esm, 'index.js');

const method = async () => {
  try {
    const values = {
      index: await AmauiNode.file.get(index, false)
    };

    const versions = ['rounded', 'rounded-filled', 'rounded-w100', 'rounded-w100-filled', 'sharp', 'sharp-filled', 'sharp-w100', 'sharp-w100-filled', 'two-tone'];

    versions.forEach(item => {
      values[item] = {
        value: `// @ts-nocheck
import React from 'react';
import { Icon } from '@amaui/ui-react';
import _extends from '@babel/runtime/helpers/extends';

`,
        exports: '['
      };
    });

    const icons = values.index.match(/default as ([^\}]+)/g).map(item => item.replace('default as ', ''));

    try {
      for (const version of versions) {
        const iconsFile = path.resolve(wd, `../../docs/public/assets/js/examples/icons-material-react/icons-elements-${version}.tsx`);

        if (fs.existsSync(iconsFile)) await fsNode.rm(iconsFile);
      }
    }
    catch (error) {
      console.log(error);
    }

    let exports = `{`;

    await Promise.all(icons.map(icon => new Promise(async (resolve, reject) => {
      let version;

      if (icon.endsWith('Rounded')) version = 'rounded';

      if (icon.endsWith('RoundedFilled')) version = 'rounded-filled';

      if (icon.endsWith('RoundedW100')) version = 'rounded-w100';

      if (icon.endsWith('RoundedW100Filled')) version = 'rounded-w100-filled';

      if (icon.endsWith('Sharp')) version = 'sharp';

      if (icon.endsWith('SharpFilled')) version = 'sharp-filled';

      if (icon.endsWith('SharpW100')) version = 'sharp-w100';

      if (icon.endsWith('SharpW100Filled')) version = 'sharp-w100-filled';

      if (icon.endsWith('TwoTone')) version = 'two-tone';

      if (version) {
        const esmFile = await AmauiNode.file.get(path.resolve(esm, `${icon}.js`), false);

        const value = esmFile.match(/const [\s\S]+/)[0].split('export default')[0];

        values[version].exports += ` ${icon}, `

        values[version].value += value + '\n\n';
      }

      resolve();
    })));

    versions.forEach(item => {
      values[item].exports += ']';

      values[item].exports = values[item].exports.replace(', ]', ' ]');
    });

    await Promise.all(versions.map(item => new Promise(async resolve => {
      const iconsFile = path.resolve(wd, `../../docs/public/assets/js/examples/icons-material-react/icons-elements-${item}.tsx`);

      values[item].value += `export default ${values[item].exports};`;

      await AmauiNode.file.add(iconsFile, values[item].value);

      resolve();
    })))
  }
  catch (error) {
    console.log(error);
  }
};

method();


