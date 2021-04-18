const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';
const webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  // this shouldn't be necessary, but bug with webpack-dev-server necessitates it
  // https://github.com/webpack/webpack-dev-server/issues/2758
  target: isDevelopment ? 'web' : 'browserslist',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    open: true,
    port: 3000,
    hot: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.jsx', '...'],
  },

  mode: isDevelopment ? 'development' : 'production',
  module: {
    rules: [
      {
        test: /\.(jsx|js|ts|tsx)$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env'],
                '@babel/preset-react',
                '@babel/preset-typescript',
              ],
              plugins: [
                isDevelopment && require.resolve('react-refresh/babel'),
              ].filter(Boolean),
            },
          },
        ],
      },
    ],
  },
  plugins: [
    isDevelopment && new webpack.HotModuleReplacementPlugin(),
    isDevelopment && new ReactRefreshWebpackPlugin(),
  ].filter(Boolean),
};
