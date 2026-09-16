<template>
  <div class="container mx-auto p-4 md:p-8 max-w-4xl">
    <h1 class="text-4xl font-extrabold text-primary mb-2">Cheat Sheet — Composants</h1>
    <p class="opacity-70 mb-8">Découper, communiquer, réutiliser.</p>

    <div class="card bg-base-100 shadow-md mb-6">
      <div class="card-body">
        <h2 class="card-title">🎯 Quand découper en composant</h2>
        <ul class="list-disc list-inside space-y-2">
          <li>Un morceau de UI se répète (une <b>card</b>, un <b>badge</b>, un <b>bouton stylé</b>).</li>
          <li>Une section fait plus de ~100 lignes → sortir un sous-composant.</li>
          <li>Une logique est réutilisée dans plusieurs pages.</li>
          <li>Un morceau a son propre état local (formulaire, modale).</li>
        </ul>
      </div>
    </div>

    <div class="card bg-base-100 shadow-md mb-6">
      <div class="card-body">
        <h2 class="card-title">🎯 Communication parent ↔ enfant</h2>
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
                <td>Envoyer une donnée du parent vers l'enfant</td>
                <td>
                  <NuxtLink to="/Lessons/props" class="link link-primary"><b>Props</b></NuxtLink>
                  — <code>defineProps</code>
                </td>
              </tr>
              <tr>
                <td>Remonter un événement de l'enfant vers le parent</td>
                <td><b>Emits</b> — <code>defineEmits</code></td>
              </tr>
              <tr>
                <td>Injecter du HTML personnalisé dans un composant enfant</td>
                <td><b>Slots</b> — <code>&lt;slot&gt;</code></td>
              </tr>
              <tr>
                <td>Deux sens (valeur d'un input custom)</td>
                <td>
                  <NuxtLink to="/Lessons/twoWayBinding" class="link link-primary"><b>v-model</b></NuxtLink>
                  — <code>defineModel()</code>
                </td>
              </tr>
              <tr>
                <td>Partager une donnée à travers plusieurs niveaux</td>
                <td><b>provide/inject</b> ou un composable / store</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="card bg-base-100 shadow-md mb-6">
      <div class="card-body">
        <h2 class="card-title">🍳 Recette : "afficher une liste de cards"</h2>
        <ol class="list-decimal list-inside space-y-2">
          <li>Créer <code>components/MonEnfant.vue</code>.</li>
          <li>
            Dans l'enfant : déclarer une
            <NuxtLink to="/Lessons/props" class="link link-primary">prop</NuxtLink>
            → <code>defineProps({ item: Object })</code>.
          </li>
          <li>Utiliser <code>item.xxx</code> dans le template de l'enfant.</li>
          <li>
            Dans le parent :
            <NuxtLink to="/Lessons/listRendering" class="link link-primary"><code>&lt;MonEnfant v-for="i in liste" :key="i.id" :item="i" /&gt;</code></NuxtLink>.
          </li>
          <li>Nuxt auto-import le composant depuis <code>components/</code> — pas d'<code>import</code> à écrire.</li>
        </ol>
      </div>
    </div>

    <div class="card bg-base-100 shadow-md mb-6">
      <div class="card-body">
        <h2 class="card-title">🍳 Recette : "bouton qui prévient le parent"</h2>
        <p class="mb-2 opacity-70">Dans l'enfant :</p>
        <pre class="bg-base-200 p-3 rounded text-sm overflow-x-auto"><code>const emit = defineEmits(['supprimer']);
&lt;button @click="emit('supprimer', item.id)"&gt;X&lt;/button&gt;</code></pre>
        <p class="mt-4 mb-2 opacity-70">Dans le parent :</p>
        <pre class="bg-base-200 p-3 rounded text-sm overflow-x-auto"><code>&lt;MonEnfant @supprimer="onSupprimer" /&gt;</code></pre>
        <p class="mt-2 text-sm opacity-70">
          Voir aussi
          <NuxtLink to="/Lessons/eventBinding" class="link link-primary">Event Binding</NuxtLink>.
        </p>
      </div>
    </div>

    <div class="card bg-base-100 shadow-md mb-6">
      <div class="card-body">
        <h2 class="card-title">⚠️ Pièges classiques</h2>
        <ul class="list-disc list-inside space-y-2">
          <li>
            Modifier une
            <NuxtLink to="/Lessons/props" class="link link-primary">prop</NuxtLink>
            reçue → <b>interdit</b>. Émettre un event ou copier dans un <code>ref</code> local.
          </li>
          <li>
            Oublier le <code>:</code> devant l'attribut → la
            <NuxtLink to="/Lessons/attributeBinding" class="link link-primary">prop</NuxtLink>
            reçoit une <b>string</b> au lieu de la variable.
          </li>
          <li>Passer trop de props → signe qu'il faudrait passer un objet ou repenser la structure.</li>
          <li>Nommer un composant en un seul mot (<code>Friend</code>) → possible conflit avec HTML. Préférer <code>OneFriend</code>, <code>UserCard</code>…</li>
        </ul>
      </div>
    </div>
  </div>
</template>
