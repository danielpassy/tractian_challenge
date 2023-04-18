<template>
  <div class="card">
    <h2>{{ unit.name }}</h2>

    <p>{{ unit.localization.address }}</p>

    <p>assets: {{ unit.assets.length }}</p>

    <br />

    <h3>Status</h3>

    <p>
      alerting assets:
      <p v-for="asset in alertingAssets()" >
        <button @click="openAssetDialog(asset)">
          {{ asset.name }}
        </button>
      </p>
    </p>

    <p>Assets with low health level (>40%)</p>

    <p v-for="asset in assetsWithLowHealthLevel()">
      <button @click="openAssetDialog(asset)">
      {{ asset.name }}       
     </button>
    </p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
const emit = defineEmits(['openAssetDialog']);

const openAssetDialog = (asset) => {
  emit('openAssetDialog', asset);
};

const alertingAssets = () => {
  return props.unit.assets.filter((a) => a.status === 'Alerting');
};

const assetsWithLowHealthLevel = () => {
  return props.unit.assets.filter((a) => a.health_level < 101);
};

const props = defineProps({
  unit: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.card {
  height: fit-content;
  min-height: 40%;
  padding: 12px;
  margin: 16px;
  background: #fff;
  border-radius: 2px;
  display: inline-block;
  margin: 1rem;
  position: relative;
  width: 300px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}
</style>
