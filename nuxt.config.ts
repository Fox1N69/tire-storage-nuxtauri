// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/image',
    "@nuxtjs/tailwindcss",
    'shadcn-nuxt',
    "nuxt-icon"
  ],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: 'UI',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  } 
})
