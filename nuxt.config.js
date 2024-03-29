const path = require("path");
var glob = require('glob');
var SocialSharing = require('vue-social-sharing');
// import Mode from 'frontmatter-markdown-loader/mode'


// async function getDynamicPaths(urlFilepathTable) {
//   return [].concat(
//     ...Object.keys(urlFilepathTable).map(url => {
//       var filepathGlob = urlFilepathTable[url];
//       return glob
//         .sync(filepathGlob, { cwd: "content" })
//         .map(filepath => `${url}/${path.basename(filepath, ".md")}`);
//     })
//   );
// }

export default async() => {
  return {
    /*
    ** Rendering mode
    ** Doc: https://nuxtjs.org/api/configuration-mode
    */
    mode: "spa",

    /*
    ** Headers of the page
    ** Doc: https://vue-meta.nuxtjs.org/api/#metainfo-properties
    */
    head: {
      title: "Portfolio website for Benjamin Cooley",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "Portfolio for Benjamin Cooley, data visualization specialist"
        }
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
    },
    css: [
      // CSS file in the project
      { src: '~assets/globalstyles.css', lang: 'css' }
    ],

    /*
    ** Nuxt.js modules
    ** Doc: https://nuxtjs.org/guide/modules
    */
    modules: [
      // Doc: https://http.nuxtjs.org
      "@nuxt/http",
      'bootstrap-vue/nuxt'
    ],

    generate: {

      // routes: await getDynamicPaths({
      //   "/posts": "posts/*.md"
      // })
    },

    /*
    ** Build configuration
    ** Doc: https://nuxtjs.org/api/configuration-build
    */
    build: {
      extractCSS: true,
      // extend(config, ctx) {
      //   // add frontmatter-markdown-loader
      //   config.module.rules.push({
      //     test: /\.md$/,
      //     include: path.resolve(__dirname, "content"),
      //     loader: "frontmatter-markdown-loader",
      //     options: {
      //       mode: [Mode.VUE_COMPONENT, Mode.META]
      //     }
      //   });
      // }
    }
  }
};
