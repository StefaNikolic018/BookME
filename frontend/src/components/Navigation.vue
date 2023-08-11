<template>
  <section class="bg-white dark:bg-gray-900">
    <nav
      x-data="{ isOpen: false }"
      class="container mx-auto p-6 lg:flex lg:items-center lg:justify-between"
    >
      <div class="flex items-center justify-between">
        <div>
          <router-link
            class="text-2xl font-bold text-gray-800 hover:text-gray-700 dark:text-white dark:hover:text-gray-300 lg:text-3xl"
            to="/"
            >BookME</router-link
          >
        </div>
      </div>

      <div
        class="absolute inset-x-0 z-10 w-full bg-white px-6 py-4 shadow-md transition-all duration-300 ease-in-out dark:bg-gray-900 lg:relative lg:top-0 lg:mt-0 lg:flex lg:w-auto lg:translate-x-0 lg:items-center lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none lg:dark:bg-transparent"
      >
        <div
          class="lg:-px-8 flex flex-col space-y-4 lg:mt-0 lg:flex-row lg:space-y-0"
        >
          <router-link
            class="transform text-gray-700 transition-colors duration-300 hover:text-purple-500 dark:text-gray-200 dark:hover:text-blue-400 lg:mx-8"
            to="/"
            >Home</router-link
          >
        </div>

        <router-link
          v-if="!user.token"
          class="mt-4 block rounded-xl bg-blue-600 px-4 py-2 text-center font-medium capitalize leading-5 text-white hover:bg-blue-500 lg:mt-0 lg:w-auto"
          to="/login"
        >
          LOGIN
        </router-link>
        <router-link
          v-if="user.token"
          class="mt-4 block rounded-xl bg-purple-600 px-4 py-2 text-center font-medium capitalize leading-5 text-white hover:bg-purple-500 lg:mt-0 lg:w-auto"
          to="/lists"
        >
          LISTS
        </router-link>
      </div>
    </nav>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "Navigation",
  computed: {
    ...mapGetters(["user"]),
  },
});
</script>
