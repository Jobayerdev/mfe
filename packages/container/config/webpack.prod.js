const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")
const packageJson = require("../package.json")
const { merge } = require("webpack-merge")
const commonConfig = require("./webpack.common")

const AUTH_DOMAIN = "https://stg-mfe-auth.netlify.app"

const devConfig = {
	mode: "production",
	output: {
		filename: "[name].[contenthash].js",
		publicPath: "/",
	},
	devServer: {
		port: 8080,
		historyApiFallback: true,
	},
	plugins: [
		new ModuleFederationPlugin({
			name: "container",
			remotes: {
				auth: `auth@${AUTH_DOMAIN}/remoteEntry.js`,
			},
			shared: packageJson.dependencies,
		}),
	],
}

module.exports = merge(commonConfig, devConfig)
