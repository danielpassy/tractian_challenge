<template>
  <div class="card">
    <h2>
      <button @click.prevent="openUnitPage">
        {{ unit.name }}
      </button>
    </h2>

    <p>{{ unit.localization.address }}</p>

    <p>assets: {{ unit.assets.length }}</p>

    <br />

    <h3>Status</h3>

    <p>
      alerting assets:
    <p v-for="asset in alertingAssets()">
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
import { useRouter } from 'vue-router';
const router = useRouter();
const emit = defineEmits(['openAssetDialog']);


const openAssetDialog = (asset) => {
  emit('openAssetDialog', asset);
};

const openUnitPage = () => {
  console.log(props.unit.id)
  router.push(`unit/${props.unit.id}`);
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
  padding: 12px;
  height: fit-content;
  background: #fff;
  border-radius: 2px;
  display: inline-block;
  margin: 1rem;
  position: relative;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
}
</style>
