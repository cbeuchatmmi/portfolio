<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Logo from "@/components/svg/logo.vue";

</script>

<template >
  <header class="bg-black w-screen">

    <div class="flex">
      <Logo />
      <div class="mt-8 ml-auto">
        <nav class="mb-8">
          <RouterLink to="/" class=" text-3xl text-center text-blue-600 mr-10">About</RouterLink>
          <RouterLink to="/" class=" text-3xl text-center text-blue-600 mr-10">Mes projets</RouterLink>
          <RouterLink to="/" class=" text-3xl text-center text-blue-600 mr-10">Contact</RouterLink>
          <RouterLink to="/archery" class=" text-3xl text-center text-blue-600 mr-10">Archery</RouterLink>

        </nav>
        <div class="w-full">
          <svg viewBox="0 0 724 3" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet"
            class="w-full h-auto">
            <line x1="-1.31134e-7" y1="1.5" x2="724" y2="1.49994" stroke="#0038FF" stroke-width="3"></line>
          </svg>
        </div>

      </div>
    </div>
  </header>


  <RouterView />
</template>

<style scoped></style>
