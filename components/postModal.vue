<template>
  <div
    class="flex flex-col dark:text-white h-80 rounded-2xl p-4"
  >
    <div class="flex justify-between mb-4">
      <p>X</p>
      <p class="text-dim-100 font-bold">Unsent Tweets</p>
    </div>

    <div class="flex">
      <!-- ? avatar: -->
      <div class="w-max pr-4">
        <img class="rounded-full w-12" :src="props.userAvatar" alt="" />
      </div>

      <div>
        <input
          placeholder="What's happening?"
          class="
            pr-40
            pb-40
            text-xl
            w-
            outline-none
            bg-transparent
            border-none
            text-white
            h-100
          "
          v-model="tweetContent"
          type="text"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  modal: Boolean,
  userAvatar: String,
});

const tweetContent = ref("");
</script>