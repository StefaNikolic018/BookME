<template>
  <div class="container mx-auto px-6 py-10">
    <div class="text-center">
      <h1
        class="text-3xl font-semibold capitalize text-gray-800 dark:text-white lg:text-4xl"
      >
        {{ title }}
      </h1>
    </div>

    <List />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import List from "@/components/Lists/Specific/List.vue";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "ListView",
  data() {
    return {
      title: "",
    };
  },
  components: { List },
  computed: {
    ...mapGetters(["user"]),
  },
  mounted() {
    this.title = this.user.lists.find(
      ({ id }: { id: string }) => id == this.$route.params.id
    ).title;
  },
});
</script>
