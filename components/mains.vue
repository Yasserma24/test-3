<template>
<main>
        <div class="flex flex-col gap-[36px]">
  <p id="embrace" class=" text-[110.88px] text-center">Embrace mindfulness,<br>one click at a time.</p>
  <p id="second_p" class=" text-[49.91px] text-center">Your digital landscape where <br> mindfulness and well-being meet.</p>
</div>
<div class="flex flex-col gap-[126.92px]">
<div class="mt-[30px] flex justify-center">
    <nuxt-img src="/images/Clip path group.png"  height="684.08px"/>
    <div class="w-[377.63px] h-[185px] rounded-[36.24px] border-[1.91px] border-black absolute top-[740px] left-[1055px]" id="cont_1">
    <ul class="text-[23px] pt-[26.7px] pl-[34.33px] flex flex-col gap-[17.16px] ">
        <li> 5000 + satisfied users</li>
        <li> 700+ licensed therapists</li>
        <li> 11,000  counselling sessions</li>
    </ul>
</div>
<div id="cont_1" class="w-[391.36px] h-[134.99px] rounded-[36.24px] border-[1.91px] border-black absolute top-[1210px] left-[130px]" >
    <ul class="text-[23px] pt-[26.7px] pl-[34.33px] flex flex-col gap-[17.17]">
        <li>90% Client Satisfaction Rate</li>
        <li>30% Well-Being Increase</li>
    </ul>
</div>
</div>
<div class="flex justify-center">
    <div class="flex flex-col gap-[71px]">
<div id="video_cont" class="w-[1234px] h-[642px] bg-black rounded-[48px] flex justify-center ">
    <p id="story" class="text-[174.23px] flex items-center">Our Story<nuxt-img src="/images/Clip path group (1).png" alt="mic" class="w-[115.48px] h-[152.31px]"/></p>
    <nuxt-img src="/images/Group 7.png" class="w-[166.25px] h-[166.25px] absolute top-[1760px] hover:cursor-pointer" />
</div>
<div class="flex flex-col gap-[29px]">
<p id="specialize" class="text-[60px] text-center">We Specialize In</p>
<div class="flex flex-col gap-[41.73px]">
<nuxt-img src="images/Group 9096.png" />
<p id="specialize" class="text-center text-[34.82px]">And much more...</p>
<div class="flex flex-col gap-[82px]">
<p id="specialize" class="text-[60px] text-center">Our Network of <span id="embrace">700+</span><br> licensed therapists</p>
</div>
<div class="flex flex-col gap-[66px]">
<div class="w-[1292px] h-[598px] flex flex-row">
    <swiper
    :slides-per-view="3"
    :space-between="48"
    :loop="true"
    class="my-swiper"
    >
    <swiper-slide v-for="(slide, index) in slides" :key="index">
        <div class="pt-[33px] pl-[38px] bg-black rounded-[39.99px] flex flex-col gap-[24px]">
            <nuxt-img
            :src="slide.image"
            alt="Docs"
            class="w-[316px] h-[285px] rounded-[20.56px] "
            />
            <p class="text-[20px] text-[white]" id="specialize">{{ slide.description }} <br><span id="out_400">{{ slide.descriptions }}</span></p>
            <p class="text-[20px] text-[#B1B1B1]" id="out_300">{{ slide.info }} - <br><span>{{ slide.infos }}</span></p>
            <p class="text-[20px] text-[#B1B1B1] pb-[33px]" id="out_300">{{ slide.more }}</p>
        </div>
        
        
    </swiper-slide>
    </swiper>
</div>
</div>
<div class="flex flex-col gap-[66px]">
<div class="flex flex-col gap-[23px]">
<p class="text-center text-[60px]" id="specialize">Words speaks for us</p>
<nuxt-img src="images/Group 10.png" />
</div>
<p class="text-center text-[60px]" id="specialize">FAQs</p>
</div>
<div class="flex flex-col gap-[66px]">
<div class="w-[1,266.5px] h-[693px] flex flex-col gap-[12px]">
    <div class="w-[100%] h-[129px] bg-black flex justify-between items-center rounded-[27px] pl-[47px] pr-[47px]">
        <p class="text-[28px] w-[891px] h-[83px] text-[white]">How can I use DreamForge to enhance my social media <br> presence?</p>
        <nuxt-img src="icons/Vector 31.png" class="w-[29.5px] h-[14.75px]" />
    </div>
    <div class="w-[100%] h-[129px] bg-black flex justify-between items-center rounded-[27px] pl-[47px] pr-[47px]">
        <p class="text-[28px] w-[891px] h-[83px] text-[white]" id="pop_300">How can I use DreamForge to enhance my social media <br> presence?</p>
        <nuxt-img src="icons/Vector 31.png" class="w-[29.5px] h-[14.75px]" />
    </div>
    <div class="w-[100%] h-[129px] bg-black flex justify-between items-center rounded-[27px] pl-[47px] pr-[47px]">
        <p class="text-[28px] w-[891px] h-[83px] text-[white]" id="pop_300">How can I use DreamForge to enhance my social media <br> presence?</p>
        <nuxt-img src="icons/Vector 31.png" class="w-[29.5px] h-[14.75px]" />
    </div>
    <div class="w-[100%] h-[129px] bg-black flex justify-between items-center rounded-[27px] pl-[47px] pr-[47px]">
        <p class="text-[28px] w-[891px] h-[83px] text-[white]" id="pop_300">How can I use DreamForge to enhance my social media <br> presence?</p>
        <nuxt-img src="icons/Vector 31.png" class="w-[29.5px] h-[14.75px]" id="pop_300" />
    </div>
    <div class="w-[100%] h-[129px] bg-black flex justify-between items-center rounded-[27px] pl-[47px] pr-[47px]">
        <p class="text-[28px] w-[891px] h-[83px] text-[white]" id="pop_300">How can I use DreamForge to enhance my social media <br> presence?</p>
        <nuxt-img src="icons/Vector 31.png" class="w-[29.5px] h-[14.75px]" />
    </div>
</div>
<p class="text-center text-[60px]" id="specialize">Stay informed about mental health <br> with the latest insights from our blog</p>
<div class="w-[1,311.72px] h-[805.87px] flex flex-row gap-[85px]">
    <div class="w-[613.36px] h-[805.87px] bg-black flex flex-col items-center gap-[35.69px] pt-[49.08px] rounded-[59.47px]">
        <p class="text-center text-[27px] text-[#B1B1B1] w-[468.48px] h-[34px]" id="out_300">December 2023</p>
        <p class="text-center text-[40.58px] text-[#B1B1B1] w-[468.48px] h-[102px]" id="out_500">10 Daily Habits for Cultivating Mindfulness</p>
        <nuxt-img src="images/happy-man-waving 1.png" />
    </div>
    <div class="w-[613.36px] h-[805.87px] bg-black flex flex-col items-center gap-[35.69px] pt-[49.08px] rounded-[59.47px]">
        <p class="text-center text-[27px] text-[#B1B1B1] w-[468.48px] h-[34px]" id="out_300">January 2024</p>
        <p class="text-center text-[40.58px] text-[#B1B1B1] w-[468.48px] h-[102px]" id="out_500">The Pure Science of  Happiness</p>
        <nuxt-img src="images/man-holding-a-heart 1.png" />
    </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";

const slides= [
    {
        id:1,
        image:"/images/Rectangle 12.png",
        description:"Dr. Maya Patel, 38",
        descriptions:"Psychiatrist",
        info:"Specializes in",
        infos:"Mood disorders, anxiety disorders",
        more:"“Compassionate, holistic approach, evidence-based treatments”"
    },
    {
        id:2,
        image:"/images/Rectangle 12 (1).png",
        description:"Dr. Deep Naik, 35",
        descriptions:"Clinical Psychiatrist",
        info:"Specializes in",
        infos:"CBT, Trauma therapy",
        more:"“Empathetic, solution-focused, trauma-informed care”"
    },
    {
        id:3,
        image:"/images/Rectangle 12 (2).png",
        description:"Dr. Kayla Andrews, 30",
        descriptions:"Psychiatrist",
        info:"Specializes in",
        infos:"Pediatric mental health",
        more:" “Patient-centred, integrative and mindfulness-based interventions”"
    },
    {
        id:4,
        image:"/images/Rectangle 12.png",
        description:"Dr. Kayla Andrews, 30",
        descriptions:"Psychiatrist",
        info:"Specializes in",
        infos:"Pediatric mental health",
        more:" “Patient-centred, integrative and mindfulness-based interventions”"
    },
    {
        id:5,
        image:"/images/Rectangle 12 (1).png",
        description:"Dr. Kayla Andrews, 30",
        descriptions:"Psychiatrist",
        info:"Specializes in",
        infos:"Pediatric mental health",
        more:" “Patient-centred, integrative and mindfulness-based interventions”"
    },
    {
        id:6,
        image:"/images/Rectangle 12 (2).png",
        description:"Dr. Kayla Andrews, 30",
        descriptions:"Psychiatrist",
        info:"Specializes in",
        infos:"Pediatric mental health",
        more:" “Patient-centred, integrative and mindfulness-based interventions”"
    },

];
</script> 

<style scoped>
.my-swiper{
    width: 100%;
    height: auto;
}
</style>


