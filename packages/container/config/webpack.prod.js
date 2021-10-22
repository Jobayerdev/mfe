const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")
const packageJson = require("../package.json")
const { merge } = require("webpack-merge")
const commonConfig = require("./webpack.common")

const authProductionDomain = process.env.AUTH_PRODUCTION_URL

const devConfig = {
	mode: "production",
	output: {
		filename: "[name].[contenthash].js",
		publicPath: "/",
	},
	devServer: {
		port: 8080,
		historyApiFallback: {
			index: "index.html",
		},
	},
	plugins: [
		new ModuleFederationPlugin({
			name: "container",
			remotes: {
				auth: `auth@${authProductionDomain}/remoteEntry.js`,
			},
			shared: packageJson.dependencies,
		}),
	],
}

module.exports = merge(commonConfig, devConfig)
