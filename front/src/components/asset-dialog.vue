<template>
  <div v-if="visible" class="dialog">
    <button @click="close" class="fecharBtn">Voltar</button>
    <div class="container">
      <h1>{{ asset.name }}</h1>
      Info

      <img :src="asset.image" />

      <p>Description: {{ asset.description }}</p>
      <p>Model: {{ asset.model }}</p>
      <p>Owner ID: {{ asset.owner_id }}</p>
      <p>Status: {{ asset.status }}</p>
      <p>Health Level: {{ asset.health_level }}</p>
      <p>Internal ID: {{ asset.id }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const visible = ref(false);
const asset = ref({});

const close = () => {
  visible.value = false;
  asset.value = {};
};

const show = (_asset) => {
  console.log(_asset.value);
  console.log(asset);
  asset.value = _asset;
  visible.value = true;
};

defineExpose({
  show,
});
</script>

<style scoped>
.dialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 32px;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.fecharBtn {
  font-size: 24px;
}
</style>
