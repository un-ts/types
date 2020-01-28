declare module 'rollup-plugin-babel' {
  import { TransformOptions } from '@babel/core'
  import { Plugin, WatcherOptions } from 'rollup'

  namespace babel {
    interface BabelOptions extends TransformOptions, WatcherOptions {
      externalHelpers?: boolean
      externalHelpersWhitelist?: string[]
      extensions?: string[]
    }

    interface Babel extends Plugin {
      (options?: BabelOptions): Plugin
    }
  }

  const babel: babel.Babel

  export = babel
}
