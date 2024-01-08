import { resolve } from 'path'

console.log('💡 Extending Test', __dirname)

export default defineNuxtConfig({
  alias: {
    '@test': resolve(__dirname),
  }
})