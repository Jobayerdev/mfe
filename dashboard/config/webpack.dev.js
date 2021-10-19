const devConfig = {
	mode: "development",
	devServer: {
		port: 8081,
		historyApiFallback: {
			index: "index.html",
		},
	},
	plugins: [],
}

module.exports = devConfig
