<template>
  <div>
    <h1>Create Unit</h1>
    name
    <input v-model="name" type="text" />
    address
    <input v-model="address" type="text" />
    lat
    <input v-model="lat" type="number" />
    lng
    <input v-model="lng" type="number" />
    <button @click="createUnit">Create Unit</button>
    <br />
    {{ error }}
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const name = ref('')
const address = ref('')
const lat = ref(0)
const lng = ref(0)
const error = ref('')
const createUnit = async () => {
  const res = await fetch('http://localhost:3000/api/units/', {
    mode: 'cors',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`
    },
    body: JSON.stringify({
      name: name.value,
      localization: { lat: lat.value, lng: lng.value, address: address.value, }
    })
  })
  const data = await res.json()
  if (!data.error) {
    router.push('/')
  } else {
    console.log(data)
    error.value = data.message
  }
}
</script>

<style lang="scss" scoped></style>
