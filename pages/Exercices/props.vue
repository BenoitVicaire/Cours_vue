<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
    <OneFriend
      v-for="ami in amis"
      :key="ami.id"
      :friend="ami"
      @mon-event-premium-update="togglePremium"
      @eventDeleteUser="handleDeleteUser"
    />
</div>
<NewFriend
@eventNewFriend = "handleCreateNewFriend"
/>
</template>

<script setup lang='js'>
import { lesAmis} from '~/data/UserData.js'
import { computed, watch, onMounted, onUpdated, onBeforeUnmount } from 'vue'

const amis= ref([...lesAmis])

function togglePremium(id){
    const ami = amis.value.find(a => a.id === id);
    ami.premium=!ami.premium
}

function handleDeleteUser(id){
    amis.value=amis.value.filter(a => a.id !== id)
}

function handleCreateNewFriend(ami){
    amis.value.push(ami)
}
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