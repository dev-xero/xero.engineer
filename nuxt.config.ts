// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    typescript: {
        strict: true,
        typeCheck: true,
    },
    experimental: {
        watcher: "chokidar",
    },
    modules: ["@nuxtjs/eslint-module", "@nuxt/content"],
});
