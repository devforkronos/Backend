<script>
export default {
  name: "Preview",
  data() {
    return {
      color: localStorage.color,
    };
  },
};
</script>
<template>
  <div class="">
    <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
      <div class="space-y-12">
        <div
          class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none"
        >
          <h2
            class="text-3xl text-gray-300 font-extrabold tracking-tight sm:text-4xl"
          >
            Preview
          </h2>
          <p class="text-xl text-gray-400">
            Here are some previews of the panel.
          </p>
        </div>
        <ul
          role="list"
          class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
        >
          <li>
            <div class="space-y-4">
              <div class="aspect-w-3 aspect-h-2">
                <img
                  class="object-cover shadow-lg rounded-lg"
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                  alt=""
                />
              </div>

              <div class="space-y-2">
                <div
                  class="text-lg text-gray-200 leading-6 font-medium space-y-1"
                >
                  <h3>Some Text</h3>
                  <p :class="`text-${color}`">Description goes here</p>
                </div>
              </div>
            </div>
          </li>

          <!-- More people... -->
        </ul>
      </div>
    </div>
  </div>
</template>
