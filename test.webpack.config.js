/*eslint-env node */
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: ['./test/test-index.js'],
    output: {
        filename: 'test.bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'cheap-module-source-map',
    resolve: {
        alias: {
            'src': path.resolve(__dirname, 'src'),
            'vue$': 'vue/dist/vue.esm.js', // required to bundle vue with compiler so it can process templates
        }
    },
    plugins: [
        new webpack.DllReferencePlugin({
            context: '.',
            manifest: require('./dist/vendor-manifest.json')
        })
    ],
    module: {
        loaders: [
            { test: /\.vue$/, loader: 'vue-loader' },
        ]
    },
    watch: false,
    watchOptions: {
        ignored: /node_modules/
    }
};
