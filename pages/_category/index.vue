<template>
  <div class="page min-h-screen">
    <Navbar />
    <div class="content w-full mx-auto pt-10 pb-10 px-6">
      <div class="mb-3 text-3xl font-semibold capitalize">
        {{ $route.params.category }}
      </div>
      <div class="border-t border-gray-300 mb-5"></div>
      <div>
        <NuxtLink
          v-for="item in article"
          :key="item.id"
          :to="{
            path: `/${item.category.toLowerCase()}/${slug(item.title)}/${
              item.id
            }`,
          }"
        >
          <CardArticle :data="item" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  head() {
    return {
      title: `Kategori ${this.$route.params.category} - Yesdok Artikel`,
      meta: [
        {
          hid: 'og:site_name',
          name: 'og:site_name',
          content: 'Yesdok Artikel',
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: `Kategori ${this.$route.params.category} - Yesdok Artikel`,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content:
            'https://www.yesdok.com/visual/slideshow/screen shot 2021-10-30 at 8.35.42 am-article-1635558753.png',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: `Artikel ${this.$route.params.category} - Temukan artikel menarik lainnya disini`,
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: this.$store.state.site + this.$route.fullPath,
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: `Kategori ${this.$route.params.category} - Yesdok Artikel`,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content:
            'https://www.yesdok.com/visual/slideshow/screen shot 2021-10-30 at 8.35.42 am-article-1635558753.png',
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: `Artikel ${this.$route.params.category} - Temukan artikel menarik lainnya disini`,
        },
        {
          hid: 'apple-mobile-web-app-title',
          name: 'apple-mobile-web-app-title',
          content: 'Yesdok Artikel',
        },
        {
          hid: 'description',
          name: 'description',
          content: `Artikel ${this.$route.params.category} - Temukan artikel menarik lainnya disini`,
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: `yesdok, artikel, ${this.$route.params.category}`,
        },
      ],
    }
  },
  computed: {
    ...mapState(['article']),
  },
  beforeCreate() {
    this.$store.commit('getArticleByCategory', this.$route.params.category)
  },
  methods: {
    slug(val) {
      let temp = ''
      const word = val.split(' ')

      for (let i = 0; i < word.length; i++) {
        if (i === word.length - 1) {
          temp += word[i].toLowerCase()
        } else {
          temp += word[i].toLowerCase() + '-'
        }
      }

      return temp
    },
  },
}
</script>
