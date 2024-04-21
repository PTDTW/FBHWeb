<template>
  <Navbar/>
  <RouterView />
  <Footer />

</template>
<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from "@/layout/NavigationBar.vue"
import Footer from "@/layout/footer.vue"

// window.addEventListener('scroll', handleScroll);

// function handleScroll(event) {
//   // Get the scroll position in pixels
//   const scrollY = window.scrollY;
  
//   // Check if the scroll position is greater than or equal to 10px
//   if (scrollY >= 10) {
//     // Perform your action here, for example, adding a CSS class to an element
//     document.querySelector('.flybird_navbar').classList.add('sticky-top');
//   } else {
//     // Perform your action when the scroll position is less than 10px
//     document.querySelector('.flybird_navbar').classList.remove('sticky-top');
//   }
// }
</script>