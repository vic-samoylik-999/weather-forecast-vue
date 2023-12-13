<script setup>
import { convertPressure } from '@/utils';
const props = defineProps({
    pressureInfo: {
        type: [Object, null],
        required: true
    }
})
</script>

<template>
    <div class="highlight">
        <div class="card">
            <div class="card-title">
                Pressure
            </div>
            <div class="card-pic card-pic--pressure"></div>
            <div class="card-info">
                <div class="card-centered">
                    <div v-if="pressureInfo?.pressure" class="info-main">
                        <div class="info-main-num">
                            {{ convertPressure(pressureInfo?.pressure) }}
                        </div>
                        <div class="info-main-text">
                            mm
                        </div>
                    </div>
                    <div v-else class="info-main">
                        no data
                    </div>
                </div>
            </div>
        </div>
        <div class="card-small">
            <div class="card-small-title">
                Feels like
            </div>
            <div class="card-small-info">
                <div v-if="pressureInfo?.feels_like" class="card-small-data">
                    <div class="info-main-num">
                        {{ Math.round(pressureInfo?.feels_like) }}
                    </div>
                    <div class="info-main-text">
                        °C
                    </div>
                </div>
                <div v-else class="card-small-data">
                    no data
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
</template>

<style scoped>
@import '../assets/sass/main.sass';
</style>