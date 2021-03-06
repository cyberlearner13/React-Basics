var HtmlWebPackPlugin = require('html-webpack-plugin');
var HtmlWebPackPluginConfig = new HtmlWebPackPlugin({
    template: __dirname + '/src/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: [
        './src/index.js'
    ],
    devServer: {
      inline: true,
      port: 5000
   },
    output: {
        path: __dirname + '/dist',
        filename: "bundle.min.js"
    },
    module: {
        loaders: [
            {test: /\.js?$/, exclude: /node_modules/, loader:"babel-loader"}
        ]
    },
    plugins:[HtmlWebPackPluginConfig]
}