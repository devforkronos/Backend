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
        {{ apis }}
        <label
          v-if="(apis.length || 0) <= 0"
          class="rounded-md relative border border-bray-300 p-4 flex cursor-pointer focus:outline-none"
        >
          <div class="ml-3 flex flex-col">
            <span> No APIs </span>
            <span id="privacy-setting-0-description" class="block text-sm">
              You havent created an API yet.
            </span>
          </div>
        </label>
        <div class="flex">
          <div class="w-full mt-3 grid-cols-2 grid">
            <div>
              <h2 class="text-xl font-bold">My APIs</h2>
            </div>
            <div>
              <button
                :class="`bg-${color} float-right text-white rounded-md px-9 py-3`"
              >
                Create new
              </button>
            </div>
          </div>
        </div>
        <div class="mt-3">
          <div v-for="(item, index) in apis" class="w-full">
            <label
              class="rounded-md relative border w-full border-bray-300 p-4 flex cursor-pointer focus:outline-none"
            >
              <div class="ml-3 flex flex-col">
                <span
                  id="privacy-setting-0-label"
                  :class="`block text-sm font-medium text-${color}`"
                >
                  {{ item.name }}
                </span>
                <span id="privacy-setting-0-description" class="block text-sm">
                  {{ item.description }}
                </span>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  </fieldset>
</template>
