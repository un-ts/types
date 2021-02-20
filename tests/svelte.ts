import App from './test.svelte'

const app = document.querySelector<HTMLElement>('#app')

if (app) {
  // eslint-disable-next-line no-new
  new App({
    target: app,
  })
} else {
  throw new Error('no app element found')
}
