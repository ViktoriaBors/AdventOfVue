<template>
  <main class="flex flex-col justify-center h-full mx-auto max-w-600px">
    <section class="flex flex-col items-center leading-loose text-center">
      <div class="text-3xl">
        <span class="i-twemoji-christmas-tree"></span>
        {{ t('happyHolidays')}}
        <span class="i-twemoji-world-map"></span>
      </div>
      <i18n-t keypath="christmasIsComing" path="span" >
        <template #time>
          <span class="font-medium text-green-600">
            {{ t('day', days) }}
          </span>
        </template>
        <template #date>
          {{ d(christmasDate, 'long') }}
        </template>
      </i18n-t>
       <div class="flex items-center justify-between w-200px">
        <!-- list.next() allows us to cycle through the languages -->
        <button class="icon-button" @click="list.next()">
          <span class="i-carbon-language" />
        </button>
<div>
          <span :class="flags[locale]" />
          {{ t('language') }}
        </div>
      </div>
      <!-- Dates - Check out locales/en.json for the key -->
      <!-- Controls - I give you an .icon-button class if you want to use it -->
      <!-- Flags - the current locale -->
    </section>
  </main>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { computed, watch } from 'vue'
import { useCycleList } from '@vueuse/core'

const { t, d, locale, availableLocales } = useI18n()

const list = useCycleList(availableLocales)
watch(list.state, state => (locale.value = state))
const christmasDate = new Date('2022/12/25')
// This doesn't poll.
// One of the improvements you could make is to have this poll.
const days = computed(() => {
  const delta = christmasDate.getTime() - new Date()
  return Math.ceil(delta / (1000 * 60 * 60 * 24))
})

const flags = {
  en: 'i-twemoji-flag-united-states',
  de: 'i-twemoji-flag-germany',
  'ja-JP': 'i-twemoji-flag-japan',
  hu: 'i-twemoji-flag-hungary',
  dk: 'i-twemoji-flag-denmark',
  est: 'i-twemoji-flag-estonia'
}
</script>

<style scoped>
.icon-button {
  @apply text-xl
    w-32px
    h-32px
    rounded-full
    border-1
    border-transparent
    bg-transparent
    cursor-pointer
    duration-300
    hover:ring-2
    hover:border-green-500
    hover:ring-green-500
    hover:ring-opacity-40
    hover:text-green-600;
}
</style>
