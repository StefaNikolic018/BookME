<template>
  <div class="container mx-auto px-6 py-10">
    <div class="text-center">
      <h1
        class="text-3xl font-semibold capitalize text-gray-800 dark:text-white lg:text-4xl"
      >
        Edit a list
      </h1>
      <div class="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
        <div class="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
          <div class="px-5 py-7">
            <label class="font-semibold text-sm text-gray-600 pb-1 block"
              >Title</label
            >
            <input
              type="text"
              v-model="title"
              min="6"
              class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
            />
            <label class="font-semibold text-sm text-gray-600 pb-1 block"
              >Choose a book:</label
            >
            <div
              class="flex flex-col items-start justify-start my-10 h-96 overflow-y-scroll"
            >
              <div v-for="book in books" :key="book.id" class="flex flex-col">
                <label class="inline-flex items-center my-2">
                  <input
                    type="checkbox"
                    class="form-checkbox h-5 w-5 text-gray-600"
                    @click="addRemoveBook(book.id)"
                    :checked="book_list.includes(book.id)"
                  /><span class="ml-2 text-gray-700">{{ book.title }}</span>
                </label>
              </div>
            </div>
            <button
              type="button"
              class="transition duration-200 text-white w-full py-2.5 rounded-lg text-sm shadow-sm font-semibold text-center inline-block"
              :class="
                isDisabled
                  ? 'bg-blue-300 hover:bg-blue-300 focus:bg-blue-300 cursor-not-allowed'
                  : 'bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm hover:shadow-md '
              "
              @click="submit"
              :disabled="isDisabled"
            >
              <span class="inline-block mr-2">Submit</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="w-4 h-4 inline-block"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import List from "@/types/Lists";
import { defineComponent } from "vue";
import { mapGetters, mapActions } from "vuex";

export default defineComponent({
  name: "EditListView",
  data() {
    return {
      title: "",
      book_list: [] as Array<string>,
    };
  },
  methods: {
    ...mapActions(["editBookList", "setBookList"]),
    addRemoveBook(id: string) {
      this.book_list.includes(id)
        ? (this.book_list = this.book_list.filter(
            (book_id: string) => book_id !== id
          ))
        : this.book_list.push(id);
    },
    submit() {
      this.editBookList({
        list: {
          id: this.$route.params.id,
          title: this.title,
          book_list: this.book_list,
          user: this.user.user_id,
        },
        listId: this.$route.params.id,
      });
      this.setBookList();
      this.$router.push("/lists");
    },
  },
  computed: {
    ...mapGetters(["user", "books"]),
    isDisabled(): boolean {
      return this.title.length <= 6 || this.book_list.length == 0;
    },
  },
  mounted() {
    const list = (this.title = this.user.lists.find(
      (l: List) => l.id == this.$route.params.id
    ));
    this.title = list.title;
    this.book_list = list.book_list;
  },
});
</script>
