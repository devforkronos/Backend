<script>
let Query = new URLSearchParams(window.location.search);
import ToggleButton from "./ToggleButton.vue";
import SidebarNavs from "./SidebarNavs.vue";
import ColorThemeBox from "./ColorThemeBox.vue";
import HeaderSearchbox from "./HeaderSearchbox.vue";
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
      toggleNewScriptObfuscation() {
        if (
          localStorage.new_script_obfuscation == true ||
          localStorage.new_script_obfuscation == "true"
        ) {
          localStorage.setItem("new_script_obfuscation", false);
        } else {
          localStorage.setItem("new_script_obfuscation", true);
        }
      },
      toggleNewScriptPrivate() {
        if (
          localStorage.new_script_private == true ||
          localStorage.new_script_private == "true"
        ) {
          localStorage.setItem("new_script_private", false);
        } else {
          localStorage.setItem("new_script_private", true);
        }
      },

      script: {},
      localStorage: localStorage,
      new_script_private: localStorage.new_script_private,
      color: localStorage.color,
    };
  },
  async created() {
    if (!localStorage.new_script_private)
      localStorage.new_script_private = false;
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
        <div class="grid text-gray-300 items-center flex w-full grid-cols-2">
          <div>Private</div>
          <div class="w-full float-right">
            <ToggleButton
              :toggled="new_script_private"
              :onClick="toggleNewScriptPrivate"
            />
          </div>
        </div>
        <div
          class="mt-3 grid text-gray-300 items-center flex w-full grid-cols-2"
        >
          <div>Obfuscation</div>
          <div class="w-full float-right">
            <ToggleButton
              :toggled="localStorage.new_script_obfuscation"
              :onClick="toggleNewScriptObfuscation"
            />
          </div>
        </div>

        <input
          placeholder="Enter script name here"
          v-model="localStorage.new_script_name"
          :class="`scrollbar-thin py-3 scrollbar-thumb-${color} scrollbar-track-bray-400 mt-3 overflow-y-scroll rounded text-gray-300 text-sm bg-bray-500 border border-bray-300 resize-none w-full focus:outline-none px-3`"
        />
        <input
          placeholder="Enter script description"
          v-model="localStorage.new_script_description"
          :class="`scrollbar-thin py-3 scrollbar-thumb-${color} scrollbar-track-bray-400 mt-3 overflow-y-scroll rounded text-gray-300 text-sm bg-bray-500 border border-bray-300 resize-none w-full focus:outline-none px-3`"
        />
        <textarea
          placeholder="Paste your script code here"
          v-model="localStorage.new_script_code"
          :class="`scrollbar-thin scrollbar-thumb-${color} scrollbar-track-bray-400 overflow-y-scroll rounded text-gray-300 h-screen text-sm bg-bray-500 border border-bray-300 resize-none w-full mt-3 focus:outline-none px-3 py-3`"
        >
        </textarea>
        <div class="grid-cols-1 grid mt-1">
          <h1 class="text-gray-200 font-bold text-3xl">
            <span>{{ script["name"] || "" }}</span>
          </h1>
          <button
            :class="`bg-${color} float-right text-white rounded-md px-9 py-3`"
          >
            Publish
          </button>
        </div>
      </div>
      <!-- Content -->
    </div>
  </div>
</template>
