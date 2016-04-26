var webpack = require('webpack');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './public/scripts/index.js'],
    output: {
        path: __dirname + '/build/',// This is where images AND js will go
        filename: 'bundle.js',
        publicPath: '/'
    },

    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {test: /\.less$/, loader: 'style-loader!css-loader!less-loader'}, // use ! to chain loaders
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}, // inline base64 URLs for <=8k images, direct URLs for the rest
            {
                test: /\.js|jsx$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel?presets[]=es2015&presets[]=react']
            }

        ]
    },

    devServer: {
        contentBase: './build',
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]


};
