declare module '@rollup/plugin-url' {
  import { Plugin } from 'rollup'

  interface PluginURLOptions {
    limit?: number
    include?: string[]
    exclude?: string[]
    publicPath?: string
    emitFile?: boolean
    fileName?: string
    sourceDir?: string
  }

  declare function url(options?: PluginURLOptions): Plugin

  export default url
}
