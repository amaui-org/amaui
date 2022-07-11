const path = require('path');
const fs = require('fast-glob');

async function make() {
  const wd = process.cwd();
  const root = path.resolve(wd, '../../../other/google-material-icons/symbols/web');

  const icons = (await fs(path.join(root, '/**'), { onlyDirectories: true, deep: 1 })).map(item => path.basename(item));

  const variants = {
    materialsymbolsoutlined: 'Outlined',
    materialsymbolsrounded: 'Rounded',
    materialsymbolssharp: 'Sharp'
  };

  // Outlined
  // Rounded
  // Sharp
  // TwoTone (find only 1 for src/**/[name]/materialiconstwotone/24px.svg)

  async function makeIcon(icon) {
    console.log(icon);
    const rootIcon = path.resolve(wd, '../../../other/google-material-icons/symbols/web', icon);
    console.log(rootIcon);

    // Variants
    Object.keys(variants).forEach(item => {
      const variant = variants[item];



    });

    // Two tone

  }

  for (const icon of icons) {
    await makeIcon(icon);

    break;
  }

  console.log(icons);
}

make();

IconMaterial1kW300GN25Outlined
