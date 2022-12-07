<template>
<div>
    <p v-if="itemsAreTheSame" class="mx-5 text-center">
    These are the same items
  </p>
  <p v-else class="mx-5 text-center">
    You can get <strong>{{ numCheaperItems}}x</strong> <em>{{ cheapItem.title }}</em> for about the same price as a single <em>{{ expensiveItem.title }}</em>
  </p>
</div>
</template>

<script setup>
import { ref, watch, computed } from 'vue'
import { useItemComparison } from '../composables/itemComparison'

const {products, itemsComparison} = useItemComparison()

const sort = computed(() =>
  [...itemsComparison.value].sort((a, b) => a.price - b.price)
)
const expensiveItem = computed(() => sort.value[1])
const cheapItem = computed(() => sort.value[0])


const itemsAreTheSame = computed(
  () => expensiveItem.value.id === cheapItem.value.id
)

const numCheaperItems = computed(() =>
  Math.floor(expensiveItem.value.price/ cheapItem.value.price)
)

</script>