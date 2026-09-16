<template>
    <div class="w-200 mx-auto text-center">
        <h1
            class="text-4xl md:text-5xl font-extrabold text-primary text-center"
        >
            Dynamic Styling
        </h1>
        <div class="grid grid-cols-2 gap-4">
            <div
                class="card bg-base-100 w-80 shadow-xl mx-auto mt-6 "
                :style="dynamicStyle1"
                @click="dynamicStyle1.color = dynamicStyle1.color === 'blue' ? 'red' : 'blue'; 
                        dynamicStyle1.backgroundColor = dynamicStyle1.backgroundColor === 'grey' ? 'white' : 'grey'"
            >
                <div class="card-body">
                    <h3>card 1 via style</h3>
                </div>
            </div>

            <div
                class="card bg-base-100 w-80 shadow-xl mx-auto mt-6 "
                :style="dynamicStyle2"
                @click="dynamicStyle2.color = dynamicStyle2.color === 'blue' ? 'red' : 'blue'; 
                        dynamicStyle2.backgroundColor = dynamicStyle2.backgroundColor === 'grey' ? 'white' : 'grey'"
            >
                <div class="card-body">
                    <h3>card 2 via style</h3>
                </div>
            </div>

            <div
                class="card bg-base-100 w-80 shadow-xl mx-auto mt-6 "
                :class="{ 'text-base-100 bg-primary': isActive1, 'text-danger bg-secondary': !isActive1 }"
                @click="isActive1 = !isActive1"
            >
                <div class="card-body">
                    <h3>card 3 via class</h3>
                </div>
            </div>

            <div
                class="card bg-base-100 w-80 shadow-xl mx-auto mt-6  "
                :class="{ 'text-base-100 bg-primary': isActive2, 'text-danger bg-secondary': !isActive2 }"
                @click="isActive2 = !isActive2"
            >
                <div class="card-body">
                    <h3>card 4 via class</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="js">
import {
    computed,
    watch,
    onMounted,
    onUpdated,
    onBeforeUnmount,
    ref,
} from "vue";

const dynamicStyle1 = ref({
    color: "red",
    backgroundColor: "grey",
});

const dynamicStyle2 = ref({
    color: "red",
    backgroundColor: "grey",
});


const isActive1 = ref(true);
const isActive2 = ref(true);



// v-model binding (Vue 3.4+)
const model = defineModel({ default: "" });

const props = defineProps({
    text: String,
});

const emit = defineEmits({
    "update:text": (value) => typeof value === "string",
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
