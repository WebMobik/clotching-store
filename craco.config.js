const CracoAlias = require('craco-alias')

const plugins = [
  {
    plugin: CracoAlias,
    options: {
      source: 'tsconfig',
      tsConfigPath: './tsconfig.edit.json',
    },
  },
]

module.exports = {
  webpack: {
    configure: (webpackConfig, { paths }) => webpackConfig,
    extensions: ['.ts', '.tsx'],
  },
  plugins: plugins,
  typescript: {
    enableTypeChecking: false,
  },
}
