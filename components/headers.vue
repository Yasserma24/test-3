<template>
    <header
      class="w-screen pt-[61px] px-[25px]  
      2xl:px-[200px] 
      xl:px-[100px] 
      lg:px-[80px]
      md:px-[40px]"
    >
      <div
        class="flex items-center justify-between 
        2xl:gap-[122px] 
        xl:gap-[118px]"
      >
        <!-- Logo Section -->
        <div
          class="flex items-center gap-[10px] 
          2xl:w-[279px] 2xl:h-[67px] 2xl:gap-[20px] 
          xl:gap-[18px] 
          lg:gap-[10px]"
        >
          <nuxt-img
            src="images/Subtract.png"
            class="w-[40px] h-[40px] 
            2xl:w-[67px] 2xl:h-[67px] 
            xl:w-[50px] xl:h-[50px] 
            lg:w-[40px] lg:h-[40px]
            md:w-[45px] md:h-[45px]"
          />
          <p
            id="mont_400"
            class="text-[20px] 
            2xl:text-[48px] 
            xl:text-[30px] 
            lg:text-[25px]
            md:text-[30px]"
          >
            <span id="mont_700">M</span>umair
          </p>
        </div>
  
        <!-- Desktop Menu -->
        <div
          class="hidden 2xl:flex 2xl:gap-[26px] 2xl:text-[21px] items-center xl:text-[18px] xl:flex xl:gap-[26px] lg:text-[14px] lg:flex lg:gap-[24px]"
          id="pop_400"
        >
          <a>Home</a>
          <a class="whitespace-nowrap">About Me</a>
          <a>Services</a>
          <a>Projects</a>
          <a>Testimonials</a>
          <a>Contact</a>
        </div>
  
        <!-- Download Button -->
        <button
          id="pop_400"
          class="hidden bg-[#FD6F00] text-white rounded-[5px] whitespace-nowrap 2xl:text-[21px] 2xl:w-[188px] 2xl:h-[52px] 2xl:px-[18px] 2xl:block lg:w-[140px] lg:h-[40px] lg:text-[15px] lg:px-[15px] lg:block"
        >
          Download CV
        </button>
  
        <!-- Mobile Menu Button -->
        <button
          @click="toggleMenu"
          class="bg-[#FD6F00] text-white rounded-[5px] whitespace-nowrap text-[20px] w-[80px] 
           2xl:hidden 
           xl:hidden 
           lg:hidden
           md:text-[25px] md:w-[100px]"
          id="pop_400"
        >
          Menu
        </button>
  
        <!-- Sliding Menu with Blur Effect -->
        <div
          v-if="isMenuOpen"
          class="fixed inset-0 z-50 flex backdrop-blur-[2px]"
        >
          <!-- Overlay -->
          <div
            class="absolute inset-0 bg-black opacity-50 transition-opacity duration-300"
            @click="toggleMenu"
          ></div>
  
          <!-- Menu -->
          <div
            class="fixed top-0 right-0 w-64 h-full bg-[#FD6F00] text-white flex flex-col justify-center items-center space-y-4 transition-transform duration-300 z-50 translate-x-0
            2xl:hidden
            xl:hidden
            lg:hidden"
          >
            <!-- Close Icon -->
            <button
              @click="toggleMenu"
              class="absolute top-5 right-5 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <a class="hover:underline" id="pop_400">Home</a>
            <a class="hover:underline" id="pop_400">About Me</a>
            <a class="hover:underline" id="pop_400">Services</a>
            <a class="hover:underline" id="pop_400">Projects</a>
            <a class="hover:underline" id="pop_400">Testimonials</a>
            <a class="hover:underline" id="pop_400">Contact</a>
            <button
              class="bg-white text-[#FD6F00] rounded-[5px] whitespace-nowrap w-[150px] h-[45px]"
            >
              Download CV
            </button>
          </div>
        </div>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isMenuOpen: false,
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      },
    },
  };
  </script>
  