<template>
  <div class="wrapper">
    <div class="card">
      <img :src="props.asset.image" style="max-width: 100%; height: auto;" />
      <p>Description: {{ props.asset.description }}</p>
      <p>Model: {{ props.asset.model }}</p>
      <p>Owner name: {{ props.asset.owner || 'no one' }}</p>
      <p>Status: {{ props.asset.status }}</p>
      <p>Health Level: {{ props.asset.health_level }}</p>
      <p>Internal ID: {{ props.asset.id }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  asset: {
    type: Object,
    required: true,
  },
});
</script>


<style scoped>
.wrapper {
  width: 40%;
  margin: 16px;
}

.card {
  margin: 16px;
  padding: 12px;
  width: 100%;
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