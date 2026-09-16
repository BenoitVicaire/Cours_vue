<template>
  <div class="container mx-auto p-4 md:p-8 max-w-4xl">
    <h1 class="text-4xl font-extrabold text-primary mb-2">Cheat Sheet — Nuxt & Routing</h1>
    <p class="opacity-70 mb-8">Pages, navigation, layouts, structure projet.</p>

    <div class="card bg-base-100 shadow-md mb-6">
      <div class="card-body">
        <h2 class="card-title">🎯 Structure du projet</h2>
        <div class="overflow-x-auto">
          <table class="table table-zebra">
            <thead>
              <tr>
                <th>Dossier</th>
                <th>Contient</th>
                <th>Auto-import ?</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><code>pages/</code></td><td>Les vues → routes automatiques</td><td>—</td></tr>
              <tr><td><code>components/</code></td><td>Composants Vue réutilisables</td><td>✅</td></tr>
              <tr><td><code>layouts/</code></td><td>Templates qui entourent les pages</td><td>✅</td></tr>
              <tr><td><code>composables/</code></td><td>Fonctions <code>useXxx()</code> réutilisables</td><td>✅</td></tr>
              <tr><td><code>assets/</code></td><td>CSS, images bundlées</td><td>—</td></tr>
              <tr><td><code>public/</code></td><td>Fichiers statiques servis tels quels</td><td>—</td></tr>
              <tr><td><code>data/</code> (custom)</td><td>Jeux de données JS/JSON</td><td>—</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="card bg-base-100 shadow-md mb-6">
      <div class="card-body">
        <h2 class="card-title">🎯 File-based routing</h2>
        <div class="overflow-x-auto">
          <table class="table table-zebra">
            <thead>
              <tr>
                <th>Fichier</th>
                <th>URL</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><code>pages/index.vue</code></td><td><code>/</code></td></tr>
              <tr><td><code>pages/about.vue</code></td><td><code>/about</code></td></tr>
              <tr><td><code>pages/Lessons/props.vue</code></td><td><code>/Lessons/props</code></td></tr>
              <tr><td><code>pages/user/[id].vue</code></td><td><code>/user/42</code> (param dynamique)</td></tr>
              <tr><td><code>pages/[...slug].vue</code></td><td>Tout le reste (404 / catch-all)</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="card bg-base-100 shadow-md mb-6">
      <div class="card-body">
        <h2 class="card-title">🎯 Naviguer</h2>
        <div class="overflow-x-auto">
          <table class="table table-zebra">
            <thead>
              <tr>
                <th>Je veux…</th>
                <th>J'utilise</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Un lien dans le template</td><td><code>&lt;NuxtLink to="/about"&gt;</code></td></tr>
              <tr><td>Naviguer depuis le JS</td><td><code>await navigateTo('/about')</code></td></tr>
              <tr><td>Récupérer l'URL courante</td><td><code>const route = useRoute()</code></td></tr>
              <tr><td>Récupérer un paramètre de route</td><td><code>route.params.id</code></td></tr>
              <tr><td>Récupérer un query string (<code>?tab=1</code>)</td><td><code>route.query.tab</code></td></tr>
              <tr><td>Rediriger l'user</td><td><code>navigateTo('/', { replace: true })</code></td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="card bg-base-100 shadow-md mb-6">
      <div class="card-body">
        <h2 class="card-title">🍳 Recettes</h2>
        <ul class="list-disc list-inside space-y-2">
          <li><b>Nouvelle page</b> → créer un <code>.vue</code> dans <code>pages/</code>. Nuxt crée la route auto.</li>
          <li><b>Nouveau composant réutilisable</b> → créer dans <code>components/</code>. Utilisable partout sans import.</li>
          <li><b>Alias d'URL</b> → dans la page : <code>definePageMeta({ alias: ['/home'] })</code>.</li>
          <li><b>Layout différent pour une page</b> → <code>definePageMeta({ layout: 'auth' })</code> + créer <code>layouts/auth.vue</code>.</li>
          <li><b>Titre de page</b> → <code>useHead({ title: 'Ma page' })</code>.</li>
          <li><b>Fetch de données</b> → <code>const { data } = await useFetch('/api/xxx')</code>.</li>
        </ul>
      </div>
    </div>

    <div class="card bg-base-100 shadow-md mb-6">
      <div class="card-body">
        <h2 class="card-title">⚠️ Pièges classiques</h2>
        <ul class="list-disc list-inside space-y-2">
          <li>La <b>casse du nom du dossier</b> apparaît dans l'URL (<code>Lessons/</code> → <code>/Lessons/…</code>). Windows le tolère, Linux non.</li>
          <li>Utiliser <code>&lt;a href&gt;</code> au lieu de <code>&lt;NuxtLink&gt;</code> → recharge toute la page.</li>
          <li>Oublier que le dossier ajoute un segment à l'URL (déplacer un fichier change son URL).</li>
          <li><code>useRoute()</code> et <code>useRouter()</code> sont différents : <b>route</b> = infos, <b>router</b> = navigation.</li>
        </ul>
      </div>
    </div>
  </div>
</template>
