// var path = require('path');
 var HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//
// var SRC_DIR = path.resolve(__dirname, './src');
//
// module.exports = {
//   entry: './src/index.js',
//   output: {
//     path: path.resolve(__dirname, 'build'),
//     filename: 'index.js',
//   //  libraryTarget: 'umd' // THIS IS THE MOST IMPORTANT LINE! :mindblow: I wasted more than 2 days until realize this was the line most important in all this guide.
//   },
//   module: {
//     rules: [
//       {
//         test: /\.jsx$/,
//         include: SRC_DIR,
//         exclude: /node_modules/,
//         loader: "babel-loader",
//         // options: {
//         //   presets: ['react', 'es2015', 'stage-2']
//         // },
//       },
//       {
//         test: /\.(sa|sc|c)ss$/,
//         include: SRC_DIR,
//         exclude: /node_modules/,
//         use: [
//           MiniCssExtractPlugin.loader,
//           {
//             loader: "css-loader",
//             options: {
//               modules: true,
//               sourceMap: true,
//               importLoader: 2
//             }
//           },
//           'css-loader',
//           'postcss-loader',
//           'sass-loader'
//         ]
//       }
//     ]
//   },
//   externals: {
//     'react': 'commonjs react' // this line is just to use the React dependency of our parent-testing-project instead of using our own React.
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: 'public/index.html'
//     }),
//     new MiniCssExtractPlugin({
//       // Options similar to the same options in webpackOptions.output
//       // both options are optional
//       filename: "style.css",
//   //chunkFilename: "[name].css"
//     }),
//   ],
// }


const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    entry : './src/index.js',
    output : {
        filename : 'bundle.js',
        path : path.resolve(__dirname, 'build'),
        // libraryTarget: 'commonjs2' // THIS IS THE MOST IMPORTANT LINE! :mindblow: I wasted more than 2 days until realize this was the line most important in all this guide.
    },
    module : {
        rules : [
            {
                test: /\.s?[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: 'css-loader', options: { url: false, sourceMap: false } },
                    { loader: 'sass-loader', options: { sourceMap: false } }
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader"
            }
        ]
    },
    //devtool: 'source-map',
    // externals: {
    //     'react': 'commonjs react' // this line is just to use the React dependency of our parent-testing-project instead of using our own React.
    // },
    plugins: [
      new HtmlWebpackPlugin({
            template: 'public/index.html'
          }),
        new MiniCssExtractPlugin({
            filename: "style.css"
        })

    ],
    mode : devMode ? 'development' : 'production'
};
