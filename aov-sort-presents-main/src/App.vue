<template>
<div class="h-full w-full flex flex-col justify-center items-center">
  <div class="p-4 flex justify-center items-center">
    <div class="max-w-md">
      <div>
        <img src="/assets/tree.svg" alt="Christmas tree" />
      </div>
      <div class="mt-2 flex justify-center items-center">
        <img
          v-for="present in sortedPresents"
          :key="present.id"
          :src="present.src"
          :alt="`Present ${present.id}`"
          data-qa="present"
        />
      </div>
    </div>
  </div>
  <button @click="isSorted = !isSorted"
  class="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 
  focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50
   text-white font-semibold h-12 px-6 rounded-lg flex items-center 
   justify-center mx-auto mt-8">Toggle Sort</button>
</div>
</template>

<script setup>
import presents from './presents.json'
import {ref, computed} from 'vue'

let isSorted = ref(false)

let sortedPresents = computed (()=>{
  if(isSorted.value){
    return [...presents].sort((a,b) => {
      return a.dimensions.width * a.dimensions.height - b.dimensions.width * b.dimensions.height
     })
  } else return presents
})





</script>
