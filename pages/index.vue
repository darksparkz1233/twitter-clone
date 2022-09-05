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
        </MainPost>
      </div>
    </MainSection>

    <Teleport to="body">
      <div class="fixed dark:bg-dim-50 z-40 flex justify-center items-center">
        <PostModal class="bg-dim-900" :user-avatar="userAvatar.link"/> 
      </div>
    </Teleport>
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

const twitterPosts = ref([]);
</script>