const { CheckerPlugin } = require('awesome-typescript-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx'],
		alias: {
			'@views': path.resolve('./src/app/views'),
			'@components': path.resolve('./src/app/components'),
		},
	},
	context: path.resolve(__dirname, '../../src'),
	module: {
		rules: [
			{
				test: /\.js$/,
				use: ['babel-loader', 'source-map-loader'],
				exclude: /node_modules/,
			},
			{
				test: /\.tsx?$/,
				use: ['babel-loader', 'awesome-typescript-loader'],
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				loaders: [
					'file-loader?hash=sha512&digest=hex&name=img/[hash].[ext]',
					'image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false',
				],
			},
		],
	},
	plugins: [
		new CheckerPlugin(),
		new HtmlWebpackPlugin({ template: 'app/index.html.ejs', }),
	],
	performance: {
		hints: false,
	},
}
