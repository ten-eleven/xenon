# Project Setup

For a good project basis, see [searchkit](https://github.com/searchkit/searchkit/) 

First follow the steps to get protractor installed onto your project [Protractor setup](https://angular.github.io/protractor/#/protractor-setup)

Then install xenon, ts-node via npm.

```sh
npm install --save-dev xenon ts-node
```

Here is an [example protractor conf](https://github.com/searchkit/searchkit/blob/master/test/e2e/conf/protractor.conf.js).

Notice that in `onPrepare`, `ignoreSynchronization` is true for non angular apps, false for Angular Apps. Synchronization waits until angular has fully digested to proceed with the test. If not set to false for non angular apps, the tests will not run.

## install typings
TODO
