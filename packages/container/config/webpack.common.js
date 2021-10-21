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
				test: /\.(css|scss|less)$/,
				exclude: /node_modules/,
				use: [
					"style-loader",
					"css-loader",
					"postcss-loader",
					"sass-loader",
					{
						loader: "less-loader",
						options: {
							lessOptions: {
								modifyVars: {
									"primary-color": "#fd683e",
									"link-color": "#fd683e",
									"border-radius-base": "2px",
								},
								javascriptEnabled: true,
							},
						},
					},
				],
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: "file-loader",
					},
				],
			},
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
		alias: {
			"@shared": path.resolve(__dirname, "../src/@shared/"),
			"@modules": path.resolve(__dirname, "../src/@modules/"),
		},
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html",
		}),
	],
}
