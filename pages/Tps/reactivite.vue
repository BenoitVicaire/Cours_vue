<template>
    <div class="card bg-base-100 w-96 shadow-sm mx-auto">
        <div class="card-body">
            <div class="card-title justify-center" :class="classeNombre">{{ leNombre }}</div>
        </div>
         <div class="card-actions justify-center">
            <button class="btn btn-success" v-on:click="increment(1)">+1</button>
            <button class="btn btn-error" v-on:click="increment(5)">+5</button>
            <button class="btn btn-secondary" v-on:click="leNombre=0">reset</button>
        </div>
        <div>
            <p >{{ indice }}</p>
        </div>
        

    </div>
</template>

<script setup lang='js'>
import { computed, watch, onMounted, onUpdated, onBeforeUnmount, ref } from 'vue'

const leNombre = ref(0)

    // class conditionel : return une couleur en fonction de la valeur de LeNombre
const classeNombre = computed(()=>{
    if(leNombre.value>30) return 'text-red-500 text-4xl'
    if (leNombre.value===7) return 'text-green-500 font-bold'
    return 'text-blue-500'
})


    // Fonction computed qui affiche un indice en fonction de la valeur de LeNombre.
const indice = computed(() =>{ 
    if(leNombre.value<7){
        return "Essaie Encore"
    }else if(leNombre.value===7){
        return "Bingo"
    }else if(leNombre.value>7 && leNombre.value<30){
        return "Tu as dépassé le nombre"
    }else{
        return "Retente ta chance, noob"
    }});
    
    // Prend un nombre en entrée, incrémente leNombre de ce nombre.
    function increment(amount){
    leNombre.value = leNombre.value + amount;
}
    // Surveille la valeur le nombre, la reset à 0 quand celle ci atteint 30 .
watch(leNombre, (newVal) =>{
    if(newVal>=30){
        setTimeout(()=>{
            leNombre.value = 0
        }, 1500)
    }
})

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