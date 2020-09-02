# Jest Notes


## Getting Started

Following along at https://jestjs.io/docs/en/getting-started to get started. 

* `yarn run jest --init` to create a basic configuration
* `yarn add --dev babel-jest @babel/core @babel/preset-env` to add babel support
* `yarn add --dev @babel/preset-typescript` to enable typscript support

```js
// babel.config.js
module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
+    '@babel/preset-typescript',
  ],
};

```
Docs note there are some caveats to using TypeScript with Babel. Because TypeScript support in Babel is transpilation, Jest will not type-check your tests as they are run. If you want that, you can use ts-jest.


### Some thoughts to follow up on:
* Jest auto-run on save? 
  * Built in! Just run `yarn run test --watchAll` to scan for files and run them on change
* Is there a vim plugin?
  * https://github.com/jamestthompson3/vim-jest 

## Matchers
Exploring the common matchers in https://jestjs.io/docs/en/using-matchers.
Also full list of matchers at https://jestjs.io/docs/en/expect

How about building custom matchers? [Why yes you can](https://jest-bot.github.io/jest/docs/expect.html#expectextendmatchers).


## Testing Async Code
https://jestjs.io/docs/en/asynchronous

## Setup / TearDown
https://jestjs.io/docs/en/setup-teardown

* `beforeEach` / `afterEach` - runs before each testcase (just like mocha)
* `beforeAll` / `afterAll` - runs once
* Can group these together with `describe` blocks like other BDD frameworks.

### Mock Functions
https://jestjs.io/docs/en/mock-functions


## Testing React Apps
https://jestjs.io/docs/en/tutorial-react

```bash
yarn add react react-dom
yarn add --dev react-test-renderer jest babel-jest @babel/preset-env @babel/preset-react react-test-renderer

```



