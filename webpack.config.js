const path = require('path')
const { ESBuildMinifyPlugin } = require('esbuild-loader')

const package = require('./package.json')

module.exports = {
  entry: {
    main: path.resolve(__dirname, './lib/index.ts'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    libraryTarget: 'umd',
    library: package.name,
    clean: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    modules: [path.resolve(__dirname, 'lib'), 'node_modules'],
  },
  externals: [
    /^react$/,
    /^react\/lib.*/,
    /^react-dom$/,
    /.*react-dom.*/,
    /^styled-components$/,
  ],
  optimization: {
    usedExports: true,
    minimizer: [
      new ESBuildMinifyPlugin({
        target: 'es2015',
        css: true, // Apply minification to CSS assets
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'esbuild-loader',
        options: { loader: 'tsx' },
        exclude: [/node_modules/, /stories/],
      },
      { test: /\.(png|jpg|jpeg|gif|ico)$/, use: 'url-loader?limit=25000' },
      {
        test: /\.(svg)$/,
        issuer: /\.s?css$/,
        loader: 'url-loader',
      },
      {
        test: /\.svg$/,
        issuer: /\.tsx?$/,
        loader: 'svg-react-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(woff|ttf|eot|ttf)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
    ],
  },
}
