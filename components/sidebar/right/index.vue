<template>
  <div class="flex flex-col">
    <!-- ? preview card : whats happening -->
    <SidebarRightPreviewCard title="What's happening?">

      <SidebarRightPreviewCardItem
        v-for="hashtag in whatsHappeningItems"
        :key="hashtag"
      >
        <div class="dark:text-white">

          <h2 class="font-bold">
            {{ hashtag.title }}
          </h2>

          <p class="text-gray-500 text-xs">
            {{ hashtag.count }}
          </p>

        </div>

      </SidebarRightPreviewCardItem>

    </SidebarRightPreviewCard>

    <!-- ? preview card : who to follow -->
    <SidebarRightPreviewCard title="Who to follow?">

      <SidebarRightPreviewCardItem
        v-for="whoToFollow in whoToFollowItems"
        :key="whoToFollow"
      >
        <div class="flex flex-row justify-between p-2 dark:text-white">
          <div class="flex flex-row">
            <!-- ? who to follow: account profile picture -->
            <img
              class="w-10 h-10 rounded-full"
              :src="whoToFollow.img"
              :alt="whoToFollow.name"
            />
            <!-- ? who to follow: account name -->
            <div class="flex flex-col ml-2">
              <h2 class="font-bold">
                {{ whoToFollow.name }}
              </h2>
              <!-- ? who to follow: account username -->
              <p class="text-gray-500 text-xs">
                {{ whoToFollow.username }}
              </p>
            </div>
          </div>
          <!-- ? follow button -->
          <button
            class="
              w-20
              h-9
              text-sm
              font-bold
              bg-black
              text-white
              rounded-full
              dark:bg-white
              dark:text-black
            "
          >
            Follow
          </button>
        </div>
      </SidebarRightPreviewCardItem>

    </SidebarRightPreviewCard>
    
  </div>
</template>

<script setup>
const whatsHappeningItems = ref([
  {
    title: "#SoftwareEngineer",
    count: "12.4K Tweets",
  },
  {
    title: "#SpaceX",
    count: "2.4K Tweets",
  },
  {
    title: "#Anime",
    count: "4.1K Tweets",
  },
  {
    title: "#VTubers",
    count: "3.5K Tweets",
  },
  {
    title: "#Art",
    count: "1.1K Tweets",
  },
]);

const whoToFollowItems = ref([
  {
    name: "Daily Waifus",
    username: "@Waifu_elle",
    img: "https://pbs.twimg.com/profile_images/1554988204150906883/gruRc4Ze_400x400.jpg",
  },
  {
    name: "Daily Waifus",
    username: "@Waifu_elle",
    img: "https://pbs.twimg.com/profile_images/1554988204150906883/gruRc4Ze_400x400.jpg",
  },
  {
    name: "Daily Waifus",
    username: "@Waifu_elle",
    img: "https://pbs.twimg.com/profile_images/1554988204150906883/gruRc4Ze_400x400.jpg",
  },
  {
    name: "Daily Waifus",
    username: "@Waifu_elle",
    img: "https://pbs.twimg.com/profile_images/1554988204150906883/gruRc4Ze_400x400.jpg",
  },
]);
</script> 