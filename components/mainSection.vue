<template>
    <div class="border-x" :class="twitterBorderColor">

        <div class="sticky top-0 px-4 py-3 bg-white/80 backdrop-blur-md dark:bg-dim-900/80">
            <h2 class="text-xl font-bold text-gray-800 dark:text-gray-100">
                {{ props.title }}
            </h2>
        </div>

        <!-- ? loading indicator -->
        <div v-if="props.loading" class="flex items-center justify-center p-4 border-b"
             :class="twitterBorderColor"
        >
            <UISpinner />
        </div>
        <!-- ? else show main feed: content -->
        <div v-else>
            <slot name="feed-content"></slot>
        </div>

    </div>
</template>

<script setup>
const { twitterBorderColor } = useTailwindConfig()

const props = defineProps({

    loading: {
        type: Boolean,
        required: true
    },

    title: {
        type: String,
        required: true
    }
})
</script>