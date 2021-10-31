<template>
  <div class="page min-h-screen">
    <Navbar />
    <div class="content w-full mx-auto pt-10 pb-10 px-6">
      <div class="md:flex">
        <div class="md:w-2/3 border-b border-gray-300 pb-7 mb-7 md:border-0">
          <div class="font-semibold mb-4">
            <NuxtLink class="text-2xl text-blue-600" to="/">Beranda</NuxtLink>
            <span class="text-2xl">/</span>
            <NuxtLink
              class="text-2xl text-blue-600"
              :to="{ path: `/${article.category.toLowerCase()}` }"
              >{{ article.category }}</NuxtLink
            >
          </div>
          <div class="rounded-lg overflow-hidden mb-5">
            <img class="w-full" :src="article.image" alt="" />
          </div>
          <div class="text-3xl md:text-4xl font-semibold mb-4">
            {{ article.title }}
          </div>
          <div class="text-lg opacity-40 mb-7">
            {{ article.place }} - {{ article.published_at }}
          </div>
          <div class="description text-lg" v-html="article.description"></div>
          <div class="text-lg mt-12 opacity-70">
            Penulis:
            <span class="text-lg font-semibold">{{ article.author }}</span>
          </div>
        </div>
        <div class="md:w-1/3 md:pl-10">
          <div class="text-2xl font-semibold mb-4">Artikel Lainnya</div>
          <div
            class="
              grid grid-cols-1
              sm:grid-cols-2
              md:grid-cols-1
              gap-5
              md:gap-0
            "
          >
            <NuxtLink
              v-for="item in recomendation"
              :key="item.id"
              :to="{
                path: `/${item.category.toLowerCase()}/${slug(item.title)}/${
                  item.id
                }`,
              }"
            >
              <div
                class="
                  rounded-lg
                  overflow-hidden
                  border border-gray-300
                  bg-white
                  md:mb-6
                "
              >
                <div class="flex justify-center items-center overflow-hidden">
                  <img class="h-full" :src="item.image" alt="" srcset="" />
                </div>
                <div class="p-4">
                  <div class="card-category opacity-40">
                    {{ item.category }}
                  </div>
                  <div class="text-xl font-semibold">{{ item.title }}</div>
                </div>
              </div>
            </NuxtLink>
          </div>
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
      title: this.$store.state.article.title + ' - Yesdok Artikel',
      meta: [
        {
          hid: 'og:site_name',
          name: 'og:site_name',
          content: 'Yesdok Artikel',
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.$store.state.article.title + ' - Yesdok Artikel',
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: this.$store.state.article.image,
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
          content: this.$store.state.article.thumb_description,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content:  this.$store.state.article.image,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.$store.state.article.thumb_description,
        },
        {
          hid: 'apple-mobile-web-app-title',
          name: 'apple-mobile-web-app-title',
          content: 'Yesdok Artikel',
        },
        {
          hid: 'author',
          name: 'author',
          content: this.$store.state.article.author,
        },
        {
          hid: 'description',
          name: 'description',
          content: this.$store.state.article.thumb_description,
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
    ...mapState(['article', 'recomendation']),
  },
  beforeCreate() {
    this.$store.commit('getArticleDetail', this.$route.params.detail)
    this.$store.commit('getArticleRecomended', this.$route.params.detail)
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
