<template>
  <div class="flex flex-col items-center justify-center">
    <div class="border-2 border-black rounded-xl w-1/2 mt-10">
      <div class="relative">
        <img
          class="h-full w-full rounded-lg lg:h-80 object-contain mt-5"
          :src="book.image"
          :alt="book.title"
        />
      </div>
      <div class="px-3 pb-3">
        <h1 class="mt-6 text-xl font-semibold text-gray-800 dark:text-white">
          {{ book.title }}
        </h1>

        <hr class="my-3 w-full text-blue-500" />

        <p class="text-sm text-gray-500 dark:text-gray-400">
          {{ book.description }}
        </p>
      </div>
    </div>
    <div
      v-if="user.token && user.lists.filter((l: List) => !l.book_list.includes(book.id)).length"
      class="border-2 border-black rounded-xl w-1/2 mt-5"
    >
      <p class="border-b border-black">Add to list:</p>
      <div
        v-for="list in user.lists.filter((l: List) => !l.book_list.includes(book.id))"
        :key="list.id"
        class="border-b border-black p-2 w-full flex justify-center items-center gap-5 rounded-xl"
      >
        {{ list.title }}
        <button
          class="text-3xl px-3 bg-green-300 rounded-xl hover:bg-green-200 transition-all duration-100"
          @click="addBookToList(list.id)"
        >
          +
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";
import List from "@/types/Lists";

export default defineComponent({
  name: "Book",
  computed: {
    ...mapGetters(["book", "user"]),
  },
  methods: {
    ...mapActions(["setCurrentId", "editBookList"]),
    addBookToList(id: string) {
      const allLists = [...this.user.lists];
      const specificList = allLists.find((l) => l.id == id);
      specificList.book_list.push(this.book.id);
      this.editBookList({ list: specificList, listId: id });
    },
  },
  beforeMount() {
    this.setCurrentId(this.$route.params.id);
  },
});
</script>
