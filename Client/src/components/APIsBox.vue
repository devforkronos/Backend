<script>
export default {
  name: "APIsBox",
  data() {
    return {
      color: localStorage.color,
    };
  },
};
</script>
<template>
  <fieldset>
    <div class="px-4 py-4 text-gray-300 space-y-4 bg-bray-500 rounded-md">
      <h2 class="text-xl font-bold">My APIs</h2>
      <label
        class="rounded-md relative border border-bray-300 p-4 flex cursor-pointer focus:outline-none"
      >
        <div class="ml-3 flex flex-col">
          <span
            id="privacy-setting-0-label"
            :class="`block text-sm font-medium text-${color}`"
          >
            MasterAPI Key
          </span>
          <span id="privacy-setting-0-description" class="block text-sm">
            I use this key for my website.
          </span>
        </div>
      </label>
      <label
        class="rounded-md relative border border-bray-300 p-4 flex cursor-pointer focus:outline-none"
      >
        <div class="ml-3 flex flex-col">
          <span
            id="privacy-setting-0-label"
            :class="`block text-sm font-medium text-${color}`"
          >
            DiscordAPI Key
          </span>
          <span id="privacy-setting-0-description" class="block text-sm">
            this one is for my Discord bot.
          </span>
        </div>
      </label>
    </div>
  </fieldset>
</template>
