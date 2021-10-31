<template>
  <div class="rounded-lg overflow-hidden border border-gray-300 bg-white mb-6">
    <div class="flex">
      <div class="img-card flex justify-center items-center overflow-hidden">
        <img class="h-full" :src="data.image" alt="" srcset="" />
      </div>
      <div class="p-4">
        <div class="card-category opacity-40">{{ data.category }}</div>
        <div class="card-title">{{ data.title }}</div>
        <div class="opacity-60 mt-4 hidden md:block">
          {{ data.thumb_description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['data'],
}
</script>
