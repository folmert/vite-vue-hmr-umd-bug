# vite-vue-hmr-umd-bug
Minimal reproducible example of broken HMR in Vite/Vue

How to reproduce:
1. Clone this repo (it was created with `npm create vite@latest`)
2. `npm install`
3. `npm run build`
4. Uncomment `app.mount('#app')` in `main.ts`
5. Run `npm run dev`
6. Type anything in App.vue (template section), HMR works.
7. Uncomment in `App.vue`:
```
   // import * as umdTest from '../dist/hmr-test.umd.js'
   // console.log(umdTest)
```
8. Type anything in `App.vue` (template section), HMR doesn't work.
9. No profit.
