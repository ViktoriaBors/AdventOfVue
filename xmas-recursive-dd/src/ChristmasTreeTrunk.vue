<template>
  <div class="z-0">
    <div class="flex flex-row justify-center">
      <!-- This div is styled for the tree sections, but it's not complete -->
      <div v-for="nr in size" :key="nr"
      class="relative rounded-full bg-yellow-800 w-16 h-16 -m-3 flex justify-center items-center" />
    </div>
    <christmas-tree-trunk :size="size-1" v-if="size > 0"/>
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
