<script setup>
import { getTime } from '../utils'
import { computed } from 'vue'
const props = defineProps({
    weatherInfo: {
        type: [Object, null],
        required: true
    }
})

const sunrise = computed(() => {
    return getTime(props.weatherInfo?.sys.sunrise + props.weatherInfo?.timezone)
})

const sunset = computed(() => {
    return getTime(props.weatherInfo?.sys.sunset + props.weatherInfo?.timezone)
})

</script>
<template>
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
                        <div v-if="weatherInfo?.sys" class="state-time">
                            {{ sunrise }}
                        </div>
                        <div v-else class="state-time">
                            no data
                        </div>
                    </div>
                    <div class="state">
                        <div class="state-pic state-pic--flipped"></div>
                        <div class="state-title">
                            Sunset
                        </div>
                        <div v-if="weatherInfo?.sys" class="state-time">
                            {{ sunset }}
                        </div>
                        <div v-else class="state-time">
                            no data
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
                <div v-if="weatherInfo?.clouds.all" class="card-small-data">
                    <div class="info-main-num">
                        {{ weatherInfo?.clouds.all }}
                    </div>
                    <div class="info-main-text">
                        %
                    </div>
                </div>
                <div v-else class="card-small-data">
                    no data
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
</template>