<template>
  <div class="w-2xl mx-auto overflow-x-auto">
    <table class="table">
      <thead>
        <tr>
          <th>Variable</th>
          <th>Valeur</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>String</td>
          <td>{{texte}}</td>
        </tr>
        <tr>
          <td>Int</td>
          <td>{{nombre}}</td>
        </tr>
        <tr>
          <td>object</td>
          <td>{{object}}</td>
        </tr>
        <tr>
          <td>list</td>
          <td>{{list}}</td>
        </tr>
        <tr>
          <td>Boolean</td>
          <td>{{bool}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang='js'>
import { computed, watch, onMounted, onUpdated, onBeforeUnmount , ref} from 'vue'

const texte = ref('Je suis un avion')
const nombre = ref(5)
const object = ref({key : 'value'})
const list = ref(('value','value'))
const bool = ref(true)
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