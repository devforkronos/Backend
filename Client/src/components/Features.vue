<script>
export default {
  name: "Features",
  data() {
    return {
      color: localStorage.color,
    };
  },
};
</script>
<template>
  <div class="relative py-16 sm:py-24 lg:py-32">
    <div
      class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl"
    >
      <h2
        :class="`text-base font-semibold tracking-wider text-${color} uppercase`"
      >
        Features
      </h2>
      <p
        class="mt-2 text-3xl font-extrabold text-gray-300 tracking-tight sm:text-4xl"
      >
        Providing you with the best <br />
        tools & features possible.
      </p>
      <div class="mt-12">
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div class="pt-6">
            <div class="flow-root rounded-lg px-6 pb-8">
              <div class="-mt-6">
                <div>
                  <span
                    :class="`inline-flex items-center text-white justify-center p-3 bg-${color} rounded-md shadow-lg`"
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
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </span>
                </div>
                <h3
                  :class="`mt-8 text-lg font-medium text-gray-300 tracking-tight`"
                >
                  Encrypted Scripts
                </h3>
                <p class="mt-5 text-base text-gray-500">
                  All the scripts we host are encrypted, and decrypted on
                  request.
                </p>
              </div>
            </div>
          </div>

          <div class="pt-6">
            <div class="flow-root rounded-lg px-6 pb-8">
              <div class="-mt-6">
                <div>
                  <span
                    :class="`inline-flex items-center text-white justify-center p-3 bg-${color} rounded-md shadow-lg`"
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
                        d="M4 6h16M4 12h16M4 18h7"
                      />
                    </svg>
                  </span>
                </div>
                <h3
                  :class="`mt-8 text-lg font-medium text-gray-300 tracking-tight`"
                >
                  Obfucation Support
                </h3>
                <p class="mt-5 text-base text-gray-500">
                  Our servers can auto-obfucate scritps, this can prevent people
                  from stealing your scripts.
                </p>
              </div>
            </div>
          </div>
          <div class="pt-6">
            <div class="flow-root rounded-lg px-6 pb-8">
              <div class="-mt-6">
                <div>
                  <span
                    :class="`inline-flex items-center text-white justify-center p-3 bg-${color} rounded-md shadow-lg`"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                </div>
                <h3
                  :class="`mt-8 text-lg font-medium text-gray-300 tracking-tight`"
                >
                  Key System Support
                </h3>
                <p class="mt-5 text-base text-gray-500">
                  A key system you can use to allow only certain users to use
                  the script.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
