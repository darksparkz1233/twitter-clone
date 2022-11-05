<template>
  <div :class="defaultTransition"
    class="dark:hover:bg-white/10 p-3 border border-white-200 text-black dark:text-white dark:border-gray-700">
    <div class="flex  gap-3">
      <!-- ? user avatar -->
      <div class="">
        <img class=" rounded-full" src="https://i.pravatar.cc/50" alt="">
      </div>
      <!-- ? post: user info -->
      <div class="flex items-center gap-1.5">
        <p class="hover:underline  font-bold">
          {{ post.id }}
        </p>

        <div class="flex gap-1 text-sm text-gray-500">
          <p>
            {{ post.userId }}
          </p>
          ·
          <p class="hover:underline">
            {{ getTime }}
          </p>
        </div>

      </div>
    </div>
    <!-- ? post: content -->
    <div class="ml-16 text-md text-black dark:text-white">
      <p class="">
        {{ post.body }}
      </p>
    </div>

    <!-- ? post: actions -->
    <div class="mt-2 dark:text-gray-500 cursor-pointer pl-12 flex justify-between">
      <ChatIcon :class="defaultTransition" class="
            w-9
            p-2
            rounded-full
            hover:bg-blue-100/20 hover:text-blue-300
          " />
      <SwitchVerticalIcon :class="defaultTransition" class="
            w-9
            p-2
            rounded-full
            hover:bg-green-300/20 hover:text-green-600
          " />
      <HeartIcon :class="defaultTransition" class="
            w-9
            p-2
            rounded-full
            hover:bg-red-300/20 hover:text-red-400
          " />
      <DownloadIcon :class="defaultTransition" class="
            w-9
            p-2
            rounded-full
            hover:bg-blue-100/20 hover:text-blue-300
          " />
    </div>
  </div>
</template>

<script setup>
// import {
//   ChatIcon,
//   SwitchVerticalIcon,
//   HeartIcon,
//   DownloadIcon,
// } from "@heroicons/vue/outline";

let props = defineProps({
  post: Object
})

let date = Math.floor(Math.random() * 20)
let getTime = computed(() => {
  return `${date}h`
})

const { twitterBorderColor } = useTailwindConfig()
const { defaultTransition } = useTailwindConfig()
</script>