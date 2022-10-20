<template>
    <div>
        <MainSection title="Home" :loading="loading">
            <template v-slot:feed-content>
                <FeedPost
                    class="border-white-200 dark:border-gray-700"
                    v-for="(post, id) in data"
                    :key="id"
                    :post="post"
                >
                    {{ data }}
                </FeedPost>
            </template>
        </MainSection>
    </div>
</template>

<script setup>
const loading = ref(false)

const { data } = await useFetch('http://localhost:3000/posts')
console.log(data)

const { twitterBorderColor } = useTailwindConfig()


</script>