<script setup>
import WindInfo from './WindInfo.vue'
import PressureInfo from './PressureInfo.vue';
import CloudnessAndSunrise from './CloudnessAndSunrise.vue';
const props = defineProps({
  weatherInfo: {
    type: [Object, null],
    required: true
  }
})
</script>

<template>
  <div class="section highlights">
    <div class="title">
      Today's Highlights
    </div>
    <div class="highlights-wrapper">
      <WindInfo :windInfo="weatherInfo?.wind" />
      <PressureInfo :pressureInfo="weatherInfo?.main" />
      <CloudnessAndSunrise :weatherInfo="weatherInfo" />
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import '../assets/sass/main.sass'
@import '../assets/sass/mixins.sass'

.highlights
  padding: 28px 16px 16px
  border-radius: 25px
  @include card-glass

  &-wrapper
    display: flex
    justify-content: space-between

    @media (max-width: 575px)
      flex-direction: column

.title
  padding-bottom: 16px

</style>