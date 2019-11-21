const path = require('path');

const srcDir = path.join(__dirname, '/public/src');
const distDir = path.join(__dirname, '/public/dist');

module.exports = {
  entry: `${srcDir}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: distDir,
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: srcDir,
        exclude: /(node_modules)/,
        user: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          },
        },
      },
    ],
  },
};
