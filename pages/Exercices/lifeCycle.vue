<template>
    <h1 class="text-4xl md:text-5xl font-extrabold text-primary text-center">
        Lifecycle + API
    </h1>
    <div class="card bg-base-100 w-fit shadow-xl mx-auto mt-6">
        <div class="card-body">
            <div>
                <h2 class="text-secondary text-3xl font-bold">Les pokemons</h2>
                <div class="flex flex-wrap gap-2 w-96">
                    <div v-for="pokemon in pokemons" :key="pokemon.name">
                        <div class="badge badge-primary">
                            {{ pokemon.name }}
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="meteo">
                <h2 class="text-secondary text-3xl font-bold">
                    Météo Toulouse
                </h2>
                <ul>
                    <li>Temp max : {{ meteo.fcst_day_0.tmax }} °c</li>
                    <li>Temp min : {{ meteo.fcst_day_0.tmin }} °c</li>
                    <li>
                        Temp actuelle : {{ meteo.current_condition.tmp }} °c
                    </li>
                    <li>
                        Condition météo :
                        {{ meteo.current_condition.condition }}
                    </li>
                </ul>
            </div>
            <div>
                <h2 class="text-secondary text-3xl font-bold">Les Digimons</h2>
                <div class="flex flex-wrap gap-2 w-96">
                    <div v-for="digimon in digimons" :key="digimon.name">
                        <div class="card">
                            <img
                                :src= "digimon.image" 
                                :alt="digimon.name" 
                                class="w-24 h-24" 
                                />
                            <div class="card-body">{{ digimon.name }}</div>
                        </div>
                    </div>
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

const pokemons = ref([]);
const meteo = ref(null);
const digimons = ref([]);

async function fetchPokemon() {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`);

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }
        const data = await response.json();
        pokemons.value = data.results;
        return data;
    } catch (error) {
        console.error("Erreur fetch:", error);
    }
}

async function fetchMeteo() {
    try {
        const response = await fetch(
            `https://prevision-meteo.ch/services/json/toulouse`,
        );

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }
        const data = await response.json();
        meteo.value = data;
        return data;
    } catch (error) {
        console.error("Erreur fetch", error);
    }
}

async function fetchDigimon() {
    try {
        const response = await fetch(`https://digi-api.com/api/v1/digimon`);

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }
        const data = await response.json();
        digimons.value = data.content;
        console.log(data);
        return data;
    } catch (error) {
        console.error("Erreur fetch", error);
    }
}

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

onMounted(async () => {
    fetchPokemon();
    fetchMeteo();
    fetchDigimon();
});

onUpdated(() => {});

onBeforeUnmount(() => {
    stopWatch();
});
</script>

<style scoped lang="css"></style>
