const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")

module.exports = {
	module: {
		rules: [
			{
				test: /\.(js|jsx|ts|tsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: [
							"@babel/preset-react",
							"@babel/preset-env",
							"@babel/preset-typescript",
						],
						plugins: ["@babel/plugin-transform-runtime"],
					},
				},
			},
			{
				test: /\.css$/i,
				include: path.resolve(__dirname, "src"),
				use: ["style-loader", "css-loader", "postcss-loader"],
			},
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html",
		}),
	],
}
