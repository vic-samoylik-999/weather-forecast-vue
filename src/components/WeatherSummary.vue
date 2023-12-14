<script setup>
import { capitalize } from '../utils'
import { DotLoader } from "vue3-spinner"

const props = defineProps({
  weatherInfo: {
    type: [Object, null],
    required: true
  }
})

const today = new Date().toLocaleDateString("en-EN", {
  weekday: 'short',
  year: 'numeric',
  month: 'short',
  day: 'numeric',
})

</script>

<template >
  <div v-if="weatherInfo?.weather" class="summary">
    <div v-if="weatherInfo?.weather[0].description"
      :style="`background-image: url('/weather-main/${weatherInfo?.weather[0].description}.png');`" class="pic-main">
    </div>
    <div class="weather">
      <div class="temp">
        {{ Math.round(weatherInfo?.main.temp) }} °C
      </div>
      <div class="weather-desc text-block">
        {{ capitalize(weatherInfo?.weather[0].description) }}
      </div>
    </div>
    <div class="city text-block">
      {{ weatherInfo?.name }},
      {{ weatherInfo?.sys.country }}
    </div>
    <div class="date text-block">
      {{ today }}
    </div>
  </div>

  <!-- Loading when weatherInfo no loaded yet -->
  <div v-else-if="weatherInfo == null" class="summary">
    <DotLoader />
  </div>
  <!-- Handler to city which is not found -->
  <div v-else-if="weatherInfo?.cod == 404" class="summary">
    <div class="error-message">
      <p class="error-message__label">Something went wrong...</p>
      <p class="error-message__sublabel">{{ capitalize(weatherInfo?.message) }}</p>
    </div>
  </div>
  <!-- Handler to empty input -->
  <div v-else-if="weatherInfo?.cod == 400" class="summary">
    <div class="error-message">
      <p class="error-message__label">Something went wrong...</p>
      <p class="error-message__sublabel">{{ capitalize(weatherInfo?.message) }}</p>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import '../assets/sass/main.sass'
@import '../assets/sass/mixins.sass'

.summary 
  display: flex
  flex-direction: column
  align-items: center

.pic-main
  width: 60px
  height: 60px
  margin: 20px 0 12px
  background-repeat: no-repeat
  background-position: 50% 50%
  background-size: contain

.city
  font-size: 24px

.weather
  margin: 0 0 20px
  padding: 20px 0
  border-bottom: 1px solid rgba(255, 255, 255, 0.4)
  display: flex
  flex-direction: column
  align-items: center

.temp
  padding-bottom: 8px
  text-align: center
  font-size: 32px

.text-block
  position: relative
  padding-left: 24px
  padding-bottom: 8px
  font-size: 14px

  &::before
    content: ''
    position: absolute
    top: 0
    left: 0
    width: 20px
    height: 20px
    margin-right: 6px
    background-repeat: no-repeat
    background-position: 50% 50%
    background-size: contain

.weather-desc

  &::before
    background-image: url('/src/assets/img/weather.svg')

.city

  &::before
    background-image: url('/src/assets/img/location.svg')

.date

  &::before
    left: 2px
    width: 15px
    height: 15px
    background-image: url('/src/assets/img/calendar.svg')


.error-message
  display: flex
  flex-direction: column
  align-items: center
  row-gap: 10px
  padding-bottom: 16px
  &__label
    font-weight: bold
    padding: 0
    margin: 0
  &__sublabel
    font-size: 0.8rem
    padding: 0
    margin: 0
</style>