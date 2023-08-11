<template>
  <div
    class="border-2 border-black rounded-xl min-h-96 py-5 hover:scale-105 transition-all duration-150 relative"
  >
    <button
      class="absolute left-5 bottom-4 px-2 text-lg bg-red-400 hover:bg-red-500 transition-all duration-100 text-white rounded-lg"
      @click="toggleModal(id)"
    >
      X
    </button>
    <router-link
      class="absolute right-5 bottom-4 px-2 text-lg bg-indigo-400 hover:bg-indigo-500 transition-all duration-100 text-white rounded-lg"
      :to="`/lists/edit/${id}`"
    >
      Edit
    </router-link>
    <h2 class="">{{ title }}</h2>
    <div class="flex flex-row flex-wrap justify-start p-5 gap-5">
      <div
        v-for="book in books
          .filter((book: Book) => book_list?.includes(book.id))
          .slice(0, 3)"
        :key="book.id"
        class="border border-black w-24 overflow-hidden"
      >
        <img class="h-24 w-24" :src="book.image" :alt="book.image" />
        <small class="truncate block">{{ book.title }}</small>
      </div>
    </div>
    <hr class="mb-3" />
    <router-link
      class="text-purple-500 hover:text-purple-400 transition-all duration-100"
      :to="`/list/${id}`"
      >See whole list</router-link
    >
    <div
      :class="modal.isOpened ? 'flex' : 'hidden'"
      class="fixed left-0 top-0 h-full w-full items-center justify-center bg-black bg-opacity-50 py-10 z-20"
    >
      <div
        class="max-h-full w-full max-w-xl overflow-y-auto sm:rounded-2xl bg-white p-10"
      >
        <div class="w-full">
          <div class="m-8 my-20 max-w-[400px] mx-auto">
            <div class="mb-8">
              <h1 class="mb-4 text-3xl font-extrabold">
                Are you sure you want to delete this list?
              </h1>
            </div>
            <div class="space-y-4">
              <button
                class="p-3 bg-gray-800 rounded-full text-white w-full font-semibold hover:bg-gray-900 transition-all duration-150"
                @click="deleteList(modal.listId)"
              >
                Yes, delete it
              </button>
              <button
                class="p-3 border rounded-full w-full font-semibold bg-gray-200 hover:bg-gray-100 transition-all duration-150"
                @click="toggleModal()"
              >
                No, I'm kidding
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Book from "@/types/Books";
import { defineComponent, PropType } from "vue";
import { mapGetters, mapActions } from "vuex";

export default defineComponent({
  name: "List",
  data() {
    return {
      modal: {
        isOpened: false,
        listId: 0,
      },
    };
  },
  props: {
    id: Number,
    title: String,
    book_list: Array as PropType<string[]>,
  },
  methods: {
    ...mapActions(["removeList", "setBookList"]),
    toggleModal(id?: number) {
      this.modal.isOpened = !this.modal.isOpened;
      this.modal.listId = id ? id : this.modal.listId;
    },
    deleteList(id?: number) {
      this.removeList(id);
      this.modal.isOpened = false;
      this.$router.push("/");
    },
  },
  computed: {
    ...mapGetters(["books"]),
  },
});
</script>
