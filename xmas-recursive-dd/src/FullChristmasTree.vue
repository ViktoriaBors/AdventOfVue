<template>
<div>
    <div class=" w-full mt-4 flex justify-center items-center">
      <ChristmasTree :size="7">
        <template #lights>
          <ChristmasLights v-for="i in 2" :key="i"/>
        </template>
        <template #ornaments>
          <ChristmasOrnament color="red" />
        </template>
      </ChristmasTree>
    </div>
    <div  class="w-full flex justify-center items-center z-0" 
        >
    <ChristmasTreeTrunk :size="2" />
    </div>
    <div class="flex flex-row justify-center items-end z-40 presents">
      <ChristmasPresent v-for="(present, index) in presents" :key="present" :name="present" />
    </div>
</div>

  
</template>

<script setup lang="ts">
import ChristmasTree from './ChristmasTree.vue'
import ChristmasTreeTrunk from './ChristmasTreeTrunk.vue'
import ChristmasLights from './ChristmasLights.vue'
import ChristmasOrnament from './ChristmasOrnament.vue'
import ChristmasPresent from './ChristmasPresent.vue'

defineProps<{
  presents: string[]
}>()
</script>

<style>

</style>