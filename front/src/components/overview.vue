<template>
  <div>
    <h1>Units</h1>
    <br />
    <div class="cointainers">
      <UnitCard
        @openAssetDialog="openAssetDialog"
        class="card"
        v-for="unit in units"
        :key="unit.id"
        :unit="unit"
      />
    </div>
    <AssetDialog ref="assetDialog" />
  </div>
</template>

<script setup>
import UnitCard from './unit-card.vue';
import AssetDialog from './asset-dialog.vue';
import { ref, onMounted } from 'vue';
const assetDialog = ref(null);
const units = ref({});

onMounted(() => {
  getUnits();
});

const openAssetDialog = (asset) => {
  console.log(asset.value);
  assetDialog.value.show(asset);
};

const getUnits = async () => {
  const res = await fetch('http://localhost:3000/api/units/', {
    mode: 'cors',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  const data = await res.json();
  units.value = data;
};
</script>

<style scoped>
.cointainers {
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  height: 100%;
  flex-wrap: wrap;
}
.card {
  margin: 16px;
  max-width: 40%;
}
</style>
