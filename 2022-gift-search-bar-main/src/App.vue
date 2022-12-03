<script setup>
import { ref, watch } from 'vue'

const searchTerm = ref('')
let products = ref([])
let isLoading= ref(false)
/*
let timeOutId

const findProducts = (searchWord) => {
  console.log(searchWord, timeOutId)
  products.value = []
  isLoading.value = true
  if(timeOutId){
    clearTimeout(timeOutId)
  }

  timeOutId = setTimeout( async ()=> {
    fetch('https://dummyjson.com/products/search?q='+searchWord+'&limit=5')
    .then(res => res.json())
    .then(data => {
      products.value = data.products        
      isLoading.value = false
    })
  }, 2000)
}
*/

const debounce = (fn, delay=2000) => {
    let timeoutId;

    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args);
        }, delay);
    };
};


const findProducts = debounce(async (searchWord) => {
  isLoading.value = true
  if(!searchWord){
    products.value = []
    isLoading.value = false
  } else {
    await fetch('https://dummyjson.com/products/search?q='+searchWord+'&limit=5')
      .then(res => res.json())
      .then(data => {
        products.value = data.products        
        isLoading.value = false
      })
  }
})

watch(searchTerm, newTerm => findProducts(newTerm))
</script>

<template>
  <div class="w-full h-full flex flex-col gap-5 justify-center items-center">
    <h1 class="text-4xl font-bold">Gift Search Bar</h1>
    <input type="text" class="p-2 border-2 border-gray-dark" v-model="searchTerm" placeholder="Start typing..." />
    <div v-if="!isLoading && products.length > 0">
    <ul class="list-disc">
      <li v-for="product in products" :key="product.id">
        {{product.title}} - {{product.price}}$
      </li>
    </ul>
    </div>
    <div v-if="isLoading && searchTerm.length">
      Please wait...
    </div>
    <div v-if="products.length == 0 && isLoading">
      No products found
    </div>
  </div>
</template>
