<template>
  <div :class="`${isSearch && 'w-full'}`">
    <div class="hidden sm:flex items-center relative">
      <font-awesome-icon
        :icon="['fas', 'search']"
        class="text-lg opacity-30 absolute left-3"
      />
      <input
        v-model="input"
        type="text"
        placeholder="Cari"
        class="border border-gray-400 px-3 py-2 pl-9 rounded-lg"
        @keyup="search"
      />
    </div>
    <div class="flex sm:hidden">
      <div v-if="isSearch" class="w-5/6 flex items-center relative">
        <font-awesome-icon
          :icon="['fas', 'search']"
          class="text-lg opacity-30 absolute left-3"
        />
        <input
          v-model="input"
          type="text"
          placeholder="Cari"
          class="w-full border border-gray-400 px-3 py-2 pl-9 rounded-lg"
          @keyup="search"
        />
      </div>
      <button
        v-else
        class="px-3 py-2 text-white hover:bg-blue-600 bg-blue-500 rounded-lg"
        @click="toggleSearch"
      >
        <font-awesome-icon :icon="['fas', 'search']" />
      </button>
      <div v-if="isSearch" class="flex justify-end w-1/6">
        <button
          class="px-4 py-2 text-white hover:bg-red-600 bg-red-500 rounded-lg"
          @click="toggleSearch"
        >
          <font-awesome-icon :icon="['fas', 'times']" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      input: '',
    }
  },
  computed: {
    ...mapState(['isSearch']),
  },
  mounted() {
    this.$store.commit('getWidth', window.innerWidth)
  },
  methods: {
    toggleSearch() {
      this.$store.commit('searchMobile')
    },
    search() {
      if (this.input) {
        this.$store.commit('searchArticle', { param: this.input, status: true })
      } else {
        this.$store.commit('searchArticle', { param: '', status: false })
      }
    },
  },
}
</script>
