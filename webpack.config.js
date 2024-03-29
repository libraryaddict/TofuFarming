const path = require("path");

module.exports = {
  entry: {
    tofu: "./src/Tofu.ts",
    tofuabusers: "./src/TofuAbusers.ts"
  },
  mode: "production",
  module: {
    rules: [
      {
        // Include ts, tsx, js, and jsx files.
        test: /\.(ts|js)x?$/,
        //exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.txt/,
        type: "asset/source"
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "./built/scripts/"),
    libraryTarget: "commonjs"
  },
  externals: {
    kolmafia: "commonjs kolmafia"
  },
  optimization: {
    minimize: false
  }
};
