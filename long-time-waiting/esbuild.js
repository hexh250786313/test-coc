async function start() {
  await require('esbuild').build({
    entryPoints: ['index.ts'],
    bundle: true,
    minify: process.env.NODE_ENV === 'production',
    sourcemap: process.env.NODE_ENV === 'development',
    mainFields: ['module', 'main'],
    external: ['coc.nvim'],
    platform: 'node',
    target: 'node10.12',
    outfile: 'index.js',
    plugins: [],
  })
}

start().catch((e) => {
  console.error(e)
})
