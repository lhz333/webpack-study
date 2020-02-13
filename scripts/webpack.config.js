const path = require('path')

module.exports = {
    // 入口文件，可指定一个入口起点，或多个入口起点
    // entry: './src/home.js', 
    entry: {
        main: './src/home.js',
        about: './src/about.js'
    },
    output: { // 出口配置是一个对象
        // 所有输出文件的目标路径
        // 必须是绝对路径（使用 Node.js 的 path 模块）
        path: path.resolve(process.cwd(), 'dist'),
        // 打包之后生产的文件名
        filename: '[name].[chunkHash:8].js'
    }
}