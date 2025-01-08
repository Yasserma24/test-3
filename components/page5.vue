<template>
  <div class="w-screen mt-[20px]
  2xl:mt-[139px]
  xl:mt-[130px]
  lg:mt-[100px]
  md:mt-[80px]
  sm:mt-[60px]">
    <p id="pop_600" class="text-[33px] text-center
    2xl:text-[65px]
    xl:text-[60px]
    lg:text-[50px]
    md:text-[50px]
    sm:text-[35px]">Testimonials</p>
    <p id="pop_400" class="text-[12px] text-center mt-[15px]
    2xl:text-[21px] 2xl:mt-[15px]
    xl:text-[16px] xl:mt-[14px]
    lg:text-[16px] lg:mt-[14px]
    md:text-[16px] md:mt-[12px]
    sm:text-[14px] sm:mt-[10px]">Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus<br> netus in. Aliquet donec morbi convallis pretium</p>
    <div class="w-full h-[400px] flex-col justify-between gap-2 items-center mt-[72px]">
      <swiper
        :slides-per-view="1.5"
        :centered-slides="true"
        :space-between="-200"
        @slideChange="onSlideChange"
        @init="onInit"
        class="my-swiper w-full"
        pagination
      >
        <swiper-slide
          v-for="(slide, index) in slides"
          :key="index"
          :class="{ 'scale-105 filter-none': index === activeIndex, 'filter blur opacity-50 scale-95': index !== activeIndex }"
          class="w-screen swiper-slide-gap"
        >
          <div class="flex  justify-center flex-col w-[200px] max-w-[1087px] h-[400px] bg-[#F8F8F8] text-white rounded-lg shadow-lg pl-[0px] px-[33px]
          2xl:h-[344px] 2xl:pl-[48px] 2xl:px-[54px] 2xl:w-full
          xl:h-[344px] xl:pl-[44px] xl:px-[51px] xl:w-full
          lg:h-[370px] lg:pl-[40px] lg:px-[48px] lg:w-full
          md:h-[400px] md:pl-[38px] md:px-[46px] md:w-[500px]
          sm:h-[400px] sm:pl-[80px] sm:px-[28px] sm:w-[500px]">
            <div class="flex  flex-col items-center gap-[0px]
             2xl:flex-row 2xl:gap-[30px]
             xl:flex-row xl:gap-[30px]
             lg:flex-row lg:gap-[25px]
             md:flex-col md:gap-[10px]
             sm:flex-col sm:gap-[0]">
            <nuxt-img :src="slide.img" alt="Slide Image" class="h-[70px] w-[70px] object-cover rounded-full mb-[0px]
            2xl:h-[235px] 2xl:w-[235px] 2xl:mb-[15px]
            xl:h-[220px] xl:w-[220px] xl:mb-[14px]
            lg:h-[200px] lg:w-[200px] lg:mb-[12px]
            md:h-[150px] md:w-[150px] md:mb-[8px]
            sm:h-[100px] sm:w-[100px] sm:mb-[3px]" />
            <div class="flex flex-col w-[100px] gap-[0]
            2xl:w-[600px] 2xl:flex 2xl:flex-col
            xl:w-[500px] xl:flex xl:flex-col 
            lg:w-[280px] lg:flex lg:flex-col
            md:w-[400px] md:flex md:flex-col
            sm:w-[500px] sm:flex sm:flex-col">
            <p class="text-[7px] text-[#424242]
            2xl:text-[21px]
            xl:text-[21px]
            lg:text-[18px]
            md:text-[16px]
            sm:text-[15px]" id="pop_400"><span class="text-[#FD6F00] text-[32px]" id="pop_700">“</span> {{ slide.title }}<span class="text-[32px] text-[#FD6F00]" id="pop_700"> “</span></p>
            <p class="text-[14px] text-[#000000]
            2xl:text-[24px]
            xl:text-[24px]
            lg:text-[22px]
            md:text-[20px]
            sm:text-[18px]" id="pop_500">{{ slide.description }}</p>
            <p class="text-[12px] text-black
            2xl:text-[19px]
            xl:text-[18px]
            lg:text-[17px]
            md:text-[15px]
            sm:text-[13px]
            ">{{ slide.name }}</p>
            </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>

      <!-- Custom Bullets positioned below the swiper -->
      <div class="flex justify-center gap-2 mt-[87px]">
        <span
          v-for="(slide, index) in slides"
          :key="index"
          :class="{ 'bg-[#fd6f00] scale-110': index === activeIndex }"
          class="w-[57px] h-[10px] bg-[#ccc] rounded-[5px] transition-all"
        ></span>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      slides: [
        {
          img: "images/Ellipse 10.png", // Replace with your image source
          title: 'Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices. ', 
          description: "Name",
          name:"CEO",
        },
        {
          img: "images/Ellipse 11.png", // Replace with your image source
          title: "asdlkasdjaslkdjaslkdjaslkjdlaskjd",
          description: "Name",
          name:"CEO",
        },
        {
          img: "https://via.placeholder.com/100", // Replace with your image source
          title: "Slide 3",
          description: "This is the description for Slide 3",
          name:"",
        },
        {
          img: "https://via.placeholder.com/100", // Replace with your image source
          title: "Slide 4",
          description: "This is the description for Slide 4",
          name:"",
        },
      ],
      activeIndex: 0, // Index of the currently active slide
    };
  },
  methods: {
    onSlideChange(swiper) {
      // Update the active index when slide changes
      this.activeIndex = swiper.realIndex;
    },
    onInit(swiper) {
      // Initialize active index on component mount
      this.activeIndex = swiper.realIndex;
    },
  },
};
</script>

<style scoped>
/* Add custom margin to each slide for gap */
.swiper-slide-gap {
  margin-left: 0px; /* Adjust this value for desired gap */
  margin-right: 400px; /* Adjust this value for desired gap */
}
</style>
