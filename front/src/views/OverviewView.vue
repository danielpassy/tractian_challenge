<template>
  <button @click="logout" class="button">Logout</button>
  <div class="overview">
    <button @click="openCreateUnitPage">Create Unit</button>
    <h1>Units</h1>
    <br />
    <div class="cointainers">
      <UnitCard @openAssetDialog="openAssetDialog" class="card" v-for="unit in units" :key="unit.id" :unit="unit" />
    </div>
    <AssetDialog ref="assetDialog" />
  </div>
</template>

<script setup>
import AssetDialog from '@components/asset-dialog.vue';
import UnitCard from '@components/unit-card.vue';
import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue';
import { get } from '@utils/request'

const assetDialog = ref(null);

const units = ref({});

const router = useRouter()

const openCreateUnitPage = () => { router.push({ name: 'create-unit' }); }

onMounted(() => {
  if (!localStorage.getItem('token')) {
    router.push({ name: 'login' })
  }
  getUnits();
});

const logout = () => {
  localStorage.removeItem('token');
  router.push({ name: 'login' });
};
const openAssetDialog = (asset) => {
  console.log(asset.value);
  assetDialog.value.show(asset);
};

const getUnits = async () => {
  const res = await get('units/')
  const data = await res.json();
  units.value = data;
};
</script>

<style scoped>
.overview {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}

.cointainers {
  display: flex;
  flex-direction: row;
  height: 100%;
  flex-wrap: wrap;
  width: 100%;
}

.card {
  min-height: 40%;
  width: 45%;
  margin: 16px;
  max-width: 50%;
}

.button {
  width: 90px;
}
</style>
