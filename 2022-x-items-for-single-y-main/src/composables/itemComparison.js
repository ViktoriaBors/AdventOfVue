import {ref} from 'vue'
const products = ref([])
let itemsComparison = ref([])

export const useItemComparison = () => {
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => {
        products.value = data.products
    })
    return {products, itemsComparison}
}
