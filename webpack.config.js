const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
    .BundleAnalyzerPlugin

module.exports = {
  // ...
  chainWebpack: config => {
    config
        .plugin('BundleAnalyzerPlugin')
        .use(BundleAnalyzerPlugin, [{ analyzerMode: 'static' }])
  }
}
