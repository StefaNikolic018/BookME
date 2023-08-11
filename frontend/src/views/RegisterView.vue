<template>
  <div class="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
    <h1 class="text-6xl font-bold">REGISTER</h1>
    <div class="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
      <div class="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
        <div class="px-5 py-7">
          <label class="font-semibold text-sm text-gray-600 pb-1 block"
            >Username</label
          >
          <input
            type="text"
            v-model="username"
            min="6"
            class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
          />
          <small v-if="errors.username" class="text-red-500 text-bold">{{
            errors.username
          }}</small>
          <label class="font-semibold text-sm text-gray-600 pb-1 block"
            >E-mail</label
          >
          <input
            type="email"
            v-model="email"
            class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
          />
          <label class="font-semibold text-sm text-gray-600 pb-1 block"
            >Password</label
          >
          <input
            type="password"
            v-model="password"
            min="8"
            class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
          />
          <button
            type="button"
            class="transition duration-200 text-white w-full py-2.5 rounded-lg text-sm shadow-sm font-semibold text-center inline-block"
            :class="
              isDisabled
                ? 'bg-blue-300 hover:bg-blue-300 focus:bg-blue-300 cursor-not-allowed'
                : 'bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm hover:shadow-md '
            "
            @click="register"
            :disabled="isDisabled"
          >
            <span class="inline-block mr-2">Register</span>
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
        <div class="py-5">
          <div class="flex justify-center">
            <div class="text-center sm:text-right whitespace-nowrap">
              <router-link
                class="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset"
                to="/login"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="w-4 h-4 inline-block align-text-bottom"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                <span class="inline-block ml-1">Login</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="py-5">
        <div class="grid grid-cols-2 gap-1">
          <div class="text-center sm:text-left whitespace-nowrap">
            <router-link
              class="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-200 focus:outline-none focus:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset"
              to="/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="w-4 h-4 inline-block align-text-top"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              <span class="inline-block ml-1"> Back to home </span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UserDataService from "@/services/UserDataService";

export default defineComponent({
  name: "RegisterView",
  data() {
    return {
      email: "" as string,
      password: "" as string,
      username: "" as string,
      errors: {
        username: "" as string,
      },
    };
  },
  computed: {
    isDisabled(): boolean {
      return (
        !this.isEmailValid || !this.isPasswordValid || !this.isUsernameValid
      );
    },
    isUsernameValid(): boolean {
      return this.username.length >= 6;
    },
    isEmailValid(): boolean {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(this.email);
    },
    isPasswordValid(): boolean {
      return this.password.length >= 8;
    },
  },
  methods: {
    register() {
      if (this.isEmailValid && this.isPasswordValid && this.isUsernameValid) {
        UserDataService.register(this.email, this.username, this.password)
          .then((res) => {
            console.log("Registered successfully");
            this.$router.push("/");
          })
          .catch((err) => {
            if (err.response.data.username) {
              this.errors.username = err.response.data.username.join("");
            } else {
              this.errors.username = "";
            }
          });
      } else {
        console.log("Invalid email or password");
      }
    },
  },
});
</script>
