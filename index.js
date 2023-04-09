
import fs from 'node:fs/promises'
import postcss from 'postcss'
import tailwind from 'tailwindcss'
import autoprefixer from 'autoprefixer'

async function handler (args, options) {
  const css = await fs.readFile(args.path, 'utf8')

  const plugins = [
    tailwind(options.config),
    autoprefixer
  ]

  const result = await postcss(plugins).process(css, {
    from: args.path,
    map: {
      inline: options.inlineSourcemap ?? false
    }
  })

  return {
    loader: options.loader ?? 'css',
    contents: result.css
  }
}

export default function tailwindPlugin (options) {
  function load (args) {
    return handler(args, options)
  }

  return {
    name: 'plugin-tailwind',
    setup (build) {
      build.onLoad({ filter: /\.css$/ }, load)
    }
  }
}
