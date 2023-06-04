
module.exports = {
  imports: [
    'ts-node/register/transpile-only'
  ],
  files: [
    '../../utils/js/test/utils.ts',
    'test/**/*.test.{ts,tsx}'
  ]
};
