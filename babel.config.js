
module.exports = function (api) {
  const esm = api.env(['esm']);

  api.cache(true);

  const env = process.env.ENV;
  const variant = process.env.VARIANT;

  const envs = {
    react: {
      presets: [
        '@babel/preset-react'
      ]
    },
    vue: {
      plugins: [
        '@vue/babel-plugin-jsx'
      ]
    }
  };

  const presets = [
    [
      '@babel/preset-env',
      {
        browserslistEnv: process.env.BABEL_ENV || process.env.NODE_ENV,
        modules: esm ? false : 'commonjs'
      },
    ],

    ...(envs[env]?.presets || []),

    '@babel/preset-typescript'
  ];

  const other = {};

  if (variant === 'icons') {
    other['sourceMaps'] = false;
    other['minified'] = true;
  }

  const plugins = [
    '@babel/plugin-transform-runtime',
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',

    ...(envs[env]?.plugins || [])
  ];

  return {
    presets,
    plugins,
    ...other
  };
};
