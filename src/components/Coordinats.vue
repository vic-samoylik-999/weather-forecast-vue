<script setup>
const props = defineProps({
    coordinats: {
        type: [Object, null],
        required: true
    }
})
</script>

<template>
    <div class="block-bottom">
        <div class="block-bottom-inner">
            <div class="block-bottom-pic pic-coords"></div>
            <div class="block-bottom-texts">
                <div class="block-bottom-text-block">
                    <div v-if="coordinats?.lon" class="block-bottom-text-block-title">
                        Longitude: {{ coordinats?.lon }}
                    </div>
                    <div v-else class="block-bottom-text-block-title">
                        Longitude: no data
                    </div>
                    <div class="block-bottom-text-block-desc">
                        Longitude measures distance east or west of the prime meridian.
                    </div>
                </div>
                <div class="block-bottom-text-block">
                    <div v-if="coordinats?.lat" class="block-bottom-text-block-title">
                        Latitude: {{ coordinats?.lat }}
                    </div>
                    <div v-else class="block-bottom-text-block-title">
                        Latitude: no data
                    </div>
                    <div class="block-bottom-text-block-desc">
                        Latitude lines start at the equator (0 degrees latitude) and run east and
                        west, parallel to the equator.
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>