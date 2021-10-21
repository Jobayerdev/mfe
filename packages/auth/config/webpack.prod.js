const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")
const packageJson = require("../package.json")
const { merge } = require("webpack-merge")
const commonConfig = require("./webpack.common")

const devConfig = {
	mode: "development",
	output: {
		filename: "[name].[contenthash].js",
		publicPath: "/auth/latest/",
	},
	devServer: {
		port: 8081,
		historyApiFallback: true,
	},
	plugins: [
		new ModuleFederationPlugin({
			name: "auth",
			filename: "remoteEntry.js",
			exposes: {
				"./AuthApp": "./src/bootstrap",
			},
			shared: packageJson.dependencies,
		}),
	],
}

module.exports = merge(commonConfig, devConfig)
