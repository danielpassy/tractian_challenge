<template>
  <div>
    <h1>Login</h1> <br>
    <span>Email</span>
    <input type="email" v-model="email" /> <br>
    <span>password</span>
    <input type="password" v-model="password" /> <br>
    <br>
    <button @click="login">Login</button>
    <br>
    don't have a user yet?
    <br>
    <button @click="register">Register</button>
    <br>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router'

const emit = defineEmits(['register']);
const router = useRouter()

const register = () => {
  emit('register');
};

onMounted(() => {
  if (localStorage.getItem('token')) {
    router.push({ name: 'login' })
  }
});
const email = ref('');
const password = ref('');

const login = async () => {
  const res = await fetch('http://localhost:3000/api/auth/login/', {
    mode: 'cors',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email: email.value, password: password.value })
  })
  const data = await res.json()
  if (data.error) {
    alert(data.error)
    return
  }
  localStorage.setItem('token', data['access_token'])
  router.push({ name: 'home' })
}

</script>