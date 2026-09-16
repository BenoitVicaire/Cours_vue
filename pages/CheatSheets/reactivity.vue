<template>
  <div class="container mx-auto p-4 md:p-8 max-w-4xl">
    <h1 class="text-4xl font-extrabold text-primary mb-2">Cheat Sheet — Réactivité</h1>
    <p class="opacity-70 mb-8">État, valeurs dérivées, effets secondaires.</p>

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
                <td>Une variable réactive (primitive ou objet)</td>
                <td><code>ref()</code></td>
              </tr>
              <tr>
                <td>Un objet réactif (alternative)</td>
                <td><code>reactive()</code></td>
              </tr>
              <tr>
                <td>Une valeur calculée à partir d'autres refs</td>
                <td>
                  <NuxtLink to="/Lessons/computedProperties" class="link link-primary"><code>computed()</code></NuxtLink>
                </td>
              </tr>
              <tr>
                <td>Faire quelque chose <b>quand</b> une variable change</td>
                <td>
                  <NuxtLink to="/Lessons/watchers" class="link link-primary"><code>watch()</code></NuxtLink>
                </td>
              </tr>
              <tr>
                <td>Faire quelque chose qui dépend de plusieurs sources (auto-tracking)</td>
                <td>
                  <NuxtLink to="/Lessons/watchers" class="link link-primary"><code>watchEffect()</code></NuxtLink>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="card bg-base-100 shadow-md mb-6">
      <div class="card-body">
        <h2 class="card-title">⚔️ ref vs reactive</h2>
        <table class="table">
          <thead><tr><th></th><th>ref</th><th>reactive</th></tr></thead>
          <tbody>
            <tr><td>Fonctionne avec</td><td>Tout (primitives + objets)</td><td>Objets/arrays uniquement</td></tr>
            <tr><td>Accès en JS</td><td><code>maVar.value</code></td><td><code>obj.champ</code></td></tr>
            <tr><td>Accès en template</td><td><code>maVar</code> (auto-unwrap)</td><td><code>obj.champ</code></td></tr>
            <tr><td>Peut être remplacé</td><td>Oui : <code>maVar.value = nouvel</code></td><td>Non : perd la réactivité</td></tr>
            <tr><td>Reco</td><td>👍 Par défaut</td><td>Cas particulier</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="card bg-base-100 shadow-md mb-6">
      <div class="card-body">
        <h2 class="card-title">
          ⚔️
          <NuxtLink to="/Lessons/computedProperties" class="link link-primary">computed</NuxtLink>
          vs
          <NuxtLink to="/Lessons/watchers" class="link link-primary">watch</NuxtLink>
        </h2>
        <table class="table">
          <thead><tr><th></th><th>computed</th><th>watch</th></tr></thead>
          <tbody>
            <tr><td>Retourne</td><td>Une valeur</td><td>Rien (déclenche un effet)</td></tr>
            <tr><td>Utilisation</td><td>Afficher une donnée dérivée</td><td>Réagir à un changement (API call, log, save…)</td></tr>
            <tr><td>Cache</td><td>Oui (recalcule seulement si dépendances changent)</td><td>Non</td></tr>
            <tr><td>Exemple</td><td><code>nomComplet = computed(() => prenom.value + ' ' + nom.value)</code></td><td><code>watch(userId, () => fetchUser())</code></td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="card bg-base-100 shadow-md mb-6">
      <div class="card-body">
        <h2 class="card-title">🍳 Recettes</h2>
        <ul class="list-disc list-inside space-y-2">
          <li><b>Compteur</b> → <code>const count = ref(0)</code> puis <code>count.value++</code></li>
          <li>
            <b>Filtrer une liste réactivement</b> →
            <NuxtLink to="/Lessons/computedProperties" class="link link-primary"><code>computed(() => amis.value.filter(a => a.premium))</code></NuxtLink>
          </li>
          <li>
            <b>Sauvegarder à chaque changement</b> →
            <NuxtLink to="/Lessons/watchers" class="link link-primary"><code>watch(form, save, { deep: true })</code></NuxtLink>
          </li>
          <li>
            <b>Watch immédiat au montage</b> →
            <NuxtLink to="/Lessons/watchers" class="link link-primary"><code>watch(source, cb, { immediate: true })</code></NuxtLink>
          </li>
          <li>
            <b>Watcher plusieurs sources</b> →
            <NuxtLink to="/Lessons/watchers" class="link link-primary"><code>watch([a, b], ([na, nb]) => …)</code></NuxtLink>
          </li>
        </ul>
      </div>
    </div>

    <div class="card bg-base-100 shadow-md mb-6">
      <div class="card-body">
        <h2 class="card-title">⚠️ Pièges classiques</h2>
        <ul class="list-disc list-inside space-y-2">
          <li>Oublier <code>.value</code> dans le <code>&lt;script&gt;</code> → tu manipules la ref au lieu de sa valeur.</li>
          <li>Remplacer un objet <code>reactive</code> → il perd sa réactivité. Muter les champs à la place.</li>
          <li>
            <NuxtLink to="/Lessons/watchers" class="link link-primary"><code>watch</code></NuxtLink>
            sur un objet ne détecte pas les changements profonds par défaut → ajouter <code>{ deep: true }</code>.
          </li>
          <li>
            Mettre de la logique lourde dans un
            <NuxtLink to="/Lessons/computedProperties" class="link link-primary"><code>computed</code></NuxtLink>
            → ok car il est mis en cache.
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
