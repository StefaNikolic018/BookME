<template>
  <div class="border-2 border-black rounded-xl">
    <div class="relative">
      <img
        class="h-64 w-full rounded-lg object-cover object-center lg:h-80"
        :src="image"
        :alt="title"
      />
    </div>
    <div class="px-3 pb-3">
      <h1 class="mt-6 text-xl font-semibold text-gray-800 dark:text-white">
        {{ title }}
      </h1>

      <hr class="my-3 w-full text-blue-500" />

      <p class="text-sm text-gray-500 dark:text-gray-400">
        {{ description }}
      </p>
      <router-link
        class="mt-4 inline-block text-indigo-500 underline hover:text-indigo-400"
        :to="'/book/' + id"
        >Read more</router-link
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Item",
  props: {
    id: Number,
    title: String,
    description: String,
    image: String,
  },
});
</script>
