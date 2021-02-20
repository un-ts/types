// tslint:disable: ordered-imports
declare module 'html-webpack-harddisk-plugin' {
  import { Compiler } from 'webpack'

  class HtmlWebpackHarddiskPlugin {
    apply(compiler: Compiler): void
  }

  export = HtmlWebpackHarddiskPlugin
}

declare module 'lazy-compile-webpack-plugin' {
  import { Compiler, Stats } from 'webpack'

  namespace LazyCompileWebpackPlugin {
    interface Options {
      refreshAfterCompile?: boolean
      ignores?:
        | RegExp[]
        | ((request: string, wpModule: Stats.Reason) => boolean)
    }
  }

  class LazyCompileWebpackPlugin {
    constructor(options?: LazyCompileWebpackPlugin.Options)

    apply(compiler: Compiler): void
  }

  export = LazyCompileWebpackPlugin
}
