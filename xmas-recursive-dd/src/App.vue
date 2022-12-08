<template>
<div>
  <div>
    <div v-if="!isXmas" class="shadow-md relative bg-white rounded-lg border-gray-100 border-[1px]">
      <CountdownHeader />
      <main class="flex justify-center">
        <CountdownSegment label="days" :number="daysLeft" />
        <CountdownSegment label="hours" :number="hoursLeft" />
        <CountdownSegment label="minutes" :number="minutesLeft" />
        <CountdownSegment label="seconds" :number="secondsLeft" />
      </main>
    </div>
    <div v-if="isXmas" class="bg-green text-gray-dark p-3 text-center font-lg">
        Christmas of 2022
    </div>
  </div>
<FullChristmasTree class=""
      :presents="underTheTree"
       @drop="onDrop($event)"
      @dragover.prevent
      @dragenter.prevent />
  <div class="flex flex-row items-end justify-start min-h-fit" >
      <ChristmasPresent v-for="(present, index) in presents" :key="present" :name="present"
      draggable="true" 
      @dragstart="startDrag($event, index)"/>
  </div>
</div> 
</template>

<script setup>
import FullChristmasTree from './FullChristmasTree.vue'
import ChristmasTree from './ChristmasTree.vue'
import ChristmasTreeTrunk from './ChristmasTreeTrunk.vue'
import ChristmasLights from './ChristmasLights.vue'
import ChristmasOrnament from './ChristmasOrnament.vue'
import ChristmasPresent from './ChristmasPresent.vue'
import CountdownHeader from './CountdownHeader.vue'
import CountdownSegment from './CountdownSegment.vue'

import { useNow } from '@vueuse/core'
import {ref} from "vue"

// CountDown
const now = useNow()
const xmas = new Date('12/25/2022 00:00:00')

let daysLeft = ref(null)
let hoursLeft = ref(null)
let minutesLeft = ref(null)
let secondsLeft = ref(null)

let isXmas = ref(false)

const interval = setInterval(()=>{
  let distance = xmas - now.value
  daysLeft.value = Math.floor(distance / (1000 * 60 * 60 * 24));
  hoursLeft.value= Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutesLeft.value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  secondsLeft.value = Math.floor((distance % (1000 * 60)) / 1000);

  if (distance <= 0) {
    clearInterval(interval);
    xmas.value = true
  }
},1000)

// Drag and Drop
const presents = ref(['small-red-gift', 'blue-gift', 'tall-red-gift'])
const underTheTree = ref([])

const startDrag = (evt, index) => {
  evt.dataTransfer.dropEffect = 'move'
  evt.dataTransfer.effectAllowed = 'move'
  evt.dataTransfer.setData('present', index)
}

const onDrop = (evt) => {
    const presentID = evt.dataTransfer.getData('present')
    underTheTree.value.push(presents.value[presentID])
    presents.value.splice(presentID, 1)
}

</script>
