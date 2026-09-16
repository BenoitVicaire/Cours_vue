<template>
  <div>
    <h1>Articles Manager (Firebase Realtime Database)</h1>
<FirebaseAddArticle></FirebaseAddArticle>
<FirebaseListArticles></FirebaseListArticles> 
  </div>
</template>


<style scoped lang="css">
</style>

<script setup lang='js'>
import FirebaseListArticles from '../../components/FirebaseListArticles.vue';
import FirebaseAddArticle from '../../components/FirebaseAddArticle.vue';
import { computed, watch, onMounted, onUpdated, onBeforeUnmount } from 'vue'

// v-model binding (Vue 3.4+)
const model = defineModel({ default: '' });

const props = defineProps({
    text: String
});

const emit = defineEmits({
    'update:text': (value) => typeof value === 'string',
});

const now = computed(() => Date.now());

const stopWatch = watch(
    model, async (_newValue, _oldValue) => {
        // do something
    },
    {
        immediate: true
    }
);

onMounted(() => {
});

onUpdated(() => {
});

onBeforeUnmount(() => {
    stopWatch();
});

</script>

<style scoped lang="css">
</style>