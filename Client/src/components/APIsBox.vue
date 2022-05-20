<script>
export default {
  name: "APIsBox",
  data() {
    return {
      apis: [],
      color: localStorage.color,
    };
  },
  async created() {
    const response = await fetch(`${window.$BackendURL}/api/v1/apis/me`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ token: localStorage.token }),
    });
    var { Data: apis } = await response.json();
    this.apis = apis;
    if (!apis) {
      this.apis = [];
    }
  },
};
</script>
<template>
  <fieldset>
    <div
      class="px-4 py-4 grid-cols-1 grid text-gray-300 space-y-4 bg-bray-500 rounded-md"
    >
      <div class="w-full">
        <div class="flex">
          <div class="w-full mt-3 grid-cols-2 grid">
            <div>
              <h2 class="text-2xl font-bold">My APIs</h2>
              <p :class="`text-sm text-gray-400`">
                Manage your BloxSasfe data programatically.
              </p>
            </div>
            <div>
              <button
                :class="`bg-${color} float-right text-white rounded-md px-9 py-3`"
              >
                Create Key
              </button>
            </div>
          </div>
        </div>
        <div class="mt-3">
          <label
            v-if="(apis.length || 0) <= 0"
            class="rounded-md relative border border-bray-300 p-4 flex cursor-pointer focus:outline-none"
          >
            <div class="ml-3 flex flex-col">
              <span class="block text-sm text-gray-300">
                You currently have no API keys. Click the button on Top-right to
                create one.
              </span>
            </div>
          </label>
          <div v-for="item in apis" class="w-full" :key="item">
            <a
              :href="`/manage-api?id=${item.id}`"
              target="_blank"
              class="rounded-md relative border w-full border-bray-300 p-4 flex cursor-pointer focus:outline-none"
            >
              <div class="ml-3 flex flex-col">
                <span :class="`block text-sm font-medium text-${color}`">
                  {{ item.name }}
                </span>
                <span class="block text-sm">
                  {{ item.description }}
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </fieldset>
</template>
