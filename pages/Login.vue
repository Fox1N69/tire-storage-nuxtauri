<script setup lang="js">
useHead({
  title: 'Login',
})

const emailRef = ref('')
const passwordRef = ref('')
const nameRef = ref('')
</script>

<template>
  <div class="flex items-center justify-center min-h-screen w-full">
    <div class=" rounded bg-slate-300 w-1/3 p-5">
      <h1 class="text-2xl font-bold text-center mb-5">Login</h1>
      <form>
        <UiInput placeholder="Email" type="email" class="mb-3" v-model="emailRef" />
        <UiInput placeholder="Password" type="password" class="mb-3" v-model="passwordRef" />
        <UiInput placeholder="Name" type="name" class="mb-3" v-model="nameRef" />
        <div class="flex items-center justify-center gap-5">
          <UiButton class="login__btn" type="button">Login</UiButton>
          <UiButton class="login__btn" type="button">Register</UiButton>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login__btn {
  text-transform: uppercase;
}

.login__btn:hover {
  color: #50c878;
  border: 1px solid #50c878;
}
</style>
