/*eslint-env node */
const webpack = require('webpack');
const path = require('path');

const plugins = [
    new webpack.DllPlugin({
        name: 'vendor_lib',
        path: 'dist/vendor-manifest.json',
    })
];

module.exports = {
    entry: {
        vendor: [
            'vue',
        ],
    },
    output: {
        filename: 'vendor.bundle.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'vendor_lib',
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js', // required to bundle vue with compiler so it can process templates
        }
    },
    plugins,
    module: {
        loaders: [
            { test: /\.vue$/, loader: 'vue-loader' },
        ]
    }
};
