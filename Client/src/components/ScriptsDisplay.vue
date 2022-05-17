<script>
export default {
  name: "ScriptsDisplay",
  data() {
    return {
      color: localStorage.color,
    };
  },
};
</script>
<template>
  <div class="px-4 mt-4">
    <h1 class="text-gray-300 text-xl font-bold">My Scripts</h1>
    <ul
      role="list"
      class="grid grid-cols-1 mt-1 gap-6 lg:grid-cols-2 xl:grid-cols-3"
    >
      <li
        class="col-span-1 bg-bray-500 border-bray-300 border rounded-lg shadow-lg divide-y divide-bray-200"
      >
        <div class="w-full flex items-center justify-between p-6 space-x-6">
          <div class="flex-1 truncate">
            <p :class="`mt-1 text-gray-300 text-sm truncate`">JaysHub Script</p>
          </div>
        </div>
        <div>
          <div :class="`-mt-px flex text-gray-400 divide-x divide-bray-200`">
            <div class="w-0 flex-1 flex">
              <a
                href="#"
                :class="`relative -mr-px w-0 flex-1 space-x-1 inline-flex items-center justify-center py-4 text-sm font-medium border border-transparent rounded-bl-lg hover:text-${color}`"
              >
                <span class="ml-3">Copy</span>
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
                    d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                  />
                </svg>
              </a>
            </div>
            <div class="-ml-px w-0 flex-1 flex">
              <a
                href="#"
                :class="`relative -mr-px w-0 flex-1 space-x-1 inline-flex items-center justify-center py-4 text-sm font-medium border border-transparent rounded-bl-lg hover:text-${color}`"
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
      <li
        class="col-span-1 bg-bray-500 border-bray-300 border rounded-lg shadow-lg divide-y divide-bray-200"
      >
        <div class="w-full flex items-center justify-between p-6 space-x-6">
          <div class="flex-1 truncate">
            <p :class="`mt-1 text-gray-300 text-sm truncate`">JaysHub Script</p>
          </div>
        </div>
        <div>
          <div :class="`-mt-px flex text-gray-400 divide-x divide-bray-200`">
            <div class="w-0 flex-1 flex">
              <a
                href="#"
                :class="`relative -mr-px w-0 flex-1 space-x-1 inline-flex items-center justify-center py-4 text-sm font-medium border border-transparent rounded-bl-lg hover:text-${color}`"
              >
                <span class="ml-3">Copy</span>
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
                    d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                  />
                </svg>
              </a>
            </div>
            <div class="-ml-px w-0 flex-1 flex">
              <a
                href="#"
                :class="`relative -mr-px w-0 flex-1 space-x-1 inline-flex items-center justify-center py-4 text-sm font-medium border border-transparent rounded-bl-lg hover:text-${color}`"
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
      <li
        class="col-span-1 bg-bray-500 border-bray-300 border rounded-lg shadow-lg divide-y divide-bray-200"
      >
        <div class="w-full flex items-center justify-between p-6 space-x-6">
          <div class="flex-1 truncate">
            <p :class="`mt-1 text-gray-300 text-sm truncate`">JaysHub Script</p>
          </div>
        </div>
        <div>
          <div :class="`-mt-px flex text-gray-400 divide-x divide-bray-200`">
            <div class="w-0 flex-1 flex">
              <a
                href="#"
                :class="`relative -mr-px w-0 flex-1 space-x-1 inline-flex items-center justify-center py-4 text-sm font-medium border border-transparent rounded-bl-lg hover:text-${color}`"
              >
                <span class="ml-3">Copy</span>
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
                    d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                  />
                </svg>
              </a>
            </div>
            <div class="-ml-px w-0 flex-1 flex">
              <a
                href="#"
                :class="`relative -mr-px w-0 flex-1 space-x-1 inline-flex items-center justify-center py-4 text-sm font-medium border border-transparent rounded-bl-lg hover:text-${color}`"
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

      <!-- More people... -->
    </ul>
  </div>
</template>
