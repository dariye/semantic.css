import gulp from 'gulp'
import postcss from 'gulp-postcss'
import precss from 'precss'
import nestedProps from 'postcss-nested-props'
import utilities from 'postcss-utilities'
import short from 'postcss-short'
import rtl from 'postcss-rtl'
import reset from 'postcss-autoreset'
import initial from 'postcss-initial'
import cssnano from 'cssnano'
import doiuse from 'doiuse'
import colorguard from 'colorguard'
import lost from 'lost'
import stylefmt from 'stylefmt'
import rename from 'gulp-rename'
import cleanCSS from 'gulp-clean-css'
import browserSync from 'browser-sync'
import modRewrite from 'connect-modrewrite'
import merge from 'merge-stream'
import del from 'del'

const BUILD_DIR = 'build'

const paths = {
  demo: 'demo',
  styles: {
    src: 'src/**/*.css',
    dest: BUILD_DIR
  },
}

const server = browserSync.create()

function reload(done) {
  server.reload()
  done()
}

function serve(done) {
  server.init({
    open: true,
    injectChanges: false,
    logPrefix: 'Semantic.css',
    server: {
      baseDir: [BUILD_DIR, paths.demo],
    },
  })
  done()
}

export const clean = () => del([BUILD_DIR])

export function styles() {
  const commonPlugins = [
    reset(),
    initial(),
    nestedProps(),
    precss(),
    utilities(),
    short(),
    rtl(),
    lost(),
    colorguard(),
    doiuse({
      browsers: [
        '> 1%'
      ]
    }),
  ]

  const minPlugins = [
    ...commonPlugins,
    cssnano()
  ]

  const plugins = [
    ...commonPlugins,
    stylefmt()
  ]

  const css = gulp.src(paths.styles.src)
    .pipe(postcss(plugins))
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browserSync.stream())

  const min = gulp.src(paths.styles.src)
    .pipe(postcss(minPlugins))
    .pipe(cleanCSS())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest(paths.styles.dest))

  return merge(css, min)
}

const watch = () =>
  gulp.watch([paths.styles.src, paths.demo], gulp.series(styles, reload))

const dev = gulp.series(clean, styles, serve, watch)
const build = gulp.series(clean, gulp.parallel(styles))

export { build, dev }
export default dev
