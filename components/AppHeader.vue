<template>
  <header class="p-2">
    <button class="btn sm:hidden" popovertarget="my-megamenu-1">Menu</button>

    <div
      class="megamenu max-sm:megamenu-vertical p-2 border border-base-300"
      id="my-megamenu-1"
      popover
    >
      <div class="flex-1"></div>
      <div class="flex-1 flex justify-center gap-2">
        <span class="megamenu-active"></span>
        <NuxtLink to="/" class="btn btn-ghost">Accueil</NuxtLink>

        <button popovertarget="lesson">Lessons</button>
        <div id="lesson" popover>
          <ul class="menu">
            <li v-for="route in lessons" :key="route.path">
              <NuxtLink :to="route.path">{{ route.title }}</NuxtLink>
            </li>
          </ul>
        </div>

        <button popovertarget="exercice">Exercices</button>
        <div id="exercice" popover>
          <ul class="menu">
            <li v-for="route in exercices" :key="route.path">
              <NuxtLink :to="route.path">{{ route.title }}</NuxtLink>
            </li>
          </ul>
        </div>

        <button popovertarget="tp">TP</button>
        <div id="tp" popover>
          <ul class="menu">
            <li v-for="route in tps" :key="route.path">
              <NuxtLink :to="route.path">{{ route.title }}</NuxtLink>
            </li>
          </ul>
        </div>

        <button popovertarget="cheatSheet">Cheat Sheet</button>
        <div id="cheatSheet" popover>
          <ul class="menu">
            <li v-for="route in cheatSheets" :key="route.path">
              <NuxtLink :to="route.path">{{ route.title }}</NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <div class="flex-1 flex justify-end">
        <NuxtLink to="/authRegister" class="btn btn-primary ml-auto">
          Créer un compte
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup lang="js">
const { lessons, exercices, tps, cheatSheets } = useNavigation();
</script>

<style scoped lang="css"></style>
