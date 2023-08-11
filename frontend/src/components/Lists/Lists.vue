<template>
  <div
    class="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3"
  >
    <router-link
      class="py-2 px-6 bg-purple-300 hover:bg-purple-200 transition-all duration-150 rounded-xl flex justify-center items-center"
      to="/lists/new"
    >
      CREATE A NEW LIST
    </router-link>
    <List
      v-for="list in user.lists"
      :key="list.id"
      :id="list.id"
      :title="list.title"
      :book_list="list.book_list"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import { mapActions, mapGetters } from "vuex";

import List from "./List.vue";

export default defineComponent({
  name: "Cards",
  components: { List },
  computed: {
    ...mapGetters(["user"]),
  },
  methods: {
    ...mapActions(["setBookList"]),
  },
  created() {
    this.setBookList();
  },
});
</script>
