<script >
import { RouterLink, RouterView } from 'vue-router'
import Logo from "./components/svg/logo.vue";
import IconMenu from './components/svg/IconMenu.vue';

export default {
  name: "App",
  data() {
    return {
      menuOuvert: false,
    };
  },
  components: { Logo, IconMenu },
};

</script>

<template >
  <header class="bg-black w-screen">

    <nav class=" flex">
      <RouterLink to="/">
        <Logo />
      </RouterLink>
      <div class="ml-auto  hidden items-center justify-start gap-12 overflow-hidden md:flex">
        <div>
          <RouterLink to="#apropos" class=" text-3xl text-center text-blue-600 mr-10">À Propos
          </RouterLink>
          <RouterLink to="/" class=" text-3xl text-center text-blue-600 mr-10">Mes projets</RouterLink>
          <RouterLink to="/" class=" text-3xl text-center text-blue-600 mr-10">Contact</RouterLink>
          <div class="w-full">
            <svg viewBox="0 0 724 3" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet"
              class="w-full h-auto">
              <line x1="-1.31134e-7" y1="1.5" x2="724" y2="1.49994" stroke="#0038FF" stroke-width="5"></line>
            </svg>
          </div>
        </div>
      </div>
      <button class="relative z-50 text-xl md:hidden ml-auto" aria-haspopup="true" aria-controls="menu"
        :aria-expanded="menuOuvert" @click="menuOuvert = !menuOuvert">
        <IconMenu class="mr-8 h-8 w-8" />
        <span class="sr-only">Menu</span>
      </button>
    </nav>
    <div id="menu"
      class="fixed top-0 left-0 z-3 h-screen w-screen translate-x-full  bg-blue-600 motion-safe:transition-transform motion-safe:duration-100 "
      :class="{ 'translate-x-0': menuOuvert }">
      <ul v-if="menuOuvert" class="mt-12 flex flex-col gap-3 text-center text-3xl">
        <!-- Autre menu -->
        <li class="mt-8">
          <RouterLink to="/" @click="menuOuvert = !menuOuvert">About</RouterLink>
        </li>
        <li class="mt-8">
          <RouterLink to="/" @click="menuOuvert = !menuOuvert">Mes projets</RouterLink>
        </li>
        <li class="mt-8">
          <RouterLink to="/" @click="menuOuvert = !menuOuvert">Contact</RouterLink>
        </li>

      </ul>
    </div>
  </header>


  <RouterView />
</template>

<style scoped></style>
