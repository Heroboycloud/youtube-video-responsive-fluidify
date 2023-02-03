let mix = require('laravel-mix');

mix.js('resources/index.js', 'dist/fluidify.js')
    //.sass('resources/sass/app.scss', 'public/css')
    .sourceMaps()
    .webpackConfig({
        devtool: 'source-map'
    })
    .options({
        processCssUrls: false
    });
