var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
	devtool: 'eval-source-map',
	entry: __dirname + "/src/scripts/main.js",
	output: {
		path: __dirname + "/public",
		filename: "bundle.js"
	},
	resolve: {
		root: path.resolve('./src/scripts'),
		extensions: ['', '.js', '.jsx']
	},
	watch: true,
	eslint: {
		configFile: ".eslintrc",
		emitWarnings: true
	},
	module: {
		preLoaders: [
			{
				test: /\.jsx$|\.js$/,
				loader: 'eslint-loader',
				include: __dirname + "/src/scripts/main\.js$",
				exclude: /bundle\.js$/
			}
		],
		loaders: [{
			test: /\.jsx?$/,
			exclude: /(node_modules|bower_components)/,
			loaders: ['babel', 'eslint-loader'] // 'babel-loader' is also a legal name to reference

		},
			{
				test: /\.scss$/,
				include: /src/,
				loader: ExtractTextPlugin.extract("style", "css", "sass")
			},


		]
	},
	plugins: [new ExtractTextPlugin("main.css")]
}
	

