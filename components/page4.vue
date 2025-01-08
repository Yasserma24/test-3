<template>
    <div class="w-screen px-[35px] mt-[30px]
    2xl:px-[250px] 2xl:mt-[139px]
    xl:px-[100px]  xl:mt-[100px]
    lg:px-[80px]  lg:mt-[82px]
    md:px-[40px]  md:mt-[60px]
    sm:px-[35px]  sm:mt-[40px]">
      <div class="max-w-full">
        <p id="pop_600" class="text-center text-[33px]
        2xl:text-[65px]
        xl:text-[60px]
        lg:text-[55px]
        md:text-[50px]
        sm:text-[35px]">My Projects</p>
        <p id="pop_400" class="text-center mt-[22px] text-[12px]
        2xl:text-[21px]
        xl:text-[21px]
        lg:text-[16px]
        md:text-[16px]
        sm:text-[14px]">
          Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus<br />
          lectus. Phasellus consequat urna tellus
        </p>
        <div class="flex gap-[22px] overflow-x-auto mt-[69px] w-fit max-w-full flex-nowrap mx-auto">

          
            <button
              v-for="category in categories"
              :key="category"
              id="pop_400"
              class="text-[13px] border-[0.4px] rounded-[12px] px-[20px] py-[10px] flex-none text-nowrap
              2xl:text-[24px]
              xl:text-[24px]
              lg:text-[20px]
              md:text-[18px]
              sm:text-[14px]"
              :class="{
                'bg-[#FD6F00] text-white': selectedCategory === category,
                'bg-[#F8F8F8] text-black': selectedCategory !== category,
              }"
              @click="filterProjects(category)"
            >
              {{ category }}
            </button>

        </div>
        <div class="flex flex-wrap gap-[36px] mt-[44px]">
          <div
            v-for="(project, index) in filteredProjects"
            :key="index"
            class="max-w-full flex-1 aspect-square basis-[300px] rounded-[12px] flex flex-col"
          >
            <nuxt-img :src="project.img" class="w-full flex-1" />
            <p class="text-[19px] text-[#FD6F00] mt-[37px]" id="pop_400">{{ project.title }}</p>
            <p class="text-[24px] text-[#000000]" id="pop_700">{{ project.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        categories: ["All","UI/UX", "Web Design", "App Design", "Graphic Design"],
        selectedCategory: "Web Design",
        projects: [
          { img: "/images/Group 24.png", title: "Web Design", name: "AirCalling Landing Page Design ", category: "Web Design" },
          { img: "/images/Group 24.png", title: "UI/UX", name: "Project Beta", category: "UI/UX" },
          { img: "/path-to-image-3.jpg", title: "Graphic Design", name: "Project Gamma", category: "Graphic Design" },
          { img: "/path-to-image-4.jpg", title: "App Design", name: "Project Delta", category: "App Design" },
          { img: "/images/Group 26.png", title: "Web Design", name: "Business Landing Page Design ", category: "Web Design" },
          { img: "/images/Group 27.png", title: "Web Design", name: "Ecom Web Page Design ", category: "Web Design" },
          { img: "/path-to-image-6.jpg", title: "App Design", name: "Project Zeta", category: "App Design" },
        ],
      };
    },
    computed: {
      filteredProjects() {
        if (this.selectedCategory === "All") {
          return this.projects;
        }
        return this.projects.filter((project) => project.category === this.selectedCategory);
      },
    },
    methods: {
      filterProjects(category) {
        this.selectedCategory = category;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Default styles for buttons */
  button {
    transition: all 0.3s ease;
  }
  
  /* Add hover effect */
  button:hover {
    opacity: 0.8;
  }
  </style>
  