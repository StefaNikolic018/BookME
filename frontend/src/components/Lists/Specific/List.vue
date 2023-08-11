<template>
  <div
    class="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3"
  >
    <Item
      v-for="book in books.filter((b: Book) => specificList?.includes(b.id as string))"
      :key="book.id"
      :id="book.id"
      :title="book.title"
      :description="book.description"
      :image="book.image"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";

import Item from "./Item.vue";
import Book from "@/types/Books";

export default defineComponent({
  name: "List",
  data() {
    return {
      specificList: [] as Array<string>,
    };
  },
  components: { Item },
  computed: {
    ...mapGetters(["list", "books"]),
  },
  mounted() {
    this.specificList = this.list(this.$route.params.id);
  },
});
</script>
