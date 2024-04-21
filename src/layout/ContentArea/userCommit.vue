<!-- <template>
    <div class="mt:40 commit-badge">
       聽聽他們怎麼說...
    </div>
    <br>
    <br> -->
    <!-- <Carousel :autoplay="4000" :wrap-around="true">
      <Slide v-for="slide in 4" :key="slide">
        <div class="carousel__item">{{ slide }}</div>
        <UserCommit v-for="(commit, index) in commitData" 
        :key="index" 
        :avatar=commit.avatar 
        :name=commit.name 
        :position=commit.position 
        :decs=commit.decs 
            />

      </Slide>
  
      <template #addons>
        <Navigation />
      </template>
    </Carousel> -->
<!-- </template> -->
<!-- <script setup>
import UserCommit from "@/components/card/userCommit.vue"
import { commits } from "@/config/userCommits"
import { ref } from "vue"
const commitData = ref(commits)


import { Carousel, Navigation, Slide } from 'vue3-carousel'
  import 'vue3-carousel/dist/carousel.css'
  
  const settings = {
    itemsToShow: 2,
    snapAlign: 'center',
  };
  
  const breakpoints = {
    700: {
      itemsToShow: 3,
      snapAlign: 'center',
    },
    1024: {
      itemsToShow: 2,
      snapAlign: 'start',
    },
  };
</script> -->
<template>
  <swiper
    :loop="true"
    :navigation="true"
    :modules="modules"
    :pagination="{ clickable: true }"
    :slides-per-view="2"
    :autoplay="{ delay: 2500, disableOnInteraction: false }"
    :space-between="30"
    @slideChange="onSlideChange"
    class="mySwiper"
  >
  <swiper-slide v-for="(commit, index) in commitData">
        <div class="commitsCard">
            <div class="header">
                <img class="avatar" :src="commit.avatar">
            </div>
            <div class="name">{{ commit.name }}</div>
            <div class="position">{{ commit.position }}</div>
            <div class="decs">{{ commit.decs }}</div>

        </div>
    </swiper-slide>
  </swiper>

</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const onSlideChange = (swiper) => {
  console.log("slide change", swiper.activeIndex);
};

const modules = [Autoplay, Navigation, Pagination];


import "@/assets/components/card/commitCard.css"
import { commits } from "@/config/userCommits"
import { ref } from "vue"
const commitData = ref(commits)

</script>
