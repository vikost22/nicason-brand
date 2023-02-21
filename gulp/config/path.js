const buildFolder = './dist';
const srcFolder = './src';

export const path = {
    build: {
        styles: `${buildFolder}/css/`,
        html: `${buildFolder}/`,
        scripts: `${buildFolder}/js/`,
        images: `${buildFolder}/img/`
    },
    src: {
        styles: `${srcFolder}/scss/style.scss`,
        html: `${srcFolder}/*.html`,
        scripts: `${srcFolder}/js/**/*.js`,
        images: `${srcFolder}/img/**/*.*`
    },
    watch: {
        styles: `${srcFolder}/scss/**/*.scss`,
        html: `${srcFolder}/**/*.html`,
        scripts: `${srcFolder}/js/**/*.js`,
        images: `${srcFolder}/img/**/*.*`
    }, 
    clean: buildFolder,
    buildFolder: buildFolder, 
    srcFolder: srcFolder,
}