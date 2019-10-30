/* eslint-disable import/no-duplicates */
// tslint:disable: ordered-imports

declare module 'html-webpack-harddisk-plugin' {
  import { Plugin } from 'webpack'
  class HtmlWebpackHarddiskPlugin extends Plugin {}
  export = HtmlWebpackHarddiskPlugin
}

declare module 'html-webpack-inline-source-plugin' {
  import { Plugin } from 'webpack'
  class HtmlWebpackInlineSourcePlugin extends Plugin {}
  export = HtmlWebpackInlineSourcePlugin
}

declare module 'lazy-compile-webpack-plugin' {
  import { Plugin } from 'webpack'

  namespace LazyCompileWebpackPlugin {
    interface Options {
      refreshAfterCompile?: boolean
    }
  }

  class LazyCompileWebpackPlugin extends Plugin {
    constructor(options?: LazyCompileWebpackPlugin.Options)
  }

  export = LazyCompileWebpackPlugin
}
