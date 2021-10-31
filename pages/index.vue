<template>
  <div class="page min-h-screen">
    <Navbar />
    <div class="content w-full mx-auto pt-10 pb-10 px-6">
      <div class="flex justify-between items-center">
        <div v-if="!isSearch" class="text-3xl font-semibold">
          Artikel Terpopuler
        </div>
        <Search />
      </div>
      <div class="border-t border-gray-300 mt-2 mb-5"></div>
      <div v-if="article.length > 0">
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
      <div v-else>
        <div
          class="
            rounded-lg
            overflow-hidden
            border border-gray-300
            bg-white
            text-center
            py-12
            text-2xl
            font-semibold
            opacity-40
          "
        >
          Data tidak ditemukan!
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  head() {
    return {
      title: 'Yesdok Artikel',
      meta: [
        {
          hid: 'og:site_name',
          name: 'og:site_name',
          content: 'Yesdok Artikel',
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: 'Yesdok Artikel',
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: 'https://www.yesdok.com/visual/slideshow/screen shot 2021-10-30 at 8.35.42 am-article-1635558753.png',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: 'Cari berita apapun disini. Yesdok Artikel',
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: this.$store.state.site,
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Yesdok Artikel',
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: 'https://www.yesdok.com/visual/slideshow/screen shot 2021-10-30 at 8.35.42 am-article-1635558753.png',
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: 'Cari berita apapun disini. Yesdok Artikel',
        },
        {
          hid: 'apple-mobile-web-app-title',
          name: 'apple-mobile-web-app-title',
          content: 'Yesdok Artikel',
        },
        {
          hid: 'description',
          name: 'description',
          content: 'Cari berita apapun disini. Yesdok Artikel',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: `yesdok, artikel,${this.$store.state.keyword.map((item) => {
            return ` ${item}`
          })}`,
        },
      ],
    }
  },
  computed: {
    ...mapState(['article', 'keyword', 'isSearch', 'site']),
  },
  beforeCreate() {
    this.$store.commit('getArticle')
    this.$store.commit('getKeywords')
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
