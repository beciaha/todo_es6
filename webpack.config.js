module.exports = {
    entry: './src/index.js',
    output: {
        path: `${__dirname}/dist`,
        filename: 'bundle.js'
    },
    devtool: "source-map",
    watch:true,
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                "presets": [
                    ["env", {
                        "targets": {
                            "browsers": ["> 1%"]
                        }
                    }]
                ]
            }
        }],
    }
}