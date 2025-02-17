const path = require("path");
const HtmlWebpackPlugin =  require("html-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node-modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.png$/,
                use: ['file-loader']
            }

        ]

    },
    resolve: {
        extensions: ['.js', '.jsx'],
        fallback: {
            "fs": false,
            "path": false,
            "os": false
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ],
    devServer: {
        static: path.join(__dirname, "dist"),
        port: 3000,
        open: true,
        hot: true
    }
}