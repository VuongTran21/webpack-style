const MiniCssWebpackPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  plugins: [new MiniCssWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [MiniCssWebpackPlugin.loader, "css-loader", "sass-loader", 'postcss-loader'],
      },
    ],
  },

  devtool: "source-map",
};
