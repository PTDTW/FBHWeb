<template>
    <main class="">
        <div class="Hero">
            <h1 class="introducetext" data-aos="zoom-in" data-aos-delay="100"><b>夢想之道，<a href="https://discord.gg/gPqWEDsW95" class="routerLink" target="_blank"><span
                        class="teamText">FlyBirdHost</span></a>陪你完成</b></h1>
            <div class="f-slonger" data-aos="zoom-in" data-aos-delay="300">你的託管最佳選擇</div>
            <br />
            <div class="content-wrapper" data-aos="zoom-in" data-aos-delay="600" style="
">
                <a href="https://store.flybirdhost.net/" class="routerLink" target="_blank">
                    <button class="goBuyButton button-wrapper">
                        <FIcon iconName="cart-shopping" />&nbsp前往購買
                    </button>
                </a>
                <!-- &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp; -->
                <a href="https://dash.flybirdhost.net" class="routerLink" target="_blank">
                    <button class="goUseButton button-wrapper">
                        <FIcon iconName="server" />&nbsp開始使用
                    </button>
                </a>
            </div>
            <!-- <a class="joinSupport">加入支援群組</a> -->
        </div>
    </main>
</template>
  
<script setup>
import { RouterLink, RouterView } from 'vue-router'

import "@/assets/Hero.css"
import FIcon from "@/components/icon/font-awesome/FIcon.vue"
</script>

<style scoped>

</style>
