<template>
    <div class="card bg-base-100 shadow-md">
        <div class="card-body">
            <h2 class="card-title">
                {{ friend.name }}
                <span v-if="friend.premium" class="badge badge-warning"
                    >Premium</span
                >
            </h2>
            <div v-if="displayDetail">
                <p>{{ friend.id }}</p>
                <p>📞 {{ friend.phone }}</p>
                <p>✉️ {{ friend.email }}</p>
            </div>
        </div>
        <div id="btnDisplay" class="card-actions">
            <button @click="toggleDetail" class="btn btn-primary">Display detail</button>
            <button @click="emit('mon-event-premium-update', friend.id)" class="btn btn-secondary">Update Premium</button>
            <button @click="emit('eventDeleteUser', friend.id)" class="btn btn-error">Delete</button>
        </div>
    </div>
</template>

<script setup lang="js">
import { computed, watch, onMounted, onUpdated, onBeforeUnmount } from "vue";

const displayDetail = ref(false);
function toggleDetail(){
    displayDetail.value = !displayDetail.value;
}
const props = defineProps({
    friend:{
        type: Object,
        required : true,
    },
});


// v-model binding (Vue 3.4+)
const model = defineModel({ default: "" });


const emit = defineEmits({

    "mon-event-premium-update": (id) => {
        return typeof id === "string" && id.length > 0;
    },
    "eventDeleteUser" : (id)=>{
        return typeof id === "string" && id.length > 0;
    }
});

const now = computed(() => Date.now());

const stopWatch = watch(
    model,
    async (_newValue, _oldValue) => {
        // do something
    },
    {
        immediate: true,
    },
);

onMounted(() => {});

onUpdated(() => {});

onBeforeUnmount(() => {
    stopWatch();
});
</script>

<style scoped lang="css"></style>
