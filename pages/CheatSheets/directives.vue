<template>
  <div class="container mx-auto p-4 md:p-8 max-w-4xl">
    <h1 class="text-4xl font-extrabold text-primary mb-2">Cheat Sheet — Directives</h1>
    <p class="opacity-70 mb-8">Conditions, boucles, événements.</p>

    <div class="card bg-base-100 shadow-md mb-6">
      <div class="card-body">
        <h2 class="card-title">🎯 Quand utiliser quoi</h2>
        <div class="overflow-x-auto">
          <table class="table table-zebra">
            <thead>
              <tr>
                <th>Je veux…</th>
                <th>J'utilise</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Afficher/cacher un élément (rendu conditionnel)</td>
                <td>
                  <NuxtLink to="/Lessons/conditionalRendering" class="link link-primary"><code>v-if</code></NuxtLink> /
                  <NuxtLink to="/Lessons/conditionalRendering" class="link link-primary"><code>v-else-if</code></NuxtLink> /
                  <NuxtLink to="/Lessons/conditionalRendering" class="link link-primary"><code>v-else</code></NuxtLink>
                </td>
              </tr>
              <tr>
                <td>Basculer un élément qui change souvent</td>
                <td>
                  <NuxtLink to="/Lessons/conditionalRendering" class="link link-primary"><code>v-show</code></NuxtLink>
                </td>
              </tr>
              <tr>
                <td>Afficher une liste</td>
                <td>
                  <NuxtLink to="/Lessons/listRendering" class="link link-primary"><code>v-for="item in liste" :key="item.id"</code></NuxtLink>
                </td>
              </tr>
              <tr>
                <td>Écouter un événement (click, submit, keyup…)</td>
                <td>
                  <NuxtLink to="/Lessons/eventBinding" class="link link-primary"><code>@click="maFn"</code></NuxtLink>
                  (raccourci de
                  <NuxtLink to="/Lessons/eventBinding" class="link link-primary"><code>v-on:click</code></NuxtLink>)
                </td>
              </tr>
              <tr>
                <td>Rendre du contenu une seule fois (perf)</td>
                <td><code>v-once</code></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="card bg-base-100 shadow-md mb-6">
      <div class="card-body">
        <h2 class="card-title">
          ⚔️
          <NuxtLink to="/Lessons/conditionalRendering" class="link link-primary">v-if</NuxtLink>
          vs
          <NuxtLink to="/Lessons/conditionalRendering" class="link link-primary">v-show</NuxtLink>
        </h2>
        <table class="table">
          <thead><tr><th></th><th>v-if</th><th>v-show</th></tr></thead>
          <tbody>
            <tr><td>Comportement</td><td>Retire du DOM</td><td>Cache avec <code>display:none</code></td></tr>
            <tr><td>Coût initial</td><td>Faible</td><td>Élevé (rend quand même)</td></tr>
            <tr><td>Coût du toggle</td><td>Élevé</td><td>Faible</td></tr>
            <tr><td>Utiliser quand</td><td>Condition rare / initiale</td><td>Toggle fréquent</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="card bg-base-100 shadow-md mb-6">
      <div class="card-body">
        <h2 class="card-title">🍳 Recettes</h2>
        <ul class="list-disc list-inside space-y-2">
          <li>
            <b>Liste d'items</b> →
            <NuxtLink to="/Lessons/listRendering" class="link link-primary"><code>v-for="ami in amis" :key="ami.id"</code></NuxtLink>
            — <code>:key</code> obligatoire.
          </li>
          <li>
            <b>Index dans une boucle</b> →
            <NuxtLink to="/Lessons/listRendering" class="link link-primary"><code>v-for="(item, i) in liste"</code></NuxtLink>
          </li>
          <li>
            <b>Empêcher la soumission d'un form</b> →
            <NuxtLink to="/Lessons/eventBinding" class="link link-primary"><code>@submit.prevent="onSubmit"</code></NuxtLink>
          </li>
          <li>
            <b>Détecter une touche précise</b> →
            <NuxtLink to="/Lessons/eventBinding" class="link link-primary"><code>@keyup.enter="valider"</code></NuxtLink>
          </li>
          <li>
            <b>Cliquer une seule fois</b> →
            <NuxtLink to="/Lessons/eventBinding" class="link link-primary"><code>@click.once="init"</code></NuxtLink>
          </li>
          <li>
            <b>Stop propagation</b> →
            <NuxtLink to="/Lessons/eventBinding" class="link link-primary"><code>@click.stop="…"</code></NuxtLink>
          </li>
        </ul>
      </div>
    </div>

    <div class="card bg-base-100 shadow-md mb-6">
      <div class="card-body">
        <h2 class="card-title">⚠️ Pièges classiques</h2>
        <ul class="list-disc list-inside space-y-2">
          <li>
            <NuxtLink to="/Lessons/listRendering" class="link link-primary"><code>v-for</code></NuxtLink>
            et
            <NuxtLink to="/Lessons/conditionalRendering" class="link link-primary"><code>v-if</code></NuxtLink>
            sur le même élément → interdit, wrapper avec un <code>&lt;template v-if&gt;</code>.
          </li>
          <li>
            Oublier <code>:key</code> dans
            <NuxtLink to="/Lessons/listRendering" class="link link-primary"><code>v-for</code></NuxtLink>
            → bugs de réactivité subtils.
          </li>
          <li>Utiliser l'index comme <code>:key</code> avec une liste qui bouge → préférer un ID stable.</li>
          <li>
            <NuxtLink to="/Lessons/eventBinding" class="link link-primary"><code>@click="maFn()"</code></NuxtLink>
            exécute la fonction immédiatement au rendu. Écrire <code>@click="maFn"</code> (sans les parenthèses)
            ou <code>@click="() => maFn(arg)"</code>.
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
