<p align="center">
  <img src="./public/icon.svg" alt="Cacao Kit Frontend" width="128" height="128">
</p>

<h3 align="center">Cacao Kit Frontend</h3>

<p align="center">
  Nuxt app with i18n support for a headless Kirby project<br>
  <a href="https://kirby-nuxt-starterkit.netlify.app"><strong>Explore the kit live »</strong></a>
</p>

<br>

# Cacao Kit Frontend

This repository provides a minimal but feature-rich Nuxt 3 starter kit for Kirby CMS. It is the evolved version of my [`kirby-nuxt-starterkit`](https://github.com/johannschopplich/kirby-nuxt-starterkit) and my best practice solution to build a Nuxt 3 based frontend on top of Kirby in headless mode.

The content is fetched using the [`nuxt-kql`](https://nuxt-kql.jhnn.dev) module from the [`cacao-kit-backend`](https://github.com/johannschopplich/cacao-kit-backend), a headless Kirby instance.

It's built on a block-first approach. Meaning, you can use Kirby's page structure as the source of truth and don't have to replicate the page structure in Nuxt. All pages are rendered by the [catch-all route](./pages/[...id].vue).

## Key Features

- 🌐 Internationalization with [`@leanera/nuxt-i18n`](https://github.com/leanera/nuxt-i18n)
- 🏆 Motto: [“Everything is a block”](./components/Kirby/Block/)
  - No more Nuxt pages – use Kirby's page structure as the source of truth.
  - All pages are rendered by the [catch-all route](./pages/[...id].vue).
  - Kirby blocks define what to render for each page.
- 🫂 Kirby Query Language with [`nuxt-kql`](https://nuxt-kql.jhnn.dev)
- 🏛 Global [site data](./plugins/site.ts) similar to Kirby's `$site`
- 🔎 SSR generated SEO data
- 📐 Prettier & ESLint
- 🔢 Pre-configured [VSCode settings](./.vscode/settings.json)

## Usage

### Prerequisites

1. Enable [Corepack](https://github.com/nodejs/corepack) using `corepack enable`
2. Install dependencies using `pnpm install`
3. Adapt the relevant environment variables:

```bash
# Base URL of the Kirby backend
KIRBY_BASE_URL=
# Token for bearer authentication
# See https://github.com/johannschopplich/cacao-kit-backend#bearer-token
KIRBY_API_TOKEN=
```

### Development

1. Start the development server using `pnpm run dev`
2. Visit [localhost:3000](http://localhost:3000/)

> ℹ️ Enable [Take Over Mode](https://vuejs.org/guide/typescript/overview.html#takeover-mode) in Visual Studio Code.

### Production

Build the application for production with `pnpm run build`.

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment).

### What's Kirby?

- **[getkirby.com](https://getkirby.com)** – Get to know the CMS.
- **[Try it](https://getkirby.com/try)** – Take a test ride with our online demo. Or download one of our kits to get started.
- **[Documentation](https://getkirby.com/docs/guide)** – Read the official guide, reference and cookbook recipes.
- **[Issues](https://github.com/getkirby/kirby/issues)** – Report bugs and other problems.
- **[Feedback](https://feedback.getkirby.com)** – You have an idea for Kirby? Share it.
- **[Forum](https://forum.getkirby.com)** – Whenever you get stuck, don't hesitate to reach out for questions and support.
- **[Discord](https://chat.getkirby.com)** – Hang out and meet the community.
- **[YouTube](https://youtube.com/kirbyCasts)** - Watch the latest video tutorials visually with Bastian.
- **[Twitter](https://twitter.com/getkirby)** – Spread the word.
- **[Instagram](https://www.instagram.com/getkirby/)** – Share your creations: #madewithkirby.

## License

[MIT](./LICENSE) License © 2023-present [Johann Schopplich](https://github.com/johannschopplich)
