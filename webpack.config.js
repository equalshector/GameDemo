var debug = process.env.NODE_ENV !== "production"
var webpack = require('webpack') 
var path = require("path")

module.exports = [{
    name: 'js',
    content: path.join(__dirname, "src"),
    devtool: debug ? "inline-sourcemap" : null,
    entry: path.join(__dirname, "src", "js", "client.js"),
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react','es2015', 'stage-0'],
                    //fucking shit transform-decoration-legacy HAS TO BE THE 1ST ON THE LIST
                    plugins: ['transform-decorators-legacy', 'react-html-attrs', 'transform-class-properties']
                }
            },
        ]
    },
    output: {
        path: path.join(__dirname, "src"),
        filename: 'client.min.js',
    },
    plugins: debug ? [] : [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false}),
    ]
}
]