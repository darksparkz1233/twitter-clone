import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "/home/pavel/Documents/twitter-clone/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}