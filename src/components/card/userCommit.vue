<template>
    <!-- <div class="container"> -->
    <swiper-slide>
        <div class="commitsCard">
            <div class="header">
                <img class="avatar" :src="avatar">
            </div>
            <div class="name">{{ name }}</div>
            <div class="position">{{ position }}</div>
            <div class="decs">{{ decs }}</div>

        </div>
    </swiper-slide>

</template>

<script setup>
import "@/assets/components/card/commitCard.css"
// import { Swiper, SwiperSlide } from "swiper/vue";
// import { defineProps } from 'vue';

const props = defineProps({
    avatar: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    decs: {
        type: String,
        required: true
    }
});
</script>