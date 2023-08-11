<template>
  <div
    class="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3"
  >
    <Item
      v-for="book in books"
      :key="book.id"
      :id="book.id"
      :title="book.title"
      :description="book.description"
      :image="book.image"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import { mapActions, mapGetters } from "vuex";

import Item from "./Item.vue";

export default defineComponent({
  name: "Cards",
  components: { Item },
  computed: {
    ...mapGetters(["books"]),
  },
  methods: {
    ...mapActions(["getAllBooks", "setBookList"]),
  },
  created() {
    this.getAllBooks();
    this.setBookList();
  },
});
</script>
