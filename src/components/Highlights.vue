<script setup>
import WindInfo from './WindInfo.vue'
const props = defineProps({
  weatherInfo: {
    type: [Array, null],
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
      <div class="highlight">
        <div class="card">
          <div class="card-title">
            Pressure
          </div>
          <div class="card-pic card-pic--pressure"></div>
          <div class="card-info">
            <div class="card-centered">
              <div class="info-main">
                <div class="info-main-num">
                  765
                </div>
                <div class="info-main-text">
                  mm
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-small">
          <div class="card-small-title">
            Feels like
          </div>
          <div class="card-small-info">
            <div class="card-small-data">
              <div class="info-main-num">
                21
              </div>
              <div class="info-main-text">
                °C
              </div>
            </div>
            <div class="card-small-hint">
              <div class="card-small-pic card-small-pic--margin card-small-pic--pressure">
              </div>
              <div class="card-small-text">
                How hot or cold it really feels
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="highlight">
        <div class="card">
          <div class="card-title">
            Sunrise and sunset
          </div>
          <div class="card-pic card-pic--sun"></div>
          <div class="card-info">
            <div class="states">
              <div class="state">
                <div class="state-pic"></div>
                <div class="state-title">
                  Sunrise
                </div>
                <div class="state-time">
                  07:31:42
                </div>
              </div>
              <div class="state">
                <div class="state-pic state-pic--flipped"></div>
                <div class="state-title">
                  Sunset
                </div>
                <div class="state-time">
                  18:34:19
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-small">
          <div class="card-small-title">
            Cloudiness
          </div>
          <div class="card-small-info">
            <div class="card-small-data">
              <div class="info-main-num">
                80
              </div>
              <div class="info-main-text">
                %
              </div>
            </div>
            <div class="card-small-hint">
              <div class="card-small-pic card-small-pic--sun"></div>
              <div class="card-small-text">
                The sky fraction obscured by clouds
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import '../assets/sass/main.sass'

.highlights
  padding: 28px 16px 16px
  background: url('/src/assets/img/gradient-4.jpg') no-repeat 0% 0%
  background-size: cover
  border-radius: 25px

  &-wrapper
    display: flex
    justify-content: space-between

    @media (max-width: 575px)
      flex-direction: column

.title
  padding-bottom: 16px

</style>