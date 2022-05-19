<script>
import APIsBox from "./APIsBox.vue";
import SidebarNavs from "./SidebarNavs.vue";
import ColorThemeBox from "./ColorThemeBox.vue";
import HeaderSearchbox from "./HeaderSearchbox.vue";
export default {
  name: "ErrorComponent404",
  components: {
    APIsBox,
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
      <div
        :class="`items-center grid-cols-1 grid flex justify-center w-full mt-20`"
      >
        <h1
          :class="`text-7xl space-x-3 font-black flex justify-center text-${color}`"
        >
          <span>404</span> <span>-</span>
          <span class="text-white"> Not Found</span>
        </h1>
        <br />
        <p class="text-gray-300 text-center justify-center w-full">
          <span>
            Looks like the page/content you were looking for does not exist on
            this server.</span
          >
          <br />
          <span
            >If you think this is a problem please contact
            <a :class="`text-${color}`" href="mailto:dev@jubot.site"
              >support</a
            ></span
          >
        </p>
        <div class="mt-3 flex justify-center">
          <a
            href="/dashboard"
            :class="`bg-${color} float-right text-white rounded-md px-9 py-3`"
          >
            Go Home
          </a>
        </div>
      </div>
      <!-- Content-->
    </div>
  </div>
</template>
