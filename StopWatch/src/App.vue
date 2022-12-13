<template>
  <div class="wrapper">
    <div class="ring">
      <svg width="518" height="518" viewBox="0 0 518 518">
        <circle stroke-width="9px" x="0" y="y" cx="259" cy="259" r="254" />
      </svg>
    </div>

    <div class="timer">
      <div class="time">
        <div class="minutes">
          <input ref="input1" type="text" v-model="minutes" disabled />
        </div>
        <div class="colon">:</div>
        <div class="seconds">
          <input ref="input2"  type="text" v-model="seconds" disabled />
        </div>
      </div>
      <button v-if="btn" class="start" @click="startTimer">start</button>
      <button v-if="!btn" class="start" @click="stopTimer">stop</button>
      <button class="settings" @click="enableInput">
        <img src="images/gear.svg" alt="Settings" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue"

let minutes = ref(15)
let seconds = ref(0)

let start

let btn = ref(true)

const startTimer = () => {
  if(!start){
    btn.value = !btn.value
    start = setInterval (()=>{
    if(seconds.value == 0){
      seconds.value = 60 - 1
      minutes.value = minutes.value - 1
    } else {
      seconds.value = seconds.value - 1
    }
     if (minutes.value == 0 && seconds.value == 0) {
    clearInterval(start);
  }
  }, 1000)
  }
}

const stopTimer = () => {
  console.log("stop")
  clearInterval(start)
  btn.value = !btn.value
  start = null
}

let input1 = ref(null)
let input2 = ref(null)
const enableInput = () => {
  if(input1.value.disabled && input2.value.disabled){
    input1.value.disabled = false
    input2.value.disabled = false
    } else {
       input1.value.disabled = true
       input2.value.disabled = true
    }
    
}

</script>

<style>

</style>
