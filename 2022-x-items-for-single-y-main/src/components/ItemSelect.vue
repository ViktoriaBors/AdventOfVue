<script setup>
import { ref, watch } from 'vue'
import { useItemComparison } from '../composables/itemComparison'

const selected = ref(null)

const {products, itemsComparison} = useItemComparison()

watch(selected,(newitem, previtem)=>{
 itemsComparison.value = itemsComparison.value.filter(
    item => item.id !== previtem?.id
  )
  itemsComparison.value.push(newitem)
})

</script>

<template>
<div>
  <select v-model="selected" class="p-2 border-2 border-gray-dark">
    <option disabled value="">Select an item</option>
    <option v-for="product in products" :key="product.id" :value="product">{{product.title}} - {{product.price}}$</option>
  </select>
</div>
</template>
