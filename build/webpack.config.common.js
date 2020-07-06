 const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { srcPath, distPath } = require('./paths')

module.exports = {
    entry: {
        index: path.join(srcPath, 'index.js'),
        subPage: path.join(srcPath, 'subPage.js')
    },  
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: ['babel-loader'],
                include: srcPath,
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        // 多入口 - 生成 index.html
        new HtmlWebpackPlugin({
            template: path.join(srcPath, 'index.temp.html'),
            filename: 'index.html',
            // chunks 表示该页面要引用哪些 chunk （即上面的 index 和 subPage），默认全部引用
            //chunks: ['index', 'vendor', 'common']  // 代码分割
        }),
        // // 多入口 - 生成 subPage.html
        // new HtmlWebpackPlugin({
        //     template: path.join(srcPath, 'subPage.html'),
        //     filename: 'subPage.html',
        //     chunks: ['subPage', 'common']  // 代码分割
        // })
    ]
}
