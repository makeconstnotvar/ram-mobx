const path = require('path');
const wba = require('webpack-bundle-analyzer');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  plugins: [
    //new wba.BundleAnalyzerPlugin(),
  ],
  entry: {
    'ram': './src/index.jsx'
  },
  output: {
    clean: true,
    path: path.resolve(__dirname, 'build'),
    filename: './scripts/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: [
                ['@babel/plugin-syntax-jsx'],
                ['@babel/plugin-transform-react-jsx'],
                ['@babel/plugin-transform-react-display-name'],
                ['@babel/plugin-proposal-decorators', {legacy: true}],
                ['@babel/plugin-proposal-class-properties', {loose: false}]
              ]
            }
          }
        ]
      },
    ]
  },
  resolve: {
    extensions: ['.jsx', '.js'],
    modules: [
      './node_modules',
      './src'
    ]
  },
  stats: {
    modules: false,
  },
  devServer: {
    historyApiFallback: {
      rewrites: [
        { from: /^\/$/, to: './index.html' },
      ],
    },
    static: {
      directory: path.join(__dirname, 'build'),
    },
    compress: true,
    port: 8080,
  },
}
