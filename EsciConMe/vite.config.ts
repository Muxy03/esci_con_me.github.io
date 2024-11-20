import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vite.dev/config/
export default defineConfig({
  base:"/esci_con_me.github.io/",
  plugins: [svelte()],
})