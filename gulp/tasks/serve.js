export const serve = () =>{
    app.plugins.browserSync.init({
        server: {
            baseDir: `${app.path.build.html}`
        }
    });
}