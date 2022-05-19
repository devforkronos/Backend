<script>
export default {
  name: "ToolsDisplay",
  data() {
    return {
      color: localStorage.color,
    };
  },
};
</script>
<template>
  <div class="px-4 py-4 overflow-hidden gap-4 sm:grid lg:grid-cols-2">
    <div
      class="border-bray-300 border rounded-lg relative group bg-bray-500 p-6"
    >
      <div>
        <span
          :class="`rounded-lg inline-flex p-3 bg-${color}-50 text-${color} bg-opacity-30`"
        >
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
              d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
            />
          </svg>
        </span>
      </div>
      <div class="mt-8">
        <h3 class="text-lg font-medium">
          <a href="/tools/obfuscator" class="text-gray-300 focus:outline-none">
            <!-- Extend touch target to entire panel -->
            <span class="absolute inset-0" aria-hidden="true"></span>
            Obfuscate Script
          </a>
        </h3>
        <p class="mt-2 text-sm text-gray-500">
          Prevent people from stealing and reading your scripts by obfuscating
          it.
        </p>
      </div>
      <span
        class="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
        aria-hidden="true"
      >
      </span>
    </div>
    <div
      class="border-bray-300 border rounded-lg relative group bg-bray-500 p-6"
    >
      <div>
        <span
          :class="`rounded-lg inline-flex p-3 bg-${color}-50 text-${color} bg-opacity-30`"
        >
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
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            />
          </svg>
        </span>
      </div>
      <div class="mt-8">
        <h3 class="text-lg font-medium">
          <a href="/tools/webhook" class="text-gray-300 focus:outline-none">
            <span class="absolute inset-0" aria-hidden="true"></span>
            Discord Webhook
          </a>
        </h3>
        <p class="mt-2 text-sm text-gray-500">
          Connect a discord webhook to receive important logs/information.
        </p>
      </div>
      <span
        class="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
        aria-hidden="true"
      >
      </span>
    </div>
    <div
      class="border-bray-300 border rounded-lg relative group bg-bray-500 p-6"
    >
      <div>
        <span
          :class="`rounded-lg inline-flex p-3 bg-${color}-50 text-${color} bg-opacity-30`"
        >
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
              d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
            />
          </svg>
        </span>
      </div>
      <div class="mt-8">
        <h3 class="text-lg font-medium">
          <a href="/tools/hub" class="text-gray-300 focus:outline-none">
            <span class="absolute inset-0" aria-hidden="true"></span>
            Script Hub
          </a>
        </h3>
        <p class="mt-2 text-sm text-gray-500">
          Create your own custom script hub for roblox scripts and allow others
          to use all your scripts just by a single script
        </p>
      </div>
      <span
        class="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
        aria-hidden="true"
      >
      </span>
    </div>
  </div>
</template>
