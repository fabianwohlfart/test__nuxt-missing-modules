import  { resolve } from 'path'
const layerDir = resolve('../..', '_Another', 'another__foundation', 'test')
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: [
    layerDir
  ]
})
