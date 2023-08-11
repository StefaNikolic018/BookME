<template>
  <main>
    <section class="bg-white dark:bg-gray-900">
      <div class="container mx-auto px-6 py-10">
        <div class="text-center">
          <h1
            class="text-3xl font-semibold capitalize text-gray-800 dark:text-white lg:text-4xl mt-20 lg:mt-0"
          >
            The Books
          </h1>

          <p class="mx-auto mt-4 max-w-lg text-gray-500">
            Books are windows to new worlds, ideas, and emotions, inviting
            readers to explore and expand their horizons.
          </p>
        </div>

        <Cards />
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Cards from "@/components/Cards/Cards.vue";

export default defineComponent({
  name: "HomeView",
  components: { Cards },
});
</script>
