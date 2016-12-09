const elixir = require('laravel-elixir');
const path = require('path');
var BrowserSync = require('laravel-elixir-browsersync2');

require('laravel-elixir-vue-2');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(mix => {
    Elixir.webpack.mergeConfig({
        resolveLoader: {
            root: path.join(__dirname, 'node_modules'),
        },
        module: {
            loaders: [
                {
                    test: /\.css$/,
                    loader: 'style!css'
                }
            ]
        }
    });

    mix.sass('app.scss').webpack('app.js');

    BrowserSync.init();
    mix.BrowserSync({
        files: ['app/**/*', 'publick/**/*', 'resources/views/**/*'],
        proxy: 'http://192.168.0.175:8000/',  // apache或iis等代理地址
        port: 3000,
        notify: false,        // 刷新是否提示
        watchTask: true,
        open: 'external',
        host: 'localhost',  // 本机ip, 这样其他设备才可实时看到更新
    });
});