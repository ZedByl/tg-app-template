import { ConfigEnv, defineConfig, UserConfigExport } from 'vite'
import react from '@vitejs/plugin-react'
import viteTsconfigPaths from 'vite-tsconfig-paths'

export default (options: ConfigEnv): UserConfigExport => {
  return defineConfig({
    envPrefix: 'REACT',
    // root: 'public',
    server: {
      host: '0.0.0.0',
      port: 3000,
      headers: { 'Access-Control-Allow-Origin': '*' },
    },
    build: {
      outDir: 'build',
    },
    css: {
      modules: {
        generateScopedName:
          options.command === 'serve' ? '[local]_[hash:base64:5]' : '[hash:base64:12]',
      },
      postcss: {},
    },
    plugins: [react(), viteTsconfigPaths()],
  })
}
