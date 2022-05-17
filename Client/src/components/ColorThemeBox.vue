<script>
var scripts = ["/src/assets/index.js"];
scripts.forEach((script) => {
  let tag = document.createElement("script");
  tag.setAttribute("src", script);
  document.head.appendChild(tag);
});

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
  <div
    class="px-4 float-right space-x-2 flex py-2 mt-3 bg-bray-500 shadow-lg rounded"
  >
    <button
      class="bg-royal p-3 rounded-full shadow-lg border-2 border-gray-700"
      onclick="setThemeColor(`royal`)"
    ></button>
    <button
      class="bg-brew p-3 rounded-full shadow-lg border-2 border-gray-700"
      onclick="setThemeColor(`brew`)"
    ></button>
    <button
      class="bg-emerald p-3 rounded-full shadow-lg border-2 border-gray-700"
      onclick="setThemeColor(`emerald`)"
    ></button>
    <button
      class="bg-valencia p-3 rounded-full shadow-lg border-2 border-gray-700"
      onclick="setThemeColor(`valencia`)"
    ></button>
    <button
      class="bg-amethyst p-3 rounded-full shadow-lg border-2 border-gray-700"
      onclick="setThemeColor(`amethyst`)"
    ></button>
  </div>
</template>
