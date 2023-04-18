<template>
  <LoginComponent
    v-if="step === 0"
    @login="openUnitPage"
  />
  <OverviewPage
    v-else
    />
</template>

<script setup>
import LoginComponent from './components/login.vue';
import LoginComponent from './components/overview.vue';
import {ref} from 'vue';

const step = ref(0);
const openUnitPage = () => {
  step.value = 1;
}


</script>
