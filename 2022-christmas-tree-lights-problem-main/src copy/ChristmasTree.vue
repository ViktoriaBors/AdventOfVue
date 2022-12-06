<template>
  <div>
    <christmas-tree v-if="size > 1" :size='size-1'  />
    <div class="flex flex-row justify-center">
      <!-- This div is styled for the tree sections, but it's not complete -->
      <div v-for="number in size" key="number" class="-m-2 relative rounded-full bg-green w-16 h-16 flex justify-center items-center" />
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
