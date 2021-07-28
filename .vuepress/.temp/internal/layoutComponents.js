import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("/Users/JP26922/_GIT/home-assignment-01/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("/Users/JP26922/_GIT/home-assignment-01/node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
}
