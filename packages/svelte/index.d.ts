// TypeScript Version: 3.0

declare module '*.svelte' {
  interface ComponentOptions<P> {
    target: HTMLElement
    anchor?: HTMLElement | null
    props?: P
    hydrate?: boolean
    intro?: boolean
  }

  interface Component<P = {}> {
    // eslint-disable-next-line @typescript-eslint/no-misused-new
    new (options: ComponentOptions<P>): Component
    // client-side methods
    $set(props: P): void
    // type-coverage:ignore-next-line
    $on(event: string, callback: (event: CustomEvent) => void): void
    $destroy(): void

    // server-side methods
    render(
      props?: P,
    ): {
      html: string
      css: { code: string; map: string | null }
      head?: string
    }
  }

  const component: Component

  export default component
}
