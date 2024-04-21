<template>
    <div class="featureContainer mt:250">
        <div class="OurFeature-badge">
            為甚麼選擇我們...
        </div>
        <br>
        <br>
        <div class="ourFeatureContainer">
            <div class="row">
                <!-- <FeatureCard data-aos="zoom-in" v-for="(data, index) in featureData" :img="data.img" :title="data.title" :decs="data.decs"></FeatureCard> -->
                <div class="col-md-3 mt-20 mb-20">
                    <div class="our-card card" style="max-width: 540px;background-color: #2c2b2b;color: #fff;">
                        <div class="row g-0">
                            <div class="col-md-4 cardImgContainer">
                                <img src="@/assets/img/icons/security.png" class="cardImg img-fluid" alt="...">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title"><b>安全</b></h5>
                                    <p class="card-text"><b>所有資料將都被封鎖在主機內部中，沒有主機使用權限的任何人皆無法訪問，且嚴格管控了能訪問主機的職員.</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 mt-20 mb-20">
                    <div class="our-card card" style="max-width: 540px;background-color: #2c2b2b;color: #fff;">
                        <div class="row g-0">
                            <div class="col-md-4 cardImgContainer">
                                <img src="@/assets/img/icons/cooperate.png" class="cardImg img-fluid" alt="...">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title"><b>合作</b></h5>
                                    <p class="card-text"><b>與多位專業人士與團隊合作共同維護託管服務，並一起研究探討新的技術，推出更多優質優惠服務.</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 mt-20 mb-20">
                    <div class="our-card card" style="max-width: 540px;background-color: #2c2b2b;color: #fff;">
                        <div class="row g-0">
                            <div class="col-md-4 cardImgContainer">
                                <img src="@/assets/img/icons/firewall.png" class="cardImg img-fluid" alt="...">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title"><b>抗攻擊</b></h5>
                                    <p class="card-text"><b>本團隊使用著商業防火牆保護著整個網路系統的所有網路流量，且限制了所有網路的出入.</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 mt-20 mb-20">
                    <div class="our-card card" style="max-width: 540px;background-color: #2c2b2b;color: #fff;">
                        <div class="row g-0">
                            <div class="col-md-4 cardImgContainer">
                                <img src="@/assets/img/icons/dollars.png" class="cardImg img-fluid" alt="...">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title"><b>便宜</b></h5>
                                    <p class="card-text"><b>本團隊經過多次決策與討論，將所有主機價格降至大多數學生皆負擔的起的數字.</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 mt-20 mb-20">
                    <div class="our-card card" style="max-width: 540px;background-color: #2c2b2b;color: #fff;">
                        <div class="row g-0">
                            <div class="col-md-4 cardImgContainer">
                                <img src="@/assets/img/icons/tool.png" class="cardImg img-fluid" alt="...">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title"><b>安全</b></h5>
                                    <p class="card-text"><b>隨時進行託管服務的維護與空間清理，讓託管能一直服務下去</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        
    </div>

    
</template>

<script setup>
import { ref } from "vue"
import "@/assets/ourFeature.css"
import { features } from "@/config/ourFeatures"
import FeatureCard from "@/components/card/ourFeature.vue"
const featureData = ref(features);
</script>