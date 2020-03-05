A blog started template using Vue, Vue-Bootstrap, Markdown and Nuxt.

# Getting started

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

## Directory overview (at least the important ones)

- *components*: where custom Vue components live
- *content*: blog posts written in Markdown
- *layouts*: think of these like components, but mostly permanent features of a page (navbar, footer, etc)
- *pages*: where static pages are created in Vue
  - *index*: this is effectively the home page for the entire site
  - *blog*: this is the "home" page for your blog, where blog posts are rendered and listed using a `v-for` loop.
    - *posts*: this file acts as a template for your Markdown content to be rendered onto.
- *static*: where things like images and files you want to render live

## Adding posts

Posts can be added as Markdown files in the `content` directory. Parameters go in between the `---` marks at the top. These are then accessible in `blog.vue` and `_slug.vue` as props to be used within the template.
