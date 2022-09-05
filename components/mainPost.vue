<template>
  <div
    class="
      p-5
      dark:border-b-2 dark:border-gray-700 dark:hover:bg-dim-300
      hover:bg-gray-100
      border-b-2
      cursor-pointer
    "
    :class="defaultTransition"
  >
    <div class="flex flex-col dark:text-white">
      <!-- ? post item: post publisher: -->
      <div class="flex">
        <div class="flex text-gray-500">
          <div class="flex gap-2">
            <img :src="props.avatar" class="w-12 rounded-full" />

            <p class="text-black dark:text-white">
              {{ props.displayName }}
            </p>

            <p>
              {{ props.userName }}
            </p>

            <p>
              {{ props.postTime }}
            </p>
          </div>
        </div>
      </div>

      <!-- ? post item: post content: -->
      <div class="flex flex-col gap-8 ml-3 pl-10">
        <p>
          <slot></slot>
        </p>
        <!-- ? post item: post image -->
        <div class="mb-5">
          <!-- <img class="rounded-2xl" :src="post.postImage" /> -->
        </div>
      </div>
      <!-- ? post item: actions -->
      <div class="pl-10 flex justify-between">
        <ChatIcon
          :class="defaultTransition"
          class="
            w-10
            p-2
            rounded-full
            hover:bg-blue-100/20 hover:text-blue-300
          "
        />
        <SwitchVerticalIcon
          :class="defaultTransition"
          class="
            w-10
            p-2
            rounded-full
            hover:bg-green-300/20 hover:text-green-600
          "
        />
        <HeartIcon
          :class="defaultTransition"
          class="
            w-10
            p-2
            rounded-full
            hover:bg-red-300/20 hover:text-red-400
          "
        />
        <DownloadIcon
          :class="defaultTransition"
          class="
            w-10
            p-2
            rounded-full
            hover:bg-blue-100/20 hover:text-blue-300
          "
        />
      </div>
    </div>
  </div>
</template>

<script setup>
// icon import: 
import {
  ChatIcon,
  SwitchVerticalIcon,
  HeartIcon,
  DownloadIcon,
} from "@heroicons/vue/outline";

// ? twitter post props
const props = defineProps({
  avatar: String,
  displayName: String,
  userName: String,

  postTime: String,
  postImage: String,
});


// style variables:
const hoverTransition = "hover:bg-dim-200";

const { defaultTransition } = useTailwindConfig();
const { twitterBorderColor } = useTailwindConfig();

// post data:
const post = ref({
  avatar:
    "https://pbs.twimg.com/profile_images/1564082083747725317/-zFaWCaJ_400x400.jpg",
  displayName: "Some Username",
  userName: "@some_user",

  postImage:
    "https://www.nasa.gov/sites/default/files/thumbnails/image/web_first_images_release.png",
  postTime: "3h",
});
</script>