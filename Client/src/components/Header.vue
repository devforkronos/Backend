<script>
export default {
  name: "Header",
  data() {
    return {
      color: localStorage.color,
    };
  },
};
</script>
<template>
  <header
    class="flex space-x-20 px-3 grid-cols-2 grid text-sm items-center py-5 bg-bray-500 text-gray-300 shadow-lg"
  >
    <div>
      <h1 class="text-2xl font-bold">
        <span :class="`text-${color}`" class="">Blox</span><span>Safe</span>
      </h1>
    </div>
    <div>
      <div class="hidden">
        <a class="float-right px-2">
          <span>Search</span>
        </a>
        <a class="float-right px-2">
          <span>Scripts</span>
        </a>
        <a class="float-right px-2">
          <span>Home</span>
        </a>
      </div>
    </div>
  </header>
</template>
