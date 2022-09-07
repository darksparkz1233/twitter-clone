<template>
  <div>
    <MainSection title="Home" :loading="loading">
      <div v-for="post in twitterPosts" :key="post">
        <MainPost
          :display-name="'Account Name'"
          :user-name="'@account_name'"
          :post-time="'3h'"
          :avatar="userAvatar.link"
        >
         Empty tweet
        </MainPost>
      </div>
    </MainSection>

    <div class="fixed dark:bg-dim-50 z-40 flex justify-center items-center">
      <PostModal
        class="text-black dark:bg-dim-900"
        :user-avatar="userAvatar.link"
      />
    </div>
  </div>
</template>

<script setup>
// ? loading switch
const loading = ref(false);
// ? states:
let isEditing = ref(false);

const userAvatar = {
  link: "https://pbs.twimg.com/profile_images/1564082083747725317/-zFaWCaJ_400x400.jpg",
};

const twitterPosts = ref([
  {}
  ]);
</script>