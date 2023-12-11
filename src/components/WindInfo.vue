<script setup>
const props = defineProps({
    windInfo: {
        type: [Object, null],
        required: true
    }
})
</script>
<template>
    <div class="highlight">
        <div class="card">
            <div class="card-title">
                Wind
            </div>
            <div class="card-pic card-pic--wind"></div>
            <div class="card-info">
                <div class="card-justify">
                    <div class="info-main">
                        <div class="info-main-num">
                            {{ windInfo?.speed }}
                        </div>
                        <div class="info-main-text">
                            m/s
                        </div>
                    </div>
                    <div class="info-main">
                        <div class="info-main-num">
                            {{ windInfo?.deg }}
                        </div>
                        <div class="info-main-text">
                            deg
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-small">
            <div class="card-small-title">
                Wind gusts
            </div>
            <div class="card-small-info">
                <div class="card-small-data">
                    <div v-if="windInfo?.gust" class="info-main-num">
                        {{ Math.round(windInfo?.gust) }}
                    </div>
                    <div v-else class="info-main-num">
                        0
                    </div>
                    <div class="info-main-text">
                        m/s
                    </div>
                </div>
                <div class="card-small-hint">
                    <div class="card-small-pic card-small-pic--wind"></div>
                    <div class="card-small-text text-egorova">
                        Learn
                        <a href="https://www.windy.com/articles/weather-phenomena-what-s-the-difference-between-sustained-winds-and-wind-gusts-10390?satellite,7.787,115.115,5"
                            target="_blank">more</a>
                        about gusts
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import '../assets/sass/main.sass';
</style>