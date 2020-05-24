// tslint:disable: ordered-imports
declare module 'html-webpack-harddisk-plugin' {
  import { Plugin } from 'webpack'
  class HtmlWebpackHarddiskPlugin extends Plugin {}
  export = HtmlWebpackHarddiskPlugin
}

declare module 'lazy-compile-webpack-plugin' {
  import { Plugin, Stats } from 'webpack'

  namespace LazyCompileWebpackPlugin {
    interface Options {
      refreshAfterCompile?: boolean
      ignores?:
        | RegExp[]
        | ((request: string, wpModule: Stats.Reason) => boolean)
    }
  }

  class LazyCompileWebpackPlugin extends Plugin {
    constructor(options?: LazyCompileWebpackPlugin.Options)
  }

  export = LazyCompileWebpackPlugin
}
