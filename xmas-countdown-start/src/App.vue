<script setup>
import CountdownHeader from '@/components/CountdownHeader.vue'
import CountdownSegment from './components/CountdownSegment.vue'
import { useNow } from '@vueuse/core'
import {ref} from "vue"

const now = useNow()
const christmas = new Date('12/25/2022 00:00:00')

let daysLeft = ref(null)
let hoursLeft = ref(null)
let minutesLeft = ref(null)
let secondsLeft = ref(null)

let xmas = ref(false)

const interval = setInterval(()=>{
  let distance = christmas - now.value
  daysLeft.value = Math.floor(distance / (1000 * 60 * 60 * 24));
  hoursLeft.value= Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutesLeft.value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  secondsLeft.value = Math.floor((distance % (1000 * 60)) / 1000);

  if (distance <= 0) {
    clearInterval(interval);
    xmas.value = true
  }
},1000)


</script>

<template>
  <div class="w-full h-full flex justify-center items-center p-10">
    <div>
      <div v-if="!xmas" class="shadow-md relative bg-white p-5 rounded-lg border-gray-100 border-[1px]">
        <CountdownHeader />
        <main class="flex justify-center">
          <CountdownSegment label="days" :number="daysLeft" />
          <CountdownSegment label="hours" :number="hoursLeft" />
          <CountdownSegment label="minutes" :number="minutesLeft" />
          <CountdownSegment label="seconds" :number="secondsLeft" />
        </main>
      </div>
      <div v-if="xmas" class="bg-green text-gray-dark p-3 text-center font-lg">
        Christmas of 2022
      </div>
      <h4 class="mt-10 text-gray-400 text-center text-sm">
        This challenge brought to you by <a href="https://vueschool.io/" class="underline">Vue School</a>
      </h4>
    </div>
  </div>
</template>

<style>
div {
  display: block;
}

body {
  @apply bg-gray-100;
}
</style>
