<template>
  <Book />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Book from "@/components/Book.vue";

export default defineComponent({
  name: "DetailsView",
  components: { Book },
});
</script>
