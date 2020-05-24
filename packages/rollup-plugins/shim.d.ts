declare module '@rollup/plugin-babel' {
  import { TransformOptions } from '@babel/core'
  import { Plugin, WatcherOptions } from 'rollup'

  export interface BabelInputOptions
    extends Omit<TransformOptions, 'include' | 'exclude'>,
      WatcherOptions {
    externalHelpers?: boolean
    externalHelpersWhitelist?: string[]
    extensions?: string[]
    babelHelpers?: 'bundled' | 'runtime' | 'inline' | 'external'
    skipPreflightCheck?: boolean
  }

  export interface BabelInputPlugin extends Plugin {
    (options?: BabelInputOptions): Plugin
  }

  export interface BabelOutputOptions
    extends Omit<TransformOptions, 'include' | 'exclude'> {
    allowAllFormats?: boolean
  }

  export interface BabelOutputPlugin extends Plugin {
    (options?: TransformOptions): Plugin
  }

  export const getBabelInputPlugin: BabelInputPlugin

  export const getBabelOutputPlugin: BabelOutputPlugin

  export { getBabelInputPlugin as babel }

  export default getBabelInputPlugin
}
