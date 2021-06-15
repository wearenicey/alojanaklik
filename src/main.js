// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import '~/assets/scss/style.scss'
import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  head.script.push({ src: 'https://unpkg.com/codyhouse-framework/main/assets/js/util.js' });

}



// document.getElementsByTagName("html")[0].className += " js";
