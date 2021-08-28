declare module '*.json' {
  namespace json {
    interface JsonObject {
      [key: string]: JsonItem | JsonItem[]
    }
    type JsonItem = JsonObject | number | string | null
    type Json = JsonItem | JsonItem[]
  }

  const json: json.Json
  export = json
}

declare module '*.css' {
  const styles: Record<string, string>
  export = styles
}

declare module '*.less' {
  const styles: Record<string, string>
  export = styles
}

declare module '*.pcss' {
  const styles: Record<string, string>
  export = styles
}

declare module '*.sass' {
  const styles: Record<string, string>
  export = styles
}

declare module '*.scss' {
  const styles: Record<string, string>
  export = styles
}

declare module '*.styl' {
  const styles: Record<string, string>
  export = styles
}

declare module '*.stylus' {
  const styles: Record<string, string>
  export = styles
}

declare module '*.html' {
  const content: string
  export = content
}

declare module '*.pug' {
  const content: string
  export = content
}

declare module '*.svg' {
  const content: string
  export = content
}
