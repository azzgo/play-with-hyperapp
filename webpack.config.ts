import { Configuration } from 'webpack'
import * as path from 'path'
import * as HtmlWebpackPlugin from 'html-webpack-plugin'

const config: Configuration = {
  devtool: 'source-map',
  entry: {
    main: './src/main.tsx'
  },
  output: {
    path: path.resolve(process.cwd(), 'dist/'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
}

module.exports = config
