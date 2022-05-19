<script>
import ColorThemeBox from "./ColorThemeBox.vue";
import SidebarNavs from "./SidebarNavs.vue";
import HeaderSearchbox from "./HeaderSearchbox.vue";
export default {
  name: "DashboardComponent",
  components: {
    SidebarNavs,
    ColorThemeBox,
    HeaderSearchbox,
  },
  data() {
    return {
      color: localStorage.color,
    };
  },
};
</script>
<template>
  <div class="w-full">
    <div
      class="fixed inset-0 flex z-40 md:hidden"
      role="dialog"
      aria-modal="true"
    >
      <div
        class="fixed inset-0 bg-bray-500 bg-opacity-75"
        aria-hidden="true"
      ></div>

      <div
        class="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-bray-500"
      >
        <div class="absolute top-0 right-0 -mr-12 pt-2">
          <button
            type="button"
            class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <span class="sr-only">Close sidebar</span>

            <svg
              class="h-6 w-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      <div class="flex-shrink-0 w-14" aria-hidden="true"></div>
    </div>

    <div
      class="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 border border-bray-300"
    >
      <div class="flex-1 flex flex-col min-h-0 bg-bray-500">
        <div class="flex items-center h-16 flex-shrink-0 px-4 bg-bray-500">
          <h1 class="text-2xl font-bold text-gray-300">
            <span :class="`text-${color}`" class="">Blox</span><span>Safe</span>
          </h1>
        </div>
        <div class="flex-1 flex flex-col overflow-y-auto">
          <nav class="flex-1 px-3 py-4 space-y-1">
            <SidebarNavs />
          </nav>
          <ColorThemeBox />
        </div>
      </div>
    </div>
    <div class="md:pl-64 flex flex-col">
      <div
        class="sticky top-0 z-10 border-bray-300 border-b flex-shrink-0 flex h-16 bg-bray-500"
      >
        <button
          type="button"
          class="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
        >
          <span class="sr-only">Open sidebar</span>

          <svg
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </button>
        <div class="flex-1 px-5 flex justify-between">
          <div class="flex-1 flex">
            <HeaderSearchbox />
          </div>
        </div>
      </div>
      <!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
      <!--
  This example requires updating your template:

  ```
  <html class="h-full bg-gray-50">
  <body class="h-full">
  ```
-->
      <div class="min-h-full flex flex-col justify-center sm:px-6 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div
            class="bg-bray-500 border-bray-300 border py-8 px-4 shadow sm:rounded-lg sm:px-10"
          >
            <form class="space-y-6" action="#" method="POST">
              <div>
                <label
                  for="email"
                  class="block text-sm font-medium text-gray-400"
                >
                  Email address
                </label>
                <div class="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autocomplete="email"
                    required
                    class="appearance-none block w-full bg-bray-500 px-3 py-2 border border-bray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  for="password"
                  class="block text-sm font-medium text-gray-400"
                >
                  Password
                </label>
                <div class="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autocomplete="current-password"
                    required
                    class="appearance-none block w-full bg-bray-500 px-3 py-2 border border-bray-300 rounded-md shadow-sm placeholder-gray-400 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  :class="`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-${color} focus:outline-none`"
                >
                  Sign in
                </button>
              </div>
            </form>

            <div class="mt-6">
              <div class="relative">
                <div class="absolute inset-0 flex items-center">
                  <div class="w-full border-t border-bray-300"></div>
                </div>
                <div class="relative flex justify-center text-sm">
                  <span
                    class="px-2 bg-bray-500 border-bray-300 border text-gray-500"
                  >
                    Or
                  </span>
                </div>
              </div>

              <div class="mt-6 grid grid-cols-2 gap-3">
                <div>
                  <a
                    href=""
                    class="w-full space-x-2 inline-flex py-2 px-4 border border-bray-300 rounded-md shadow-sm bg-bray-500 border-bray-300 border text-sm font-medium text-gray-500 hover:bg-bray-400"
                  >
                    <span class="sr-only">Sign in with Twitter</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span>Community</span>
                  </a>
                </div>

                <div>
                  <a
                    href=""
                    class="w-full space-x-2 inline-flex py-2 px-4 border border-bray-300 rounded-md shadow-sm bg-bray-500 border-bray-300 border text-sm font-medium text-gray-500 hover:bg-bray-400"
                  >
                    <span class="sr-only">Sign in with Twitter</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span>Community</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
