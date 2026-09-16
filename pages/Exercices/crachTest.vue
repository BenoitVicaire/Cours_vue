<template>
    <h1 class="text-4xl md:text-5xl font-extrabold text-primary text-center">Crach test</h1>
    <div class="card bg-base-100 w-80 mx-auto">
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
    <p> {{ afficherNameUser }}</p>
</template>

<script setup lang='js'>
import { computed, watch, onMounted, onUpdated, onBeforeUnmount, ref } from 'vue'

const username = ref("")

const afficherNameUser = computed(()=>{
    console.log('fonction qui giere le NAME')
    return username.value === '' ? 'test' : "autre test"
})
// function afficherNameUser(){
//     console.log("test")
//     if (username.value){
//         return "test"
//     }else{
//         return "autre test"
//     }
// }
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