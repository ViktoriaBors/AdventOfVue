<script setup lang="ts">
import ChristmasPresent from './components/ChristmasPresent.vue'
import ChristmasTree from './components/ChristmasTree.vue'
import { ref } from 'vue'

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

<template>
  <div class="flex flex-col items-center mt-24 min-h-screen w-full">
    <h1 class="mt-8 text-xl font-bold">Drag the presents under the tree!</h1>
    <!-- TODO: make ChristmasTree our drop zone! -->
    <div class="drop-zone">
    <ChristmasTree :presents="underTheTree" class="mt-16"
      @drop="onDrop($event)"
      @dragover.prevent
      @dragenter.prevent />
      {{underTheTree}}
    </div>
    <div class="mt-20 bg-gray-100 w-full justify-center flex-1">
      <div class="flex items-end justify-center" v-auto-animate>
        <!-- TODO: make each present draggable -->
        <ChristmasPresent v-for="(p, index) in presents" :key="p" :name="p"
        draggable="true"
        @dragstart="startDrag($event, index)" />
      </div>
    </div>
  </div>
</template>
