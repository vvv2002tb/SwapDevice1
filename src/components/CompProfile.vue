<template>
  <div>
    <div class="row">
        <div class="container mx-auto px-8 py-2 mb-6 text-blue-600">
            <router-link class="flex justify-between" to="/1">
                            <div class="flex items-center text-left">
                               <left-outlined  class="text-sm"/>
                               <h5 class="font-semibold  text-blue-600 px-1 mt-1 ">Back</h5>
                            </div>
                            
            </router-link>
        </div>
    </div>
    <div class="row">
    <div class="container mx-auto p-8 mt-17">
        <div class="text-center">
            <div class="w-24 h-24 mx-auto  overflow-hidden border-2 rounded-full border-blue-500">
                <img class="w-full h-auto object-cover" src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Clipart.png">

            </div>
            <div class="font-bold text-xl text-orange-600 mt-4">Hello, User</div>
            <p class="text-gray-400 mt-1 font-semibold text-sm">mr.v889@gmail.com</p>
        </div>
    </div>

  </div>
  <div class="row">
    <div class="container mx-auto px-8">
        <div class="grip grip-cols-1">
            <div class="col-span-1">
                <h3 class="font-bold text-xl text-blue-600 mt-4">General</h3>
            </div>
        </div>
        <div class="grip grip-cols-1">
            <div class="col-span-1">
                <ul>
                    <li>
                        <router-link class="flex justify-between  py-4" to="/profile/wallet">
                            <div class="flex items-center text-left">
                               <wallet-outlined class="text-2xl "/>
                               <h5 class="font-semibold text-gray-400 px-2 mt-1 ">My wallet</h5>
                            </div>
                            <div class="text-right">
                                <right-outlined class="text-sm opacity-75" />
                            </div>
                        </router-link>
                        <router-link class="flex justify-between  py-4" to="/2">
                            <div class="flex items-center text-left">
                               <tool-outlined  class="text-2xl "/>
                               <h5 class="font-semibold text-gray-400 px-2 mt-1 ">Tool</h5>
                            </div>
                            <div class="text-right">
                                <right-outlined class="text-sm opacity-75" />
                            </div>
                        </router-link>
                        <router-link class="flex justify-between  py-4" to="/3">
                            <div class="flex items-center text-left">
                               <unlock-outlined class="text-2xl "/>
                               <h5 class="font-semibold text-gray-400 px-2 mt-1 ">Privacy</h5>
                            </div>
                            <div class="text-right">
                                <right-outlined class="text-sm opacity-75" />
                            </div>
                        </router-link>
                        <router-link class="flex justify-between  py-4" to="/4">
                            <div class="flex items-center text-left">
                               <setting-outlined class="text-2xl "/>
                               <h5 class="font-semibold text-gray-400 px-2 mt-1 ">Setting</h5>
                            </div>
                            <div class="text-right">
                                <right-outlined class="text-sm opacity-75" />
                            </div>
                        </router-link>
                        <router-link class="flex justify-between  py-3" to="/">
                            <div class="flex items-center text-left text-red-400">
                               <logout-outlined   class="text-2xl  "/>
                               <h5 class="font-semibold text-red-400 px-2 mt-1 ">Log Out</h5>
                            </div>
                            <div class="text-right">
                                <right-outlined class="text-sm opacity-75" />
                            </div>
                        </router-link>
                    </li>
                    
                </ul>
            </div>
        </div>
       
    </div>
  </div>
  </div>
  
</template>

<script>
import { WalletOutlined, RightOutlined, UnlockOutlined, SettingOutlined, LogoutOutlined, ToolOutlined, LeftOutlined} from '@ant-design/icons-vue';
export default {
    components: {
        WalletOutlined,
        RightOutlined,
        UnlockOutlined,
        SettingOutlined,
        LogoutOutlined,
        ToolOutlined,
        LeftOutlined
    }
}
</script>

<style>

</style>