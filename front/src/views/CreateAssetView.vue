<template>
  <div>
    <h1>Create Asset</h1>

    <br>
    name
    <input v-model="name" type="text" />
    <br>
    description
    <input v-model="description" type="text" />
    <br>
    imageurl
    <input v-model="image" type="text" />
    <br>
    model
    <input list="machineModels" v-model="model" type="text" />
    <datalist id="machineModels">
      <option value="RX9000" />
      <option value="SkyFier" />
    </datalist>
    <br>
    owner name
    <input list="users" v-model="owner_name" type="string" />
    <datalist id="users">
      <option v-for="user in users" :key="user.name" :value="user.name" />
    </datalist>
    <br>
    status
    <input list="statuses" v-model="status" type="text" />
    <datalist id="statuses">
      <option value="Running" />
      <option value="Alerting" />
      <option value="Stopped" />
    </datalist>
    <br>
    health_level
    <input v-model="health_level" type="number" />
    <br>
    Unit id
    <input list="unit" v-model="unit_id" type="string" />
    <datalist id="unit">
      <option v-for="unit in units" :key="unit.name" :value="unit.name" />
    </datalist>

    <button @click="createAsset">Create Asset</button>
    <br />
    {{ error }}
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { get, post } from '@utils/request'

const router = useRouter()
const name = ref('')
const image = ref('')
const description = ref('')
const model = ref('')
const owner_name = ref('')
const status = ref('')
const health_level = ref(0)
const unit_id = ref('')

const error = ref('')
const users = ref('')
const units = ref('')

onMounted(() => {
  getUnits();
  getUsers();
})

const getUnits = async () => {
  const res = await get('units/simplified')
  const data = await res.json();
  units.value = data
}

const getUsers = async () => {
  const res = await get('users/')
  const data = await res.json()
  users.value = data
}


const mapUnitNameToId = (unitName) => {
  return units.value.find((unit) => unit.name === unitName).id
}

const createAsset = async () => {
  const res = await post('assets/', {
    name: name.value,
    image: image.value,
    description: description.value,
    model: model.value,
    owner_name: owner_name.value,
    status: status.value,
    health_level: health_level.value,
    unit_id: mapUnitNameToId(unit_id.value)
  })
  const data = await res.json()
  if (!data.error) {
    router.go(-1)
  } else {
    console.log(data)
    error.value = data.message
  }
}
</script>

<style lang="scss" scoped></style>
