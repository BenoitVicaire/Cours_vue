<template>
  <div class="card bg-base-100 w-80 shadow-xl mx-auto mt-6">
    <figure>
      <img :src="image" :alt="name" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ name }}</h2>
      <p>Âge : {{ age }} ans</p>
      <p>Dans 10 ans : {{ plusTen(age) }} ans</p>
      <p>Numéro fétiche : {{ luckyNumber }}</p>

      <fieldset class="fieldset">
        <legend class="fieldset-legend">Modifier le nom</legend>
        <input type="text" class="input" v-model="name" />
      </fieldset>
    </div>
  </div>
</template>

<script setup lang="js">
import { ref } from 'vue'

const name = ref('Peach')
const age = ref(35)
const image = ref('/Assets/Peach.jpg')

function plusTen(value) {
  return value + 10
}

function random() {
  return Math.floor(Math.random() * 100)
}

const luckyNumber = random()
</script>

<style scoped lang="css">
</style>
