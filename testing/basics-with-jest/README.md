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

I used a babel.config.json instead of babel.config.js

```json
{
    "presets": ["@babel/preset-env", "@babel/preset-react"]
}

```

However this caused one test to fail?

![](https://cdn.zappy.app/d3a2350e0ed7ce8c40eee57c61741937.png)

Reading [this post](https://babeljs.io/blog/2019/03/19/7.4.0#core-js-3-7646-https-githubcom-babel-babel-pull-7646)
seems to imply I need to add `useBuiltIns: "entry"` but that didn't work either.
Some additional searching led me to [this github issue](https://github.com/facebook/jest/issues/3126#issuecomment-465926747),
which prompted me to add the `@babel/plugin-transform-runtime` plugin and it all 
works now. :sweat_smile:

### DOM Testing
Using react-testing-library: `yarn add --dev @testing-library/react`.

