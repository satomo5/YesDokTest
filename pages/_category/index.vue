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
      title: `Kategori ${this.$route.params.category} - Yesdok Article`,
      meta: [
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
