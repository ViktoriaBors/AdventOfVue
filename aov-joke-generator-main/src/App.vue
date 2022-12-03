<template>
  <div class="w-full h-full flex flex-col justify-center items-center">
    <div class="max-w-xs w-full flex flex-col">
      <div class="mb-2 bg-teal-800 text-white p-4 rounded-lg w-3/4 self-start ">{{question}}</div>
      <div v-if="getAnswer" class="mt-2 bg-red-800 text-white p-4 rounded-lg w-3/4 self-end ">{{answer}}</div>
    </div>
    <div class="max-w-sm w-full">
    <button v-if="!getNew" @click="handelButtonTell" class="hover:opacity-80 m-2 block rounded-lg w-full bg-green text-gray-dark p-3 text-center">Tell me</button>
    <button  v-if="getAnswer" @click="handelButtonAnother" class="hover:opacity-80  m-2 block  rounded-lg w-full bg-green text-gray-dark p-3 text-center">Another</button>
    </div>
    <div v-if="error">
      Something went wrong :(
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'

fetch('https://v2.jokeapi.dev/joke/christmas')
.then(res => res.json())
.then(data => {
  console.log(data)
  if(data.error){
    error.value = true
  } else {
    question.value = data.setup
    answer.value = data.delivery
  }
})

let question = ref(null)
let answer = ref(null)
let getAnswer = ref(false)
let getNew = ref(false)
let error = ref(false)

const handelButtonTell = ()=>{
  getAnswer.value = true;
  getNew.value = true

}

const handelButtonAnother = ()=>{
  fetch('https://v2.jokeapi.dev/joke/christmas')
  .then(res => res.json())
  .then(data => {
    console.log(data)
    if(data.error){
      error.value = true
    } else {
      question.value = data.setup
      answer.value = data.delivery
    }
})
    getAnswer.value = false;
    getNew.value = false
}


// fetch('https://v2.jokeapi.dev/joke/christmas') ...
</script>
