<script lang="ts">
import { defineComponent, ref } from "vue";


export default defineComponent({
  name: "HeaderView",
  setup() {
    const navIsOpen = ref(false)

    function toggleNav(event: MouseEvent): void {
      event.preventDefault()
      navIsOpen.value = !navIsOpen.value
    }

    return {
      navIsOpen,
      toggleNav
    }
  }
});


</script>

<template>
  <header class="absolute inset-x-0 top-0 py-3 z-50">
    <div class="w-full px-5 sm:px-8 md:px-12 lg:px-8 max-w-screen-lg lg:max-w-screen-xl mx-auto relative">
      <nav class="flex items-center justify-between w-full relative">
        <div class="inline-flex relative bg-inherit">
          <router-link to="/" class=" flex items-center gap-2">
            <span class="flex">
              <span class="w-3 h-6 rounded-l-full flex bg-primary"></span>
                <span class="w-3 h-6 rounded-r-full flex bg-[#f88fc2] mt-2"></span>
              </span>
            <span class="text-lg text-gray-700 dark:text-white">Stream</span>
          </router-link>
        </div>
        <div class="absolute top-full px-5 sm:px-8 md:px-12 lg:px-0 lg:pt-0 lg:top-0 invisible opacity-40 lg:opacity-100 bg-body rounded-xl border border-box-border shadow-lg shadow-box-shadow lg:border-none lg:shadow-none lg:rounded-none lg:bg-transparent w-full lg:w-max py-6 lg:py-0 lg:visible lg:relative flex transition-all duration-300 ease-linear origin-top translate-y-6 lg:translate-y-0" :class="navIsOpen?'!visible !opacity-100 !translate-y-0':''">
          <ul class="text-gray-700 dark:text-gray-100 w-full flex lg:items-center gap-y-4 lg:gap-x-8 flex-col lg:flex-row">
            <li class="lg:inline-flex">
              <router-link to="/" class="lg:inline-flex transition hover:text-primary ease-linear text-lg">Home</router-link>
            </li>
            <li class="lg:inline-flex">
              <router-link to="/listing" class="lg:inline-flex transition hover:text-primary ease-linear text-lg">Listing</router-link>
            </li>
            <li class="lg:inline-flex">
              <router-link to="/favorites" class="lg:inline-flex transition hover:text-primary ease-linear text-lg">Favorites</router-link>
            </li>
          </ul>
        </div>
        <div class="flex items-center bg-inherit gap-1 lg:gap-3 min-w-max">
          <div class="relative py-2">
            <button class="outline-none bg-transparent p-2.5 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
              <span>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5" width="20" height="20"><path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"></path></svg>
                </span>
              </span>
            </button>
          </div>
          <div class="flex lg:hidden border-l border-box-border pl-2">
            <button @click="toggleNav" class="outline-none w-7 h-auto flex flex-col relative">
              <span
                class="w-6 h-0.5 rounded-full bg-gray-500 dark:bg-gray-200 transition-all duration-300 ease-linear"
                :class="navIsOpen ? 'translate-y-1.5 rotate-[40deg] scale-x-100 ' : ' scale-x-50 origin-left'">
              </span>
              <span
                class="w-6 origin-center  mt-1 h-0.5 rounded-full bg-gray-500 dark:bg-gray-200 transition-all duration-300 ease-linear"
                :class="navIsOpen ? 'scale-x-0 opacity-0' : ''">
              </span>
              <span
                class="w-6 mt-1 h-0.5 rounded-full bg-gray-500 dark:bg-gray-200 transition-all duration-300 ease-linear"
                :class="navIsOpen ? '-translate-y-1.5 -rotate-[40deg] scale-x-100 ' : ' scale-x-75 origin-left'">
              </span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>
