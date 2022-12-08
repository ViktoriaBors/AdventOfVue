<template>
  <div class="z-20">
    <ChristmasTree v-if="size > 1" :size="size-1">
      <template #lights>
        <slot name="lights" />
      </template>
      <template #ornaments>
        <slot name="ornaments" />
      </template>
    </ChristmasTree>
    
    <div class="flex flex-row justify-center">
      <div v-for="nr in size" :key="nr"
      class="relative rounded-full bg-green w-16 h-16 -m-2 flex justify-center items-center">
       <slot name="lights" />
        <slot name="ornaments" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    size: number
  }>(),
  {
    size: 1,
  }
)
</script>
