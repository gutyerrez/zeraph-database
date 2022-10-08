const path = require('path')

const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    main: './src/IProvider.ts'
  },
  output: {
    path: path.resolve(__dirname, './lib'),
    filename: 'main.js'
  },
  resolve: {
    extensions: ['.ts'],
    plugins: new TsconfigPathsPlugin()
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: 'ts-loader'
      }
    ]
  }
}