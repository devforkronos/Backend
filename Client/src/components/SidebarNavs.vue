<script>
export default {
  name: "SidebarNavs",
  data() {
    return {
      color: localStorage.color,
    };
  },
};
</script>
<template>
  <a
    href="/"
    class="text-gray-300 hover:text-white group flex items-center px-2 py-2 text-sm font-medium"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="text-gray-400 group-hover:text-gray-300 mr-3 flex-shrink-0 h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
      />
    </svg>
    Dashboard
  </a>
  <a
    href="/apis"
    class="text-gray-300 hover:text-white group flex items-center px-2 py-2 text-sm font-medium"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="text-gray-400 group-hover:text-gray-300 mr-3 flex-shrink-0 h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
      />
    </svg>
    APIs
  </a>
</template>
