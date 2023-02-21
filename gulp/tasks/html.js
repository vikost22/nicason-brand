import fileinclude from "gulp-file-include";
import webpHtmlNoSvg from "gulp-webp-html-nosvg";

export const html = () => {
    return app.gulp.src(app.path.src.html)
    .pipe(fileinclude())
    .pipe(app.plugins.replace(/@img\//g, "./dist/img/"))
    .pipe(webpHtmlNoSvg())
    .pipe(app.gulp.dest(app.path.build.html))
}