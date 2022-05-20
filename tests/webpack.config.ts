import HtmlWebpackHarddiskPlugin from 'html-webpack-harddisk-plugin'
import { Configuration } from 'webpack'

const config: Configuration = {
  plugins: [new HtmlWebpackHarddiskPlugin()],
}

export default config
