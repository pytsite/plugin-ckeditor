const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './empty.js',
    plugins: [
        new CopyWebpackPlugin([
            {from: 'ckeditor/**'}
        ])
    ]
};
