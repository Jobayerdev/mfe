const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    publicPath: "http://localhost:5200/",
    uniqueName: "user",
    scriptType: "text/javascript",
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "user",
      library: { type: "var", name: "user" },
      filename: "remoteEntry.js",
      exposes: {
        ProfileModule: "./src/app/profiles/profiles.module.ts",
      },
      shared: {
        "@angular/core": { singleton: true, eager: true },
        "@angular/common": { singleton: true, eager: true },
        "@angular/router": { singleton: true, eager: true },
      },
    }),
  ],
};
