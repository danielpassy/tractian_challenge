<template>
  <div class="full-height">
    <button v-if="step != 0" @click="logout">Logout</button>
    <LoginComponent v-if="step === 0" @login="saveToken" />
    <Overview v-else />
  </div>
</template>

<script setup>
import LoginComponent from './components/login.vue';
import Overview from './components/overview.vue';
import { ref, onMounted } from 'vue';

onMounted(() => {
  if (localStorage.getItem('token')) {
    openUnitPage();
  }
});
const saveToken = (token) => {
  localStorage.setItem('token', token);
  openUnitPage();
};

const step = ref(0);
const openUnitPage = () => {
  step.value = 1;
};

const logout = () => {
  localStorage.removeItem('token');
  step.value = 0;
};
</script>
<style>
.full-height {
  height: 100%;
}
</style>
