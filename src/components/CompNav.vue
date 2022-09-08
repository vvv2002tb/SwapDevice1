<template>
  <!-- nav b -->
  <nav class="bg-white fixed top-0 left-0 w-full shadow-md z-40">
    <div
      class="
        flex
        justify-between
        items-center
        p-6
        px-6
        lg:px-0
        container
        m-auto
      "
    >
      <!-- logo -->
      <div class="flex text-lg text-purple-400 font-bold uppercase">
        Switch MOD
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-7 stroke-yellow-500 ml-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
          />
        </svg>
      </div>
      <ul class="hidden md:flex items-center pr-10 text-lg font-semibold">
        <li class="px-2">
          <div class="flex">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 mr-1.5 fill-blue-400"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </div>
            <div><a href="">Đăng nhập</a> | <a href="">Đăng kí</a></div>
          </div>
        </li>
        <li class="px-4">
          <div class="flex">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 mr-1.5 stroke-orange-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            </div>
            <div><a>Giỏ hàng</a></div>
          </div>
        </li>
      </ul>
      <button class="block md:hidden rounded cursor-pointer group">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-6 h-6"
        >
          <path
            fill-rule="evenodd"
            d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
            clip-rule="evenodd"
          />
        </svg>
        <div
          class="
            absolute
            top-[70px]
            -right-full
            h-40
            w-full
            bg-white
            border
            opacity-0
            group-focus:right-0 group-focus:opacity-100
            transition
            ease-in-out
            duration-200
          "
        >
          <ul
            class="flex flex-col items-center w-full text-base cursor-pointer"
          >
            <li class="hover:bg-gray-200 py-4 w-full">
              <div class="flex justify-center">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 mr-1.5 fill-blue-500"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                </div>
                <div><a href="">Đăng nhập</a> | <a href="">Đăng kí</a></div>
              </div>
            </li>
            <li class="hover:bg-gray-200 py-4 w-full">
              <div class="flex justify-center">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 mr-1.5 stroke-orange-500"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                </div>
                <div><a>Giỏ hàng</a></div>
              </div>
            </li>
          </ul>
        </div>
      </button>
    </div>
  </nav>
  <!-- content  -->
  <div class="mt-20 shadow-xl">
    <a-carousel arrows autoplay>
      <template #prevArrow>
        <div class="custom-slick-arrow" style="left: 10px; z-index: 1">
          <left-circle-outlined />
        </div>
      </template>
      <template #nextArrow>
        <div class="custom-slick-arrow" style="right: 10px">
          <right-circle-outlined />
        </div>
      </template>
      <div><img src="https://img.thuthuattinhoc.vn/uploads/2019/01/13/anh-nen-dep-nhat_105620947.jpeg" alt=""></div>
      <div><img src="https://thuthuatnhanh.com/wp-content/uploads/2021/12/background-hinh-nen-wallpaper-thien-nhien-phong-canh-dep.jpg" alt=""></div>
      <div><img src="https://1.bp.blogspot.com/-Gmns_NgUxD8/XqPOG9CwbZI/AAAAAAAAiuQ/vr_pW_p8960-xE1Sd1bYAlvazTEsLM7xQCLcBGAsYHQ/s1600/Hinh-anh-dep-nhat-the-gioi%2B%252872%2529.jpg" alt=""></div>
      
    </a-carousel>
  </div>
</template>

<script>
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons-vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: {
    LeftCircleOutlined,
    RightCircleOutlined,
  },
});
</script>

<style scoped>
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 400px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel :deep(.slick-arrow.custom-slick-arrow) {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: green;
  
  opacity: 3;
  z-index: 1;
}
.ant-carousel :deep(.custom-slick-arrow:before) {
  display: none;
}
.ant-carousel :deep(.custom-slick-arrow:hover) {
  opacity: 100;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}
</style>