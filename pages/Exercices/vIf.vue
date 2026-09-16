<template>
    <h1 class="text-4xl md:text-5xl font-extrabold text-primary text-center">
        Conditional Rendering
    </h1>
    <div class="card bg-base-100 w-fit shadow-xl mx-auto mt-6">
        <h2 class="text-3xl md:text-5xl --color-neutral text-center">
            WatchList(Film à voir)
        </h2>
        <div class="card-body">
            <form @submit.prevent="addFilm">
                <fieldset class="fieldset">
                    <label class="label" for="inputFilm">Nom du film</label>
                    <input
                        type="text"
                        id="inputFilm"
                        class="input"
                        placeholder="Entrez un nom de film"
                        v-model="filmName"
                    />
                </fieldset>
                <button
                    type="submit"
                    class="btn btn-primary"
                    
                >
                    Ajouter à la liste
                </button>
            </form>


            <div v-if="filmList.length === 0">
                <p>
                    Pas encore de films dans votre liste? Veuillez en ajouter
                    un.
                </p>
            </div>
            <div v-else>
                <ul class="menu bg-base-200 rounded-box">
                    <li v-for="film, index in filmList" :key="film">
                        <div>{{index+1}} {{ film }}
                            <button class="btn btn-error" @click="delFilm(film)">Supprimer</button>
                        </div>
                    </li>
                </ul>
            </div>
            <div v-if="displayError" role="alert" class="alert alert-error">
                <span>Le film est déjà dans la liste</span>
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

const filmList = ref([]);
const filmName = ref();
const displayError = ref(false);

function addFilm(){
    if(!filmList.value.includes(filmName.value)){
        filmList.value.push(filmName.value)
        filmName.value = ''
        displayError.value = false
    }else{
        displayError.value = true
    }
}
function delFilm(film){
    filmList.value = filmList.value.filter(f => f !== film)
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

onMounted(() => {});

onUpdated(() => {});

onBeforeUnmount(() => {
    stopWatch();
});
</script>

<style scoped lang="css"></style>
