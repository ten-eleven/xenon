gulp = require("gulp")
ts = require "gulp-typescript"
clean = require('gulp-clean')
protractor = require("gulp-protractor").protractor
merge = require "merge2"

tsProject = ts.createProject({
  declaration:true
  module: "commonjs",
  target: "es5",
  emitDecoratorMetadata: true,
  experimentalDecorators: true
})

gulp.task "test-rm", ->
  gulp.src('./dist', {read: false})
    .pipe(clean());

gulp.task 'dist',['test-rm'], ->
  ts = gulp.src(["src/**/*.ts","typings/tsd.d.ts"])
    .pipe(ts(tsProject))

  merge [
    ts.dts.pipe(gulp.dest('dist/definitions'))
    ts.js.pipe(gulp.dest('dist/js'))
  ]

gulp.task "e2e", ->
  gulp.src("./test/e2e/specs/TestSpec.ts")
    .pipe(protractor({
      configFile:"./test/e2e/config/protractor.conf.js"
    }))

gulp.task "watch", ->
  gulp.watch("test/e2e/specs/**/*.ts", ['e2e'])

gulp.task "default", ["watch"]
