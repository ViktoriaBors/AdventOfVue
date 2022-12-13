<template>
  <div class="w-full h-full flex flex-col justify-center items-center">
    <span class="text-3xl">Find Joseph's Gift!</span>
    <div class="text-center m-2">
    <p>Pick a number (between 2 and 30)</p>
    <input type="number"  class="ml-2 p-1 border-2 border-gray-dark" min="2" max="30" v-model="numberOfGifts">
    </div>
     <div class="text-2xl flex gap-2">
      <button class="disabled:opacity-40" :disabled="currentStep === 1" @click="currentStep = 1">⏮️</button>
      <button class="disabled:opacity-40" :disabled="currentStep === 1" @click="currentStep--">◀️</button>
      <button class="disabled:opacity-40" :disabled="currentStep === numSteps" @click="currentStep++">▶️</button>
      <button class="disabled:opacity-40" :disabled="currentStep === numSteps" @click="currentStep = numSteps">
        ⏭️
      </button>
      </div>
    <div class="flex flex-row gap-4">
      <div class="text-center border-2 border-green text-gray-900 h-10 w-10" 
      v-for="num in numberOfGifts" :key="num"
      :class="{ 'opacity-40': eliminatedAfterCurrentStep.includes(num)}">{{num}}</div>
    </div>
  </div>
</template>

<script setup>
import {ref, computed, watch} from 'vue'

let numberOfGifts = ref(10)
const currentStep = ref(1)

const eliminationOrder = computed(() => {
  // Create an array of integers from 1 to numberOfGifts.value
  const gifts = [...Array(numberOfGifts.value + 1).keys()].slice(1)
  let indexToEliminate = 0
  let moveBy = 1
  const result = []
  while (gifts.length > 1) {
    indexToEliminate = (indexToEliminate + moveBy) % gifts.length
    result.push(gifts[indexToEliminate])
    gifts.splice(indexToEliminate, 1)
  }
  return result
})
const numSteps = computed(() => eliminationOrder.value.length)
const eliminatedAfterCurrentStep = computed(() => eliminationOrder.value.slice(0, currentStep.value))
watch(numberOfGifts, () => (currentStep.value = 1))




</script>

