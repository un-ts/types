// tslint:disable: ordered-imports
declare module 'html-webpack-harddisk-plugin' {
  import { Compiler } from 'webpack'

  class HtmlWebpackHarddiskPlugin {
    apply(compiler: Compiler): void
  }

  export = HtmlWebpackHarddiskPlugin
}
