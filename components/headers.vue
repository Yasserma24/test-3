<template>
<header>
      <div  class="w-[100%] flex justify-around ">
          <div id="logo_name" class="flex gap-[19.69px] text-[30px] w-[236.04px] h-[41.69px]">
              <img src="\icons\Logo.png" alt="logo_img">
              <p id="page_name" class="text-[30px]">Mindfulify</p>
          </div>
          <div id="nav_location" class="hidden tablet:block laptop:block desktop:block">
              <nav id="nav_part" class="flex gap-[30px] text-[30px]">
                  <a href="#home">Home</a>
                  <a href="#about_us" class="whitespace-nowrap">About Us</a>
                  <a href="#products">Products</a>
                  <a href="#pricing">Pricing</a>
              </nav>
          </div>
          <div id="download">
              <button id="btn" class=" gap-[8px] text-[30px] w-[217px] h-[54px] rounded-[9px] items-center pl-[23px] hidden phone:flex">Download <img src="\icons\Group 4.png" alt="btn_download" id="down_icon" class="inline-block"></button>
              <button id="btn" class="flex gap-[8px] text-[30px] w-[217px] h-[54px] rounded-[9px] items-center pl-[13.6px]  phone:hidden">Menu</button>
  
          </div>
      </div>
    </header>
</template>