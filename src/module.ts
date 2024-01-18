import { defineNuxtModule, createResolver, addImports } from '@nuxt/kit'
import * as dateFns from 'date-fns';

// Module options TypeScript interface definition
export interface ModuleOptions {
  /**
   * Prefix to be added before every date-fns function
   *
   * `false` to disable uppercasing
   *
   * @defaultValue `use`
   */
  prefix: false | string;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-date-fns',
    configKey: 'date-fns',
    compatibility: {
      nuxt: '^3.0.0'
    }
  },
  // Default configuration options of the Nuxt module
  defaults: {
    prefix: 'use'
  },
  setup (options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    Object.keys(dateFns).forEach(name => {
      const prefix =  options.prefix || ''
      const as = prefix ? prefix + capitalizeFirstLetter(name): name
      addImports({
        name,
        as,
        from: 'date-fns'
      })
    })
  }
})

function capitalizeFirstLetter(name: string) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}
