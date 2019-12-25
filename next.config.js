module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(ico|svg|png|gif|jpe?g)$/,
      exclude: /node_modules/,
      use: [{
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]"
        }
      }]
    },
    {
      type: 'javascript/auto',
      test: /\.mjs$/,
      use: [],
    },
    {
      test: /\.md$/,
      use: [{
        loader: "raw-loader"
      }]
    },)
    return config
  }
}
  