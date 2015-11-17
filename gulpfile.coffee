gulp = require("gulp")
ts = require "gulp-typescript"
clean = require('gulp-clean')
protractor = require("gulp-protractor").protractor

tsProject = ts.createProject({
    # declaration: true
    # noExternalResolve: true
    noResolve: false
    module: "commonjs"
    target:"es5"
    noLib: false
    libraryTypeScriptDefinitions:"typings/tsd.d.ts"
})

gulp.task "test-rm", ->
  gulp.src('tmp/e2e-tests', {read: false})
    .pipe(clean());

gulp.task 'typescript-test',['test-rm'], ->
  gulp.src(["test/e2e/specs/**/*.ts","typings/tsd.d.ts"])
    .pipe(ts(tsProject))
    .js
    .pipe(gulp.dest("tmp/e2e-tests"))

gulp.task "e2e",['typescript-test'], ->
  gulp.src("./tmp/e2e-tests/TestSpec.js")
    .pipe(protractor({
        configFile:"./test/e2e/config/protractor.conf.js"
    }))

gulp.task "watch", ->
  gulp.watch("test/e2e/specs/**/*.ts", ['e2e'])

gulp.task "default", ["watch"]
