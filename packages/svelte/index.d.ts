// TypeScript Version: 3.0

declare module '*.svelte' {
  import { SvelteComponent } from 'svelte'

  const Component: typeof SvelteComponent
  export default Component
}
