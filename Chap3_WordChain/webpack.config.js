const path = require('path');

module.exports = {
    name: 'word-chain-setting',
    mode: 'development',    // production
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.jsx']
    },

    // Input file
    entry: {
        app: ['./client']
    },

    // Needed modules to compile Input file. (Babel)
    module: {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            options: {
                presets: [
                    '@babel/preset-env',
                    '@babel/preset-react',
                ],
                plugins: ['@babel/plugin-proposal-class-properties'],
            }
        }],
    },

    // Compiled output file
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js'
    },
} 