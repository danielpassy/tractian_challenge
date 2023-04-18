<template>
  <div class="full-page" v-if="unit.id">
    <div class="card">
      <h2>
        {{ unit.name }}
      </h2>

      <p>{{ unit.localization.address }}</p>

      <br />

      <h3>Assets</h3>
      <button @click="createAsset">Create Asset</button>
      <AssetCard v-for="asset in unit.assets" :key="asset.name" :asset="asset" />

    </div>
    <AssetDialog ref="assetDialog" />
  </div>
</template>


<script setup>
import AssetDialog from '@components/asset-dialog.vue';
import AssetCard from '@components/asset-card.vue';
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const unit = ref({});

const createAsset = () => {
  router.push('/create-asset');
}

onMounted(async () => {
  const response = await fetch(`http://localhost:3000/api/units/${route.params.id}`, {
    mode: 'cors',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  const data = await response.json();
  console.log(data);
  unit.value = data;
});

const assetDialog = ref(null);
const openAssetDialog = (asset) => {
  this.assetDialog.value.show(asset);
};
</script>


<style scoped>
.card {
  min-height: 100%;
  width: 100%;
}

.full-height {
  width: 100%;
  height: 100%;
}
</style>