<script>
export default {
  name: "ScriptsDisplay",
  data() {
    return {
      color: localStorage.color,
      scripts: null,
    };
  },
  async created() {
    const response = await fetch(
      `${window.$BackendURL}/api/v1/script/owner/jub0t`
    );
    const { Data: scripts } = await response.json();
    this.scripts = scripts;
  },
};
</script>
<template>
  <div class="px-4 mt-4">
    <h1 class="text-gray-300 text-xl font-bold">My Script Collection</h1>
    <ul
      role="list"
      class="grid grid-cols-1 mt-1 gap-6 lg:grid-cols-2 xl:grid-cols-3"
    >
      <div v-for="(item, index) in scripts">
        <li
          class="col-span-1 bg-bray-500 border-bray-300 border rounded-lg shadow-lg divide-y divide-bray-200"
        >
          <div class="w-full flex items-center justify-between p-6 space-x-6">
            <div class="flex-1 truncate">
              <p :class="`mt-1 text-gray-300 text-sm truncate`">
                {{ item.name }}
              </p>
            </div>
          </div>
          <div>
            <div :class="`-mt-px flex text-gray-400 divide-x divide-bray-200`">
              <div class="-ml-px w-0 flex-1 flex">
                <a
                  :href="`/manage-script?id=${item.id}`"
                  target="_blank"
                  :class="`relative -mr-px w-0 flex-1 space-x-1 inline-flex items-center justify-center py-3 text-sm font-medium border border-transparent rounded-bl-lg hover:text-${color}`"
                >
                  <span class="ml-3">Manage</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </li>
      </div>
      <!-- More people... -->
    </ul>
  </div>
</template>
