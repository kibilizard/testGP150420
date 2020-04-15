var path = require('path');
var webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    devtool: 'source-map',
    entry: ['./src/app.ts'],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'app.js'
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: 'styles',
                    test: /\.css$/,
                    chunks: 'all',
                    enforce: true,
                },
            },
        },
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
    ],
    module: {
        rules: [{
            test: /\.ts$/,
            include: path.resolve(__dirname, "src"),
            loader: 'ts-loader'
        }, {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
        }]
    },
    resolve: {
        extensions: ["*", ".webpack.js", ".web.js", ".ts", ".js"]
    }
};