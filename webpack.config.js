const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/react'],
                },
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index.js',
        library: 'react-timezone-picker',
        libraryTarget: 'commonjs',
    },
    resolve: {
        alias: {
            react: path.resolve(__dirname, './node_modules/react'),
            'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
        },
    },
    externals: [nodeExternals()],
}
