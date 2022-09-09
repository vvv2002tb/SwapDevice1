<template>
  <!-- nav b -->
  <nav class="bg-white w-full shadow-md z-40">
    <div
      class="
        max-w-[1200px]
        mx-auto
        flex
        justify-between
        py-4
        px-6
        lg:px-0
        text-center
      "
    >
      <!-- logo -->
      <div class="flex">
        <img
          class="h-16 w-auto"
          src="https://theme.hstatic.net/1000160337/1000885200/14/logo.png?v=288"
          alt=""
        />
      </div>
      <!-- search nav -->
      <div class="w-[550px] my-auto hidden lg:flex">
        <input
          type="text"
          class="
            border
            px-4
            w-full
            py-2
            focus:outline-none focus:border-red-400
          "
          placeholder="Tìm kiếm"
        />
        <button class="bg-red-500 px-4 rounded-r">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 stroke-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>

      <!-- nav items -->
      <ul class="hidden md:flex items-center pr-10 text-lg font-semibold">
        <li class="px-2">
          <div class="flex">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6 mr-1.5 fill-teal-500"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div class="text-base">
              <a href="">Đăng nhập</a> | <a href="">Đăng kí</a>
            </div>
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
            <div class="text-base"><a>Giỏ hàng</a></div>
          </div>
        </li>
      </ul>
      <div class="mobile my-auto">
        <div class="flex md:hidden space-x-4">
          <a href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </a>
          <a href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6 fill-teal-500"
            >
              <path
                fill-rule="evenodd"
                d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
          <a href="">
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
          </a>
        </div>
      </div>
    </div>
    <div class="hidden md:flex max-w-[1200px] mx-auto space-x-9 ">
      <a
        class="text-base py-2 font-semibold hover:border-b-2  border-gray-500"
        href=""
        >Trang chủ</a
      >
      <a
        class="text-base py-2 font-semibold hover:border-b-2 border-gray-500"
        href=""
        >Giới thiệu</a
      >
      <a
        class="
          text-base
          py-2
          font-semibold
          hover:border-b-2
          flex
          border-gray-500
        "
        href=""
        >Hướng dẫn
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-4 h-4 my-auto ml-[1px]"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </a>
      <a
        class="text-base py-2 font-semibold hover:border-b-2 flex border-gray-500"
        href=""
        >Sản phẩm
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-4 h-4 my-auto ml-[1px]"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </a>
      <a
        class="text-base py-2 font-semibold hover:border-b-2 border-gray-500"
        href=""
        >Review</a
      >
      <a
        class="text-base py-2 font-semibold hover:border-b-2 border-gray-500"
        href=""
        >Ưu đãi</a
      >
      <a
        class="text-base py-2 font-semibold hover:border-b-2 border-gray-500 flex"
        href=""
        >Kết Nối
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-4 h-4 my-auto ml-[1px]"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
        </a
      >
      <a
        class="text-base py-2 font-semibold hover:border-b-2 flex border-gray-500"
        href=""
        >Liên hệ
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-4 h-4 my-auto ml-[1px]"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
        </a
      >
      
    </div>
  </nav>
  <!-- content  -->
</template>

<script>
</script>

<style scoped>
</style>