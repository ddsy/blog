const elixir = require('laravel-elixir');
const path = require('path');

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
// elixir.config.sourcemaps = false;
var debug = process.env.NODE_ENV !== 'production';

elixir(mix => {
    /*
    * 自定义webpack配置
    * */
    Elixir.webpack.mergeConfig({
        output: {
            path: path.resolve(process.cwd(), 'public'),
            publicPath: '/js/',
            chunkFilename: debug ? '[name].chunk.js' : '[name].[chunkhash].chunk.js',
        },
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

    /*
    * 复制静态文件到编译目录
    * */
    mix.copy('./resources/assets/iconfont', 'public/iconfont');
    mix.copy('./resources/assets/json', 'public/json');
    mix.copy('./node_modules/bootstrap-sass/assets/fonts', 'public/fonts');

    /*
     * 生产环境下生成静态文件版本号
     * */
    if (!debug) {
        mix.version(['css/app.css', 'js/app.js']);
    }

    mix.browserSync({
        notify: false,
        proxy: 'http://0.0.0.0:8000'
    });
});
