<script>
export default {
  name: "ColorThemeBox",
  data() {
    return {
      color: localStorage.color,
    };
  },
};
</script>
<template>
  <div class="grid-cols-1 grid">
    <h1 class="text-gray-300 text-sm px-4">
      <span>v1.0.0 - </span>
      <a href="https://github.com/jareer12/" :class="`text-${color}`"
        >github.com/jareer12</a
      >
    </h1>
    <div
      class="px-4 float-right space-x-2 flex py-2 bg-bray-500 shadow-lg rounded"
    >
      <button
        class="bg-royal p-3 rounded-full shadow-lg border-2 border-transparent"
        onclick="setThemeColor(`royal`)"
      ></button>
      <button
        class="bg-brew p-3 rounded-full shadow-lg border-2 border-transparent"
        onclick="setThemeColor(`brew`)"
      ></button>
      <button
        class="bg-emerald p-3 rounded-full shadow-lg border-2 border-transparent"
        onclick="setThemeColor(`emerald`)"
      ></button>
      <button
        class="bg-valencia p-3 rounded-full shadow-lg border-2 border-transparent"
        onclick="setThemeColor(`valencia`)"
      ></button>
      <button
        class="bg-amethyst p-3 rounded-full shadow-lg border-2 border-transparent"
        onclick="setThemeColor(`amethyst`)"
      ></button>
    </div>
  </div>
</template>
