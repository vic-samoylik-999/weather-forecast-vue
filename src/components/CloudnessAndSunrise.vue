<script setup>
const props = defineProps({
    clouds: {
        type: Number,
        required: true
    }
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
                <div v-if="clouds" class="card-small-data">
                    <div class="info-main-num">
                        {{ clouds?.all }}
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