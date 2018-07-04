const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: "[name]_[local]_[hash:base64]",
              sourceMap: true,
              minimize: true
            }
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname),
    // serve index.html in place of 404 responses to allow HTML5 history
    historyApiFallback: true
  },
  plugins: [htmlPlugin]
  // devServer: {
  //     contentBase: path.join(__dirname),
  //     devtool: 'eval',
  //     hot: true,
  //     inline: true,
  //     port: 3000,
  //     outputPath: buildPath,
  //     historyApiFallback: true
  // }
};
