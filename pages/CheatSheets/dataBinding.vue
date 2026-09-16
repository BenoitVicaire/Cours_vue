<template>
  <div class="container mx-auto p-4 md:p-8 max-w-4xl">
    <h1 class="text-4xl font-extrabold text-primary mb-2">Cheat Sheet — Data Binding</h1>
    <p class="opacity-70 mb-8">Afficher des données et lier des attributs / valeurs.</p>

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
                <td>Afficher du texte dans le HTML</td>
                <td>
                  <NuxtLink to="/Lessons/textInterpolation" class="link link-primary"><code v-pre>{{ maVariable }}</code></NuxtLink>
                </td>
              </tr>
              <tr>
                <td>Lier un attribut HTML (src, href, class, disabled…)</td>
                <td>
                  <NuxtLink to="/Lessons/attributeBinding" class="link link-primary"><code>:attribut="valeur"</code></NuxtLink>
                  (raccourci de
                  <NuxtLink to="/Lessons/attributeBinding" class="link link-primary"><code>v-bind</code></NuxtLink>)
                </td>
              </tr>
              <tr>
                <td>Lier un input à une variable (deux sens)</td>
                <td>
                  <NuxtLink to="/Lessons/twoWayBinding" class="link link-primary"><code>v-model="maVar"</code></NuxtLink>
                </td>
              </tr>
              <tr>
                <td>Injecter du HTML brut (rare — attention XSS)</td>
                <td><code>v-html="monHtml"</code></td>
              </tr>
              <tr>
                <td>Afficher un objet en JSON pour debug</td>
                <td><code v-pre>{{ JSON.stringify(obj, null, 2) }}</code> dans un <code>&lt;pre&gt;</code></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="card bg-base-100 shadow-md mb-6">
      <div class="card-body">
        <h2 class="card-title">🍳 Recettes</h2>
        <ul class="list-disc list-inside space-y-2">
          <li>
            <b>Récupérer la valeur d'un input</b> →
            <NuxtLink to="/Lessons/twoWayBinding" class="link link-primary"><code>&lt;input v-model="ma"&gt;</code></NuxtLink>
            + <code>const ma = ref('')</code>
          </li>
          <li>
            <b>Désactiver un bouton conditionnellement</b> →
            <NuxtLink to="/Lessons/attributeBinding" class="link link-primary"><code>:disabled="!formValide"</code></NuxtLink>
          </li>
          <li>
            <b>Ajouter/enlever une classe</b> →
            <NuxtLink to="/Lessons/dynamicStyling" class="link link-primary"><code>:class="{ active: estActif }"</code></NuxtLink>
          </li>
          <li>
            <b>Style dynamique</b> →
            <NuxtLink to="/Lessons/dynamicStyling" class="link link-primary"><code>:style="{ color: maCouleur }"</code></NuxtLink>
          </li>
          <li>
            <b>Passer une variable à un composant enfant</b> →
            <NuxtLink to="/Lessons/props" class="link link-primary"><code>:prop="valeur"</code></NuxtLink>
            (sans <code>:</code> = chaîne littérale)
          </li>
        </ul>
      </div>
    </div>

    <div class="card bg-base-100 shadow-md mb-6">
      <div class="card-body">
        <h2 class="card-title">⚠️ Pièges classiques</h2>
        <ul class="list-disc list-inside space-y-2">
          <li>Oublier les <code>:</code> devant l'attribut → Vue interprète comme une chaîne littérale, pas comme une variable.</li>
          <li>Utiliser <code v-pre>{{ }}</code> dans un attribut → interdit, seulement dans le contenu texte.</li>
          <li>
            <NuxtLink to="/Lessons/twoWayBinding" class="link link-primary"><code>v-model</code></NuxtLink>
            sur un <code>&lt;input type="number"&gt;</code> renvoie une chaîne : ajouter <code>.number</code> →
            <code>v-model.number="age"</code>.
          </li>
          <li>
            Modifier une prop reçue dans l'enfant → interdit. Émettre un event vers le parent.
            (voir <NuxtLink to="/Lessons/props" class="link link-primary">Props</NuxtLink>)
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
