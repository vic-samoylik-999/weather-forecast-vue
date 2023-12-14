<script setup>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";
const props = defineProps({
    coordinats: {
        type: [Object, null],
        required: true
    }
})
</script>

<template>
    <div style="width: 100%; height: 100%;">
        <l-map style="border-radius: 25px;" ref="map" :zoom="10" :center="[props.coordinats?.lat, props.coordinats?.lon]">
            <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" layer-type="base"
                name="OpenStreetMap"></l-tile-layer>
        </l-map>
    </div>
</template>