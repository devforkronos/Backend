<script>
export default {
  name: "ScriptsDisplay",
  data() {
    return {
      color: localStorage.color,
      scripts: [],
    };
  },
  async created() {
    const response = await fetch(`${window.$BackendURL}/api/v1/scripts/me`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ token: localStorage.token }),
    });
    var { Data: scripts } = await response.json();
    this.scripts = scripts;
    if (!scripts) {
      this.scripts = [];
    }
  },
};
</script>
<template>
  <div class="px-4 mt-4">
    <div class="w-full mt-3 text-gray-300 grid-cols-2 grid">
      <div>
        <h2 class="text-2xl font-bold">My Scripts</h2>
        <p :class="`text-sm text-gray-400`">Manage/edit your Roblox scripts.</p>
      </div>
      <div>
        <a
          href="/scripts/new"
          :class="`bg-${color} float-right text-white rounded-md px-9 py-3`"
        >
          Publish New
        </a>
      </div>
    </div>
    <ul
      role="list"
      class="grid mt-5 grid-cols-1 mt-1 gap-6 lg:grid-cols-2 xl:grid-cols-3"
    >
      <div
        class="xl:col-span-3 mt-1 lg:col-span-2 w-full"
        v-if="(scripts.length || 0) <= 0"
      >
        <label
          class="rounded-md w-full relative border border-bray-300 p-4 flex cursor-pointer focus:outline-none"
        >
          <div class="ml-3 flex flex-col">
            <span class="block text-sm text-gray-400">
              You haven't published a script yet.
            </span>
          </div>
        </label>
      </div>
      <div v-for="item in scripts" :key="item">
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
