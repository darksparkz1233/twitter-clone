<template>
  <div class="flex flex-col h-screen">
    <div class="p-2 m-2 hover:bg-blue-50 rounded-full w-min dark:hover:bg-white/20" :class="defaultTransition">
      <!-- ? twitter logo: -->
      <nuxt-link to="/">
        <div class="w-8 h-8">
          <LogoTwitter />
        </div>
      </nuxt-link>
    </div>

    <!-- ? left sidebar icons -->
    <div class="mt-2 space-y-2">
      <SidebarLeftTab active>
        <template v-slot:icon>
          <HomeIcon />
        </template>

        <template v-slot:name> Home </template>
      </SidebarLeftTab>

      <SidebarLeftTab>
        <template v-slot:icon>
          <HashtagIcon />
        </template>

        <template v-slot:name> Explore </template>
      </SidebarLeftTab>

      <SidebarLeftTab>
        <template v-slot:icon>
          <BellIcon />
        </template>

        <template v-slot:name> Notifications </template>
      </SidebarLeftTab>

      <SidebarLeftTab>
        <template v-slot:icon>
          <InboxIcon />
        </template>

        <template v-slot:name> Messages </template>
      </SidebarLeftTab>

      <SidebarLeftTab>
        <template v-slot:icon>
          <BookmarkIcon />
        </template>

        <template v-slot:name> Bookmarks </template>
      </SidebarLeftTab>

      <SidebarLeftTab>
        <template v-slot:icon>
          <DocumentTextIcon />
        </template>

        <template v-slot:name> Lists </template>
      </SidebarLeftTab>

      <SidebarLeftTab>
        <template v-slot:icon>
          <UserIcon />
        </template>

        <template v-slot:name> Profile </template>
      </SidebarLeftTab>

      <SidebarLeftTab>
        <template v-slot:icon>
          <DotsCircleHorizontalIcon />
        </template>

        <template v-slot:name> More </template>
      </SidebarLeftTab>
      <!-- ? tweet button -->
      <div class="">
        <!-- <button 
          :class="defaultTransition"
          class="
            dark:text-white 
            font-bold 
            p-3 
            w-full 
            rounded-full
            bg-dim-500
            text-md
          ">
          Tweet
        </button> -->
        <NuxtLink to="/auth">Tweet</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { HomeIcon } from "@heroicons/vue/solid";

import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  DocumentTextIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
} from '@heroicons/vue/outline'


const { defaultTransition } = useTailwindConfig();

</script>