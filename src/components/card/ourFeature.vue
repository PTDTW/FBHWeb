<template>
    <div class="col-md-3 mt-20 mb-20">
        <div class="our-card card" style="max-width: 540px;background-color: #2c2b2b;color: #fff;">
            <div class="row g-0">
                <div class="col-md-4 cardImgContainer">
                    <img :src="imgSrc" class="cardImg img-fluid" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title"><b>{{ title }}</b></h5>
                        <p class="card-text"><b>{{ decs }}</b></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import "@/assets/components/card/ourFeatureCard.css"
const props = defineProps({
    img: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    decs: {
        type: String,
        required: true
    },
});

// Import all images in the directory dynamically
const importImages = async () => {
    const images = {};
    for (const path of imagePaths) {
        const module = await import(path);
        images[path] = module.default;
    }
    return images;
};

// Call the function to import images
const imageImports = importImages();

// Get the image dynamically based on the prop value
const imgSrc = imageImports[`@/assets/img/icons/${props.img}`];
</script>