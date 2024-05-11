import dts from 'bun-plugin-dts'

await Bun.build({
  entrypoints: ['./src/index.ts', './src/vite.ts'],
  outdir: './dist',
  format: 'esm',
  target: 'node',
  plugins: [dts()],
  external: ['util', 'child_process', '@figureland/git']
})
