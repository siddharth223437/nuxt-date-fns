 <h1>date-fns for Nuxt</h1>

<p>
  <a href="https://www.npmjs.com/package/nuxt3-date-fns"><img src="https://badgen.net/badge/npm/v9.6.6" alt="Version"></a>
  <a href="https://www.npmjs.com/package/nuxt3-date-fns"><img src="https://badgen.net/badge/license/MIT" alt="License"></a>
  <a href="https://www.npmjs.com/package/nuxt3-date-fns"><img src="https://badgen.net/badge/types/Included" alt="Types"></a>
</p>

## 💡 About

[date-fns](https://date-fns.org/) auto-import module for [Nuxt](https://nuxt.com/).

## 📦 Install

1. Install `nuxt-date-fns` as development dependency:

```bash
npm i nuxt-date-fns -D
```

```bash
yarn add nuxt-date-fns -D
```

```bash
pnpm i nuxt-date-fns -D
```

2. Add it to the `modules` section of your `nuxt.config`:

```ts
export default defineNuxtConfig({
  modules: ["nuxt-date-fns"],
});
```

## 🚀 Example

Use any [Date-Fns](https://date-fns.org/) methods in your Nuxt application, they will be auto-imported!

```html
<script setup>
  const date = useFormat(new Date(2024, 1, 11), "MM/dd/yyyy");
</script>

<template>
  <div>{{ date }}</div>
</template>
```

## 🔨 Config

| Name               | Default | Description                                                                           |
| ------------------ | ------- |---------------------------------------------------------------------------------------|
| `prefix`           | `'use'` | String to prepend before each date-fns function (false to disable)                    |


## 💻 Example - Config

```ts
export default defineNuxtConfig({
  modules: ["nuxt-date-fns"],
  "date-fns": {
    prefix: "_",
  },
});
```

## 📄 License

[MIT License](https://github.com/siddharth223437/nuxt-date-fns/blob/master/LICENSE) © 2024 - [Siddharth Sarathe](https://github.com/siddharth223437)
