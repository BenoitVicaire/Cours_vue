<template>
    <div class="card bg-base-100 w-80 mx-auto">
        <h2>Even binding mode : Composition</h2>
        <button 
            class="btn btn-success"
            v-on:click="increment(100)"
            >+
        </button>
        {{ nombre }}
        <button 
        class="btn btn-error"
        v-on:click.right="decrement(50)" 
        >-</button>
    </div>
</template>

<script setup lang='js'>
import { computed, watch, onMounted, onUpdated, onBeforeUnmount, ref } from 'vue'


// v-model binding (Vue 3.4+)
const model = defineModel({ default: '' });

const props = defineProps({
    text: String
});

const nombre = ref(0);

function increment(amount){
    nombre.value = nombre.value + amount;
}
function decrement(amount){
    nombre.value = nombre.value - amount;
}

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