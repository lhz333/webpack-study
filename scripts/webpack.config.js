const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  // 入口文件，可指定一个入口起点，或多个入口起点
  entry: './src/index.js',
  // entry: {
  //   main: './src/home.js',
  //   about: './src/about.js'
  // },
  output: {
    // 出口配置是一个对象
    // 所有输出文件的目标路径
    // 必须是绝对路径（使用 Node.js 的 path 模块）
    path: path.resolve(process.cwd(), 'dist'),
    // 打包之后生产的文件名
    filename: 'js/[name].[chunkHash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      },
      {
        test: /\.less$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 512,
              name: 'images/[name].[hash:8].[ext]',
              publicPath: '/'
            }
          }
        ]
      }
    ]
  },
  // 插件
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack study',
      filename: 'index.html',
      template: './public/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[chunkHash:8].css'
    }),
    new CopyPlugin([
      {
        from: path.resolve(process.cwd(), 'src/static/'),
        to: path.resolve(process.cwd(), 'dist/static/')
      }
    ])
  ],
  devServer: {
    port: 3000,
    open: true
  }
}
