<template>
    <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
            <h2 class="card-title">Ajoutez un ami!</h2>
            <form @submit.prevent="handleEmit" action="">
                <fieldset
                    class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
                >

                    <label class="label">Name</label>
                    <input
                        v-model="name"
                        type="text"
                        class="input"
                        placeholder="Name"
                    />

                    <label class="label">Phone Number</label>
                    <input
                        v-model="phoneNumber"
                        type="text"
                        class="input"
                        placeholder="Phone Number"
                    />

                    <label class="label">Email</label>
                    <input
                        v-model="email"
                        type="email"
                        class="input"
                        placeholder="Email"
                    />

                    <label class="label">Premium</label>
                    <input v-model="premium" type="checkbox" class="checkbox" />
                </fieldset>
                <div class="card-actions justify-end">
                    <button  class="btn btn-neutral mt-4">Créer un ami!</button>
                </div>
            </form>
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

const name = ref("");
const email = ref("");
const phoneNumber = ref("");
const premium = ref(false);

// v-model binding (Vue 3.4+)
const model = defineModel({ default: "" });

const props = defineProps({
    text: String,
});

const emit = defineEmits({
    'eventNewfriend': (ami) => {
  return typeof ami === "object"
      && typeof ami.name === "string" && ami.name.length > 0
      && typeof ami.email === "string" && ami.email.includes("@")
      && typeof ami.phone === "string"
      && typeof ami.premium === "boolean";
}
});

function handleEmit(){
    emit('eventNewFriend', {
    id: crypto.randomUUID(),
    name: name.value,
    email: email.value,
    phone: phoneNumber.value,
    premium: premium.value,
  });
}

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
