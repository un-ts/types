// tslint:disable: ordered-imports
declare module 'rollup-plugin-copy' {
  import { Plugin } from 'rollup'

  namespace copy {
    interface CopyOptions {
      targets?: Array<{
        src: string | string[]
        dest: string | string[]
        rename?: string | ((name: string, extension: string) => string)
      }>
      verbose?: boolean
      hook?: string
      copyOnce?: string
    }

    interface Copy extends Plugin {
      (options: CopyOptions): Plugin
    }
  }

  const copy: copy.Copy

  export = copy
}

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

declare module 'rollup-plugin-typescript' {
  import { Plugin, WatcherOptions } from 'rollup'
  import {
    CompilerOptions,
    JsxEmit,
    ModuleKind,
    ScriptTarget,
  } from 'typescript'

  // eslint-disable-next-line @typescript-eslint/class-name-casing
  interface _TypeScriptOptions extends CompilerOptions {
    // type-coverage:ignore-next-line
    jsx?: any
    // type-coverage:ignore-next-line
    module?: any
    // type-coverage:ignore-next-line
    target?: any
  }

  namespace typescript {
    interface TypeScriptOptions extends _TypeScriptOptions {
      jsx: string | JsxEmit
      module: string | ModuleKind
      target: string | ScriptTarget
    }

    interface TypeScript extends Plugin {
      (options?: TypeScriptOptions): Plugin
    }
  }

  const typescript: typescript.TypeScript

  export = typescript
}
