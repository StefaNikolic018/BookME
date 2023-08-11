<template>
  <div class="container mx-auto px-6 py-10">
    <div class="text-center">
      <h1
        class="text-3xl font-semibold capitalize text-gray-800 dark:text-white lg:text-4xl"
      >
        The Lists
      </h1>

      <p class="mx-auto mt-4 max-w-lg text-gray-500">
        A list of books is a curated collection of literary journeys, each
        waiting to transport readers to diverse realms of imagination and
        knowledge.
      </p>
    </div>

    <Lists />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Lists from "@/components/Lists/Lists.vue";

export default defineComponent({
  name: "ListsView",
  components: { Lists },
});
</script>
