<template>
  <div class="container">
    <h1>Login</h1> <br>
    <span>Email</span>
    <input type="email" v-model="email" /> <br>
    <span>Senha</span>
    <input type="password" v-model="password" /> <br>
    <button @click="login">Login</button>
  </div>
</template>

<script setup>
import {ref} from 'vue';
const email = ref('');
const password = ref('');

const login = async () => {
  res = await fetch('https://localhost:3000/api/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({email: email.value, password: password.value})
})
  $emit('login', res);
}

</script>
<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
}

</style>

