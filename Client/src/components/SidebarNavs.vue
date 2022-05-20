<script>
export default {
  name: "SidebarNavs",
  data() {
    return {
      logout() {
        console.log(`Loging User Out`);
        localStorage.removeItem("token");
        window.location.reload();
      },
      localStorage: localStorage,
      window: window,
      color: localStorage.color,
    };
  },
};
</script>
<template>
  <div>
    <div v-if="localStorage.token" class="space-y-2">
      <a
        href="/dashboard"
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
        href="/scripts"
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
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
        Scripts
      </a>
      <a
        href="/tools"
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
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
        Tools
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
      <a
        href="/docs"
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
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>
        Docs
      </a>
      <button
        @onclick="logout()"
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
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
          />
        </svg>
        Logout
      </button>
    </div>
    <div class="space-y-2" v-if="!localStorage.token">
      <a
        href="/login"
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
            d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
          />
        </svg>
        Login
      </a>
      <a
        href="/register"
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
            d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
          />
        </svg>
        Register
      </a>
    </div>
  </div>
</template>
