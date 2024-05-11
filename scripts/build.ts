import dts from 'bun-plugin-dts'

await Bun.build({
  entrypoints: ['./src/index.ts', './src/git.ts', './src/vite.ts'],
  outdir: './dist',
  minify: false,
  plugins: [dts()],
  external: ['child_process', 'vite']
})
