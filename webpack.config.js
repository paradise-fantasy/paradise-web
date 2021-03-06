const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const validate = require('webpack-validator');
const pkg = require('./package.json');

const parts = require('./libs/parts');

const PATHS = {
  app: path.join(__dirname, 'app'),
  style: path.join(__dirname, 'app', 'style.less'),
  build: path.join(__dirname, 'build'),
  images: path.join(__dirname, 'app/assets/images')
};

const TARGET = process.env.npm_lifecycle_event;

const ENV_MAP = {
  build: 'production',
  start: 'development'
}

const common = {

  // Entry accepts a path or an object of entries.
  // We'll be using the latter form given it's
  // convenient with more complex configurations.
  entry: {
    app: PATHS.app,
    style: PATHS.style
  },
  output: {
    path: PATHS.build,
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel?cacheDirectory'],
        include: PATHS.app
      },
      {
        test: /\.less$/,
        loaders: ['style', 'css', 'less'],
        include: PATHS.style
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'file',
        include: PATHS.images
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Paradise Dashboard',
      template: 'app/template.html'
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      config: path.join(__dirname, 'config', `${ENV_MAP[TARGET]}.config`)
    }
  }
};

var config;
switch(TARGET) {
  case 'build':
  case 'stats':
    config = merge(
      common,
      {
        devtool: 'source-map',
        output: {
          path: PATHS.build,
          filename: '[name].[chunkhash].js',
          // This is used for require.ensure. The setup
          // will work without but this is useful to set.
          chunkFilename: '[chunkhash].js'
        }
      },
      parts.clean(PATHS.build),
      parts.setFreeVariable(
        'process.env.NODE_ENV',
        'production'
      ),
      parts.extractBundle({
        name: 'vendor',
        entries: Object.keys(pkg.dependencies)
      }),
      parts.minify()
    );
    break;
  default:
    config = merge(
      common,
      {
        devtool: 'eval-source-map'
      },
      parts.devServer({
        // Customize host/port here if needed
        host: process.env.HOST,
        port: process.env.PORT
      })
    );
}

process.env.BABEL_ENV = TARGET;

module.exports = validate(config, {
  quiet: true
});
