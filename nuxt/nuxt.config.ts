import  { resolve } from 'path'
const layerDir = resolve('..', 'layer')
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: [
    layerDir
  ]
})
