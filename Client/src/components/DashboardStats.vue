<script>
export default {
  name: "DashboardStats",
  async created() {
    if (localStorage.token) {
      const response = await fetch(`${window.$BackendURL}/api/v1/stats/me`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ token: localStorage.token }),
      });
      var { Data: stats } = await response.json();
      this.stats = stats;
    }
  },
  data() {
    return {
      format(number) {
        return (
          Intl.NumberFormat("en", {
            notation: "compact",
          }).format(parseFloat(number)) || "??"
        );
      },
      stats: { Uses: 0, Scripts: 0 },
      color: localStorage.color,
    };
  },
};
</script>
<template>
  <div class="">
    <div class="mt-4">
      <div class="relative">
        <div class="absolute inset-0 h-1/2"></div>
        <div class="relative max-w-7xl mx-auto px-4">
          <div class="w-full border-bray-300 border mt-1 mx-auto">
            <dl class="rounded-lg shadow-lg sm:grid lg:grid-cols-3">
              <div
                class="flex flex-col border-2 border-bray-300 p-6 text-center sm:border-0 sm:border-r"
              >
                <dt
                  class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500"
                >
                  Requests
                </dt>
                <dd :class="`order-1 text-5xl font-extrabold text-${color}`">
                  {{ format(stats.Uses) }}
                </dd>
              </div>
              <div class="flex flex-col p-6 text-center">
                <dt
                  class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500"
                >
                  Scripts Created
                </dt>
                <dd :class="`order-1 text-5xl font-extrabold text-${color}`">
                  {{ stats.Scripts }}
                </dd>
              </div>
              <div
                class="flex flex-col p-6 text-center border-l border-bray-300"
              >
                <dt
                  class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500"
                >
                  Keys Used
                </dt>
                <dd :class="`order-1 text-5xl font-extrabold text-${color}`">
                  100k
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
