<template>
  <div class="w-full h-screen">
    <header class="w-full h-[21px] items-center flex gap-[262.2px] mr-[18.56px]
      lg:gap-[128px] lg:w-[1160.136px] lg:h-[49px]
      xl:gap-[142px] xl:w-[1,289.04px] xl:h-[54px] xl:mr-[100.96px]">
      <div class="flex gap-[7.76px] items-center mr-[113.6px] xl:mr-[142px] sm:mr-[60px]">
        <nuxt-img src="icons/Logo.png" class="w-[18.29px] h-[16.01px] sm:w-[20px] sm:h-[18px] md:w-[22px] md:h-[20px] lg:w-[27.43px] lg:h-[24.01px] xl:w-[47.07px] xl:h-[41.19px]" />
        <p class="text-[11.66px] sm:text-[12.5px] md:text-[13.99px] lg:text-[16.324px] xl:text-[30px]" id="page_name">Mindfulify</p>
      </div>
      <div class="hidden items-center lg:flex xl:flex sm:hidden" id="nav_part">
        <nav class="flex gap-[27px] text-[16.324px] sm:text-[18px] xl:text-[30px] xl:gap-[30px]">
          <a href="#home">Home</a>
          <a href="#About us" class="whitespace-nowrap">About Us</a>
          <a href="#products">Products</a>
          <a href="#pricing">Pricing</a>
        </nav>
      </div>
      <button @click="toggleDrawer" class="ml-auto text-[11.66px] sm:text-[13px] pr-[13.6px] pl-[13.6px] pt-[3.5px] pb-[3.5px] mr-[18.56px] bg-[#FAC97A] rounded-[3.5px] md:text-[13.99px] md:pr-[22px] lg:hidden xl:hidden" id="nav_part">Menu</button>
      <button class=" hidden bg-[#FAC97A] rounded-[9px] pt-[9px] pl-[23px] pr-[23px] pb-[9px] lg:flex lg:items-center lg:gap-[7px] lg:ml-[113.6px] lg:text-[16.324px] xl:flex xl:ml-[142px] xl:text-[30px] xl:items-center xl:gap-[8px] xl:mr-[100.96px] xl:w-[217px] xl:h-[54px]" id="nav_part">Download <nuxt-img src="icons/Group 4.png" class="w-[16px] h-[16px] xl:w-[18px] xl:h-[18px]" /></button>
    </header>

    <div v-if="drawerVisible" class="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden xl:hidden" @click="closeDrawer">
      <!-- Drawer with partial width on small screens -->
      <div class="fixed top-0 right-0 h-full w-[60vw] sm:w-[80vw] md:w-[250px] bg-[#FAC97A] shadow-lg transform transition-transform duration-300" :class="{'translate-x-0': drawerVisible, 'translate-x-full': !drawerVisible}" @click.stop>
        <nav class="flex flex-col items-start p-6" id="nav_part">
          <a href="#home" class="text-xl sm:text-[18px] mb-4">Home</a>
          <a href="#About us" class="text-xl sm:text-[18px] mb-4">About Us</a>
          <a href="#products" class="text-xl sm:text-[18px] mb-4">Products</a>
          <a href="#pricing" class="text-xl sm:text-[18px]">Pricing</a>
        </nav>
      </div>
    </div>
    
    <div class="flex items-center justify-center w-[356.16px] h-[76px] ml-auto mr-auto mt-[22px]
     sm:w-[400px] sm:h-[80px] sm:mt-[22px] 
     md:w-[800px] md:h-[100px] md:mt-[41px]
     lg:w-[1050px] lg:h-[130px] lg:mt-[60px] 
     xl:w-[1311.81px] xl:h-[280px] xl:mt-[60px] ">
      <p class="text-[30.1px] text-center ml-auto mr-auto whitespace-nowrap
       sm:text-[34px] sm:text-center
       md:text-[40px] md:text-center
       lg:text-center lg:text-[86.6px]
       xl:text-[110.88px] xl:text-center " id="embrace">Embrace mindfulness,<br>one click at a time.</p>
    </div>
    <div class="w-full flex justify-center mt-[9.8px] 
    sm:mt-[12px]
    md:mt-[15px]
    lg:mt-[80px]
    xl:mt-[36px] ">
      <p class="whitespace-nowrap text-center text-[13.55px] mr-auto ml-auto
      sm:text-[15px]
      md:text-[20px]
      lg:text-[30px]
      xl:text-[49.91px]" id="sub_400">Your digital landscape where<br>mindfulness and well-being meet.</p>
    </div>
    
    <div class="mt-[23.2px] flex w-[100%] relative">
      <nuxt-img src="images/Clip path group.png" placeholder="blur" class="w-[241.09px] h-[225px] mr-auto ml-auto
      sm:w-[250.55px] sm-h-[200.5px]
      md:w-[400.65px] md:h-[350px]
      lg:w-[650.87px] lg:h-[600px]
      xl:w-[733px] xl:h-[684.08px]" />
      <div class="w-[109px] h-[53.4px] bg-[#FAC97A] rounded-[10.46px] absolute left-[67%] top-[6%] border border-black pt-[7.71px] pl-[9.91px] pb-[7.71px] flex flex-col gap-[4.95px]
      sm:w-[180px] sm:h-[60px] sm:left-[61%] sm:pb-[10px]
      md:w-[200px] md:h-[80px] md:left-[63%]
      lg:w-[300px] lg:h-[150px] lg:rounded-[30px] lg:pt-[21px] lg:pr-[30px] lg:pl-[30px] lg:pb-[21px] lg:gap-[15px]
      xl:w-[377.63px] xl:h-[185px] xl:rounded-[36.24px] xl:pt-[26.7px] xl:pr-[34.33px] xl:pl-[34.33px] xl:pb-[26.7px] xl:gap-[17.16px] ">
        <p class="text-[6.64px]
        sm:text-[8px]
        md:text-[11px]
        lg:text-[15px]
        xl:text-[23px]" id="specialize"><span>✓</span> 5000 + satisfied users</p>
        <p class="text-[6.64px]
         sm:text-[8px]
        md:text-[11px]
        lg:text-[15px]
        xl:text-[23px]" id="specialize"><span>✓</span> 700+ licensed therapists</p>
        <p class="text-[6.64px]
         sm:text-[8px]
        md:text-[11px]
        lg:text-[15px]
        xl:text-[23px] whitespace-nowrap" id="specialize"><span>✓</span> 11,000  counselling sessions</p>
      </div>
      <div class="w-[127px] h-[43.81px] bg-[#FAC97A] rounded-[11.76px] absolute left-[10%] top-[75%] border border-black pt-[8.66px] pl-[11.14px] pr-[11.14px] pb-[8.66px] flex flex-col gap-[5.57px]
      sm:w-[160px] sm:h-[60px] sm:left-[11%] sm:top-[70%]
      md:w-[200px] md:h-[60px] md:left-[16%]
      lg:w-[320px] lg:h-[110px] lg:rounded-[30px] lg:left-[6.5%]
      xl:w-[391.36px] xl:h-[134.99px] xl:rounded-[36.24px] xl:left-[7%] xl:gap-[17.17px] xl:pt-[26.7px] xl:pb-[26.7px] xl:pr-[34.33px] xl:pl-[34.33px]">
        <p class="text-[7.46px]
        sm:text-[10px] sm:whitespace-nowrap
        md:text-[12px]
        lg:text-[20px]
        xl:text-[23px]" id="specialize"><span>✓</span> 90% Client Satisfaction Rate</p>
        <p class="text-[7.46px]
        sm:text-[10px] sm:whitespace-nowrap
        md:text-[12px]
        lg:text-[20px]
        xl:text-[23px]" id="specialize"><span>✓</span> 30% Well-Being Increase</p>
      </div>
    </div>
    <div class="mt-[37.19px] w-[355px] h-[184.69px] bg-black rounded-[13.81px] mr-auto ml-auto flex  items-center relative
    sm:mt-[60px] sm:w-[500px] sm:h-[200px] sm:rounded-[30px]
    md:mt-[80px] md:w-[625px] md:h-[300px] md:rounded-[40px]
    lg:mt-[100px] lg:w-[1050px] lg:h-[600px] lg:rounded-[45px]
    xl:mt-[126.92px] xl:w-[1234px] xl:h-[642px] xl:rounded-[48px] ">
      <p class="text-[#C2C2C2] text-[50.12px] mr-auto ml-auto flex items-center
      sm:text-[40px]
      md:text-[50px]
      lg:text-[150px]
      xl:text-[174.23px]" id="embrace">Our Story <nuxt-img src="images/Clip path group (1).png" class="w-[33.22px] h-[43.82px]
      md:w-[50px] md:h-[80]
      lg:w-[100px] lg:h-[130px]
      xl:w-[115.48px] xl:h-[152.31px] " /></p>
      <nuxt-img src="images/Group 7.png" class="w-[47.83px] h-[47.83px] absolute left-[44%]
      sm:w-[50px] sm:h-[50px]
      md:w-[70px] md:h-[70px]
      lg:w-[140px] lg:h-[140px]
      xl:w-[166.25px] xl:h-[166.25px]" />
    </div>
    <p class="mt-[21.31px] mr-auto ml-auto text-center text-[25px]
    sm:text-[30px] sm:mt-[30px]
    md:text-[40px] md:mt-[35px]
    lg:text-[50px] lg:mt-[55px]
    xl:text-[60px] xl:mt-[71px]" id="specialize">We Specialize In</p>
    <nuxt-img src="images/Group 9096.png" class="mr-auto ml-auto w-[347.24px] h-[322px] mt-[17px]
    sm:w-[400px] sm:h-[400px] sm:mt-[18px]
    md:w-[600px] md:h-[600px] md:mt-[20px]
    lg:w-[900px] lg:h-[900px] lg:mt-[25px]
    xl:w-[1059.27px] xl:h-[1053.27px] xl:mt-[29px] " />
    <p class="text-[15px] text-center mt-[18px]
    sm:text-[20px] sm:mt-[19px]
    md:text-[25px] md:mt-[20px]
    lg:text-[30px] lg:mt-[35px]
    xl:text-[34.82px] xl:mt-[41.73px]" id="specialize">And much more...</p>
    <p class="text-center text-[25px] mt-[40px]
    sm:text-[30px] sm:mt-[45px]
    md:text-[35px] md:mt-[55px]
    lg:text-[40px] lg:mt-[58px]
    xl:text-[60px] xl:mt-[50px]" id="specialize">Our Network of <span id="out_900">700+</span> <br> licensed therapists</p>


    <div class="w-[355px] h-[252.67px] flex items-center mr-auto ml-auto mt-[18px]
    sm:w-[] sm:h-[] sm:mt-[]
    md:w-[] md:h-[] md:mt-[]
    lg:w-[] lg:h-[] lg:mt-[]
    xl:w-[1,292px] xl:h-[598px] xl:mt-[82px] ">
    <!-- Swiper -->
    <swiper
      :modules="[Pagination]"
      :slidesPerView="slidesPerView"
      :spaceBetween="spaceBetween"
      :pagination="{
        type: 'fraction',
        clickable: true
      }"
      class="mySwiper xl:w-[1,292px] xl:h-[598px] xl:mt-[82px]"
    >
      <swiper-slide v-for="(item, index) in slidesData" :key="index">
        <div class="flex flex-col gap-[10px] bg-black rounded-[16.66px] pt-[13.75px] pl-[15.83px] pb-[13.75px]
        sm:rounded-[] sm:pt-[] sm:pl-[] sm:pb-[]
        md:rounded-[] md:pt-[] md:pl-[] md:pb-[]
        lg:rounded-[] lg:pt-[] lg:pl-[] lg:pb-[]
        xl:rounded-[39.99px] xl:pt-[33px] xl:pl-[38px] xl:pb-[33px] xl:w-[392px] xl:h-[578px] xl:gap-[24px]">
          <nuxt-img :src="item.image" alt="Image" placeholer="blur" class="w-[131.67px] h-[118.75px] rounded-[8.57px]
          sm:w-[] sm:h-[] sm:rounded-[]
          md:w-[] md:h-[] md:rounded-[]
          lg:w-[] lg:h-[] lg:rounded-[]
          xl:w-[316px] xl:h-[285px] xl:rounded-[20.56px]" />
          <p class="text-white text-[8.33px]" id="out_400"><span id="specialize">{{ item.text }}</span> <br> {{item.texts }}</p>
          <p class="text-[#B1B1B1] text-[8.33px]">{{ item.info }} <br> {{ item.infos }}</p>
          <p class="text-[#B1B1B1] text-[8.33px]">{{ item.more }} <br> {{ item.mores }}</p>
        </div>
      </swiper-slide>

      <!-- Pagination (1/5) -->
      <div class="swiper-pagination  bottom-4 left-1/2 transform-x-1/2 text-white text-sm"></div>
    </swiper>
  </div>


  


  </div>   
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      drawerVisible: false,
      slidesPerView: 2,
      spaceBetween: 20,
      slidesData: [
        {
          image: "images/Rectangle 12.png", 
          text: "Dr. Maya Patel, 38",
          texts:"Psychiatrist",
          info:"Specializes in - ",
          infos:"Mood disorders, anxiety disorders",
          more:"“Compassionate, holistic approach,",
          mores:"evidence-based treatments”",
        },
        {
          image: "images/Rectangle 12 (1).png", 
          text: "Dr. Deep Naik, 35",
          texts:"Clinical Psychiatrist",
          info:"Specializes in - ",
          infos:"CBT, Trauma therapy",
          more:"“Empathetic, solution-focused,",
          mores:"trauma-informed care”",
        },
        {
          image: "images/Rectangle 12 (2).png", 
          text: "Dr. Kayla Andrews, 30",
          texts:"Psychiatrist",
          info:"Specializes in - ",
          infos:"Pediatric mental health",
          more:" “Patient-centred, integrative and ",
          mores:"mindfulness-based interventions”",
        },
        {
          image: "images/Rectangle 12.png", 
          text: "Dr. Maya Patel, 38",
          texts:"Psychiatrist",
          info:"Specializes in - ",
          infos:"Mood disorders, anxiety disorders",
          more:"“Compassionate, holistic approach,",
          mores:"evidence-based treatments”",
        },
        {
          image: "images/Rectangle 12 (2).png", 
          text: "Dr. Maya Patel, 38",
          texts:"Psychiatrist",
          info:"Specializes in - ",
          infos:"Mood disorders, anxiety disorders",
          more:"“Compassionate, holistic approach,",
          mores:"evidence-based treatments”",
        },
        {
          image: "images/Rectangle 12 (1).png", 
          text: "Dr. Maya Patel, 38",
          texts:"Psychiatrist",
          info:"Specializes in - ",
          infos:"Mood disorders, anxiety disorders",
          more:"“Compassionate, holistic approach,",
          mores:"evidence-based treatments”",
        }
      ]
    };
  },
  methods: {
    toggleDrawer() {
      this.drawerVisible = !this.drawerVisible;
    },
    closeDrawer() {
      this.drawerVisible = false;
    },
    updateSwiper() {
      const width = window.innerWidth;
      if (width >= 1024) { // for md, lg, and xl
        this.slidesPerView = 3; // Show 3 divs per page
      } else {
        this.slidesPerView = 2; // Show 2 divs per page
      }
    }
  },
  watch: {
    $route() {
      this.updateSwiper();
    }
  },
  mounted() {
    this.updateSwiper();
    window.addEventListener("resize", this.updateSwiper);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateSwiper);
  }
};
</script>

<style scoped>
/* Add a smooth transition effect */
.transition-transform {
  transition: transform 0.3s ease-in-out;
}
.swiper-pagination {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: white;
  font-size: 14px;
}
.swiper-pagination .swiper-pagination-current {
  color: #f1f1f1;
}
.swiper-pagination .swiper-pagination-total {
  color: #f1f1f1;
}
</style>
