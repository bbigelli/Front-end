export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://wswork.com.br',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})