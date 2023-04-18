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
  margin: 16px;
}
</style>
