<template>
  <div class="w-full h-full flex flex-col justify-center items-center">
    <div>
      <div class="w-full max-w-2xl p-4 rounded bg-red-400 text-white">
        <div class="border-2 rounded flex flex-col md:flex-row md:items-center md:gap-8 p-4">
          <img src="/assets/santa.svg" alt="" class="max-w-[12em]" />
          <div>
            <h1 class="font-serif text-4xl">Happy Holidays!</h1>
            <div class="mt-4 bg-white text-black p-2 rounded">From: {{toWho}}</div>
            <div class="mt-2 bg-white text-black p-2 rounded">To: {{fromWho}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="m-4 w-full max-w-2xl p-4 rounded border-2">
    <p>To:</p>
    <input v-model="toWho" class="border-2 bg-gray-100 rounded-lg w-full p-2" type="text">
    <p>From:</p>
    <input v-model="fromWho" class="border-2 bg-gray-100 rounded-lg w-full p-2" type="text">
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue"

let toWho = ref("")
let fromWho = ref("")

</script>
