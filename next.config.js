const path = require('path')
const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')

const isProd = process.env.NODE_ENV === 'production'

// fix: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.css'] = () => {}
}

module.exports = withSass(
  withCSS({
    webpack: config => {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack']
      })
      config.module.rules.push({
        test: /\.(png|jpe?g)$/,
        loader: 'url-loader'
      })
      config.resolve.alias = Object.assign({}, config.resolve.alias, {
        assets: path.resolve('./assets'),
        components: path.resolve('./components'),
        styles: path.resolve('./styles'),
        pages: path.resolve('./pages'),
        store: path.resolve('./store'),
        layout: path.resolve('./layout'),
        services: path.resolve('./services'),
        utils: path.resolve('./utils')
      })
      return config
    },
    cssModules: false,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: isProd ? '[hash:base64:4]' : '[path][name][hash:base64:4]'
    }
  })
)
