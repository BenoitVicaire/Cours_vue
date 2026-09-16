<template>
  <!-- Wrapper page : centre la card horizontalement ET verticalement -->
  <div class="min-h-screen flex items-center justify-center p-4">

    <!-- La card, avec ses styles DaisyUI -->
    <div class="card bg-base-100 w-full max-w-md shadow-xl">
      <div class="card-body">

        <h2 class="card-title justify-center">Créer un compte</h2>

        <form @submit.prevent="handleSubmit">

            <!-- UserName -->
            <fieldset class="fieldset">
                <label class="label" for="userName">Nom d'utilisateur</label>
                <input type="text" id="userName" class="input w-full" placeholder="John Doe" v-model="userName"/>
                <p
                    :style="{ visibility: (userName && userNameError) ? 'visible' : 'hidden' }"
                    class="text-error ml-2 text-sm min-h-5"
                >
                {{ userNameError }}
                </p>
            </fieldset>

          <!-- Email -->
          <fieldset class="fieldset">
            <label class="label" for="userEmail">Email</label>
            <input type="email" id="userEmail" class="input w-full" placeholder="john@mail.com" v-model="userEmail" />
            <p
                :style="{ visibility: (userEmail && userEmailError) ? 'visible' : 'hidden' }"
                class="text-error ml-2 text-sm min-h-5"
            >
                {{ userEmailError }}
            </p>
          </fieldset>

          <!-- password -->
          <fieldset class="fieldset">
            <label class="label" for="userPassword">Mot de passe</label>
            <input type="password" id="userPassword" class="input w-full" v-model="userPassword" />
          </fieldset>

          <!-- Password Progress Bar -->
          <progress class="progress w-full" :class="progressColor" :value=progressStatus  max="100"></progress>

          <!-- Password requirement -->
          <div>
            <ul class="text-sm space-y-1 mt-2">
                <li :class="hasMinLength ? 'text-success' : 'text-error'">Au moins 12 caractère</li>
                <li :class="hasUpperCase ? 'text-success' : 'text-error'">Au moins une Majuscule</li>
                <li :class="hasLowerCase ? 'text-success' : 'text-error'">Au moins une minuscule</li>
                <li :class="hasNumber ? 'text-success' : 'text-error'">Au moins un chiffre</li>
                <li :class="hasSpecialChar ? 'text-success' : 'text-error'">Au moins un caractère spécial</li>
            </ul>
          </div>

          <!-- Confirm Password -->
          <fieldset class="fieldset">
            <label class="label" for="confirmPassword">Confirmer le mot de passe</label>
            <input type="password" id="confirmPassword" class="input w-full" v-model="confirmPassword"/>
            <p
                :style="{ visibility: (confirmPassword && !validConfirm) ? 'visible' : 'hidden' }"
                class="text-error ml-2 text-sm"
            >
            Les deux mots de passent ne correspondent pas
            </p>
          </fieldset>

          <!-- CGU -->
          <label class="label cursor-pointer justify-start gap-2 mt-2">
            <input type="checkbox" class="checkbox" v-model="cgu"/>
            <span>J'accepte les conditions générales</span>
          </label>

          <!-- Bouton d'inscription -->
          <div class="card-actions justify-end mt-4">
            <button type="submit" class="btn btn-primary w-full" :disabled="!formValid">S'inscrire</button>
          </div>
        </form>

      </div>
    </div>

  </div>
</template>

<script setup lang="js">
import { computed, watch, onBeforeUnmount, ref } from "vue";

// UserName
const userName = ref('')
const userNameValid = computed(() =>
  userName.value.length >= 3 &&
  !adminInName.value
)
watch(userName, (newVal) =>{
    const sanitized = newVal.replace(/[<>"'`]/g,'')
    if (sanitized !== newVal) {
        userName.value = sanitized
    }  
})

const userNameError = computed(() => {
  if (userName.value.length < 3)             return '3 caractères minimum'
  if (adminInName.value)         return 'Le mot "admin" n\'est pas autorisé'
  return ''
})

// UserMail
const userEmail = ref('')
const emailValid = computed(()=> /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail.value))
const userEmailValid = computed(() =>
    emailValid.value &&
    !adminInEmail.value
)

const userEmailError = computed(() => {
  if (!emailValid.value)             return 'Veuillez entrer un email valide'
  if (adminInEmail.value)         return 'Le mot "admin" n\'est pas autorisé'
  return ''
})

// Admin verif
const adminInName = ref(false)
const adminInEmail = ref(false)
watch([userName, userEmail], ([newName, newEmail])=>{
    adminInName.value = /admin/i.test(newName) 
    adminInEmail.value = /admin/i.test(newEmail)
})

// Option Computed a la place de watcher
// const adminInName  = computed(() => /admin/i.test(userName.value))
// const adminInEmail = computed(() => /admin/i.test(userEmail.value))

// UserPassword
const userPassword = ref('')

const hasMinLength = computed(()=> userPassword.value.length>=12)
const hasUpperCase = computed(()=> /[A-Z]/.test(userPassword.value))
const hasLowerCase = computed(()=> /[a-z]/.test(userPassword.value))
const hasNumber = computed(()=> /[0-9]/.test(userPassword.value))
const hasSpecialChar = computed(()=> /[^A-Za-z0-9]/.test(userPassword.value))

const passwordValid = computed(() =>
  hasMinLength.value &&
  hasUpperCase.value &&
  hasLowerCase.value &&
  hasNumber.value &&
  hasSpecialChar.value
)

// ProgressBar
const progressStatus = computed(()=>{
    const validCount = 
    hasMinLength.value +
    hasUpperCase.value +
    hasLowerCase.value +
    hasNumber.value +
    hasSpecialChar.value
    return (validCount /5) * 100
})
const progressColor = computed(() => {
  if (progressStatus.value < 40)  return 'progress-error'
  if (progressStatus.value < 100) return 'progress-warning'
  return 'progress-success'
})

// Confirm Password
const confirmPassword = ref('')
const validConfirm = computed(()=> 
    confirmPassword.value !== '' && 
    userPassword.value===confirmPassword.value)

// CGU
const cgu = ref(false)

// Bouton
const formValid = computed(()=>
    userNameValid.value &&
    userEmailValid.value &&
    passwordValid.value &&
    validConfirm.value &&
    cgu.value
)



</script>

<style scoped lang="css"></style>
