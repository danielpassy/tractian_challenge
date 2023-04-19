<template>
  <div>
    <h1>Login</h1> <br>
    <span>Email</span>
    <input type="email" v-model="email" /> <br>
    <span>name</span>
    <input type="text" v-model="name" /> <br>
    <span>password</span>
    <input type="password" v-model="password" /> <br>
    <span>password again</span>
    <input type="password" v-model="password_repeat" /> <br>
    <br>
    <button @click="login">Register</button>
    <br>
    <button @click="backToLogin">back</button>

    {{ error }}
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router'
const emit = defineEmits(['login']);

const backToLogin = () => {
  emit('login');
};
const email = ref('');
const password = ref('');
const password_repeat = ref('');
const name = ref('');

const error = ref('');

const router = useRouter()

const login = async () => {
  if (password.value !== password_repeat.value) {
    alert('passwords do not match')
    return
  }
  const res = await fetch('http://localhost:3000/api/auth/register/', {
    mode: 'cors',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email: email.value, password: password.value, name: name.value })
  })
  const data = await res.json()
  if (data.error) {
    error.value = data.message
  } else {
    localStorage.setItem('token', data['access_token'])
    router.push({ name: 'home' })
  }
}

onMounted(() => {
  if (localStorage.getItem('token')) {
    router.push({ name: 'login' })
  }
});
</script>