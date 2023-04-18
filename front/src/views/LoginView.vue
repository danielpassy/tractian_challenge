<template>
  <Login v-if="step === 0" @register="flipStep" />
  <Register v-else @login="flipStep" />
</template>

<script setup>
import Login from '@components/login.vue';
import Register from '@components/register.vue';
import { ref, } from 'vue';
const step = ref(0);

const flipStep = () => {
  step.value = step.value === 0 ? 1 : 0;
};

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

