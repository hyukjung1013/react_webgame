const path = require('path');

module.exports = {
    name: 'number_baseball_setting',
    mode: 'development',
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
                    ['@babel/preset-env', {
                        targets: {
                            browsers: [
                                'last 2 chrome versions',
                                '> 5% in KR'
                            ],
                        }
                    }],
                    '@babel/preset-react',
                ],
                plugins: [
                    '@babel/plugin-proposal-class-properties',
                    'react-hot-loader/babel',
                ],
            }
        }],
    },

    // Compiled output file
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js',
        publicPath: '/dist'
    },
} 