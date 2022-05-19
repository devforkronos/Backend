<script>
let Query = new URLSearchParams(window.location.search);
import SidebarNavs from "./SidebarNavs.vue";
import ColorThemeBox from "./ColorThemeBox.vue";
import HeaderSearchbox from "./HeaderSearchbox.vue";
import ToggleButton from "./ToggleButton.vue";
export default {
  name: "DashboardComponent",
  components: {
    SidebarNavs,
    ColorThemeBox,
    HeaderSearchbox,
    ToggleButton,
  },
  data() {
    return {
      script: {},
      color: localStorage.color,
    };
  },
  async created() {
    let id = Query.get("id");
    if (id) {
      const response = await fetch(
        `${window.$BackendURL}/api/v1/script/get/${id}`
      );
      const { Data: script } = await response.json();
      this.script = script || {};
      if (!script.content) {
        script.content = script.obfuscated_content;
      }
    }
  },
};
</script>
<template>
  <div class="w-full">
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
      <div class="px-4 py-4">
        <textarea
          placeholder="Enter script name here"
          v-model="script.content"
          :class="`scrollbar-thin py-1 scrollbar-thumb-${color} scrollbar-track-bray-400 overflow-y-scroll rounded text-gray-400 text-sm bg-bray-500 border border-bray-300 resize-none w-full focus:outline-none px-3`"
        >
        </textarea>
        <textarea
          placeholder="Enter script description"
          v-model="script.content"
          :class="`scrollbar-thin py-1 scrollbar-thumb-${color} scrollbar-track-bray-400 mt-3 overflow-y-scroll rounded text-gray-400 text-sm bg-bray-500 border border-bray-300 resize-none w-full focus:outline-none px-3`"
        >
        </textarea>
        <textarea
          placeholder="Paste your script code here"
          v-model="script.content"
          :class="`scrollbar-thin scrollbar-thumb-${color} scrollbar-track-bray-400 overflow-y-scroll rounded text-gray-400 h-screen text-sm bg-bray-500 border border-bray-300 resize-none w-full mt-3 focus:outline-none px-3 py-3`"
        >
        </textarea>
      </div>
      <!-- Content -->
    </div>
  </div>
</template>
