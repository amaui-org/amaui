
 # cli

 Cli's `amaui-test` nodejs command is present once you install this library. \

Invoking it, it will:
- Look for options files, either `amaui-test.options.js`'s default exported module object, or in the `package.json`'s `amaui-test`'s property object value, or as command line arguments.
- It will then import all the files where tests are, and in the process setup all the tests.
- If there's at least 1 `to` test found, it will run the tests.

### Options

Options values are in the AmauiTest page's API.

```ts
{
  // Any imports prior to running the test
  // usually used in nodejs for typescript transpile of the files on they fly
  // which transpiles files as they are imported with require or import

  // All values from the imports array will be imported using require
  // prior to all the tests running
  imports: [
    'ts-node/register/transpile-only'
  ],
  // 'original' | 'to-group' | 'group-to'
  order: 'original',
  // Whether to print results, print as tests are run, or at the end, minify errors, if to wirte in the html, if yes in the element with provided id, etc.
  results: {
    print: false
  },
  // What is a slow, very slow response times,
  // what is the timeout, how long to wait before failing the test that is, etc.
  // whether to exist the test or throw an error (browser) if the entre test fails
  response: {
    on_fail: {
      exit: false,
      error: false,
    }
  },
  // Where are the test files located, required in nodejs
  // in browser this is not required since after the AmauiTest is instantiated
  // all group, to methods that follow will setup the tests
  // and then manually run amauiTest.run to run the tests
  files: [
    'test/example/test/**/a.test.ts'
  ],

  // Default package.json file is looked for in the same path
  // in which amaui-test command was ran
  // optionally provide a custom path to the package.json file
  // package: '/folder/package.json'
}
```

Cli arguments.

```ts
--imports=ts-node/register/transpile-only

--order=to-group

--results-print=false
--results-to=log
--results-at=end

--response-timeout-to=40
--response-timeout-middleware=40000
--response-measurement-slow=400
--response-measurement-veryslow=4000
--response-onfail-exit=false
--response-onfail-error=false

--files=test/**/*.test.*

--package=a/package.json
```

## API

#### run

```ts
function run(argv: any): Promise<void>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Test: assert",
      "to": "/dev/test/use/assert"
    },
    "next": {
      "label": "Test: request",
      "to": "/dev/test/use/request"
    }
  }
}~
