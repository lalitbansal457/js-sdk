const path = require("path");

module.exports = {
     mode: 'development',
    entry: require.resolve("./src/js/index.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        libraryTarget: 'umd',
        
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ["babel-preset-env"]
              }
            }
          }
        ]
      }
    
    
};


/*
   devtool: "source-map",
module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }*/