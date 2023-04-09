
# esbuild-plugin-tailwind

Unofficial Tailwind CSS plugin for esbuild, but is as good as any.

## Usage

```
$ npm i -D esbuild-plugin-tailwind
```

```js
esbuild.build({
  plugins: [
    tailwind({
      config: {
        // Tailwind config
      },
      inlineSourcemap: true, // Defaut: false
      loader: 'text' // Default: 'css'
    })
  ]
})
```
