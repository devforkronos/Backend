<script>
import Header from "./Header.vue";
import Features from "./Features.vue";
export default {
  name: "HomeHero",
  components: {
    Header,
    Features,
  },
  data() {
    return {
      color: localStorage.color,
    };
  },
};
</script>
<template>
  <div>
    <Header />
    <section class="text-gray-300">
      <div class="w-full p-7 mt-3">
        <div class="md:grid-cols-2 grid">
          <div>
            <h1 class="text-4xl font-bold leading-none sm:text-5xl">
              <span :class="`text-${color}`">Blox</span><span>Safe</span>
              <span> - Secure your Roblox scripts</span>
            </h1>
            <p class="px-8 mt-8 mb-12 text-lg">
              Manage, host and secure your roblox scripts from a web-based
              panel!
            </p>
            <div class="flex flex-wrap">
              <a
                href="/dashboard"
                onclick="document.getElementById('login__').style.display = 'block'"
                :class="`px-8 py-3 m-2 text-lg rounded text-gray-50 bg-${color}`"
              >
                My Dashboard
              </a>
              <a
                href="/explore"
                class="px-8 hidden py-3 m-2 cubano text-lg text-gray-50 border rounded border-gray-300"
                >Explore</a
              >
            </div>
          </div>
          <div class="flex flex-wrap justify-center">
            <div class="w-4/12 hidden md:block"></div>
          </div>
        </div>
      </div>
    </section>
    <Features />
  </div>
</template>
