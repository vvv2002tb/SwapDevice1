<template>
  <div class="h-screen  bg-emerald-400">
    <div class="row">
        <div class="container mx-auto p-8"> 
            <div class="flex flex-row justify-between ">
                    <div class="font-semibold text-2xl">
                        <control-outlined />
                    </div>
                    <div class="font-semibold text-xl pt-1.5">
                        Wallet
                    </div>
                    <div class="font-semibold text-2xl  ">
                        <scan-outlined />
                    </div>
            </div>
        </div>
        
    </div>
    <div class="row">
        <div class="container mx-auto p-8"> 
            <div class="flex flex-col text-center ">
                    <div class="font-semibold text-gray-400">
                        <p>Total Balence</p>
                    </div>
                    <div class="font-semibold text-2xl pt-1.5">
                        $2,8879,100
                    </div>
                    
            </div>
        </div>
        
    </div>
    <div class="row">
        <div class="container mx-auto p-8 "> 
            <div class="gutter-example text-center">
                <a-row :gutter="16">
                <a-col class="gutter-row" :span="6">
                    <div class="gutter-box"> 
                        <send-outlined class="text-xl"/>
                        
                    </div>
                    <div>
                        <p class="text-black font-semibold text-sm py-1">Send</p>
                    </div>

                </a-col>
                <a-col class="gutter-row" :span="6">
                    <div class="gutter-box">
                         <vertical-align-bottom-outlined class="text-xl"/>
                    </div>
                    <div>
                        <p class="text-black font-semibold text-sm py-1">Receive</p>
                    </div>
                </a-col>
                <a-col class="gutter-row" :span="6">
                    <div class="gutter-box">
                         <credit-card-outlined class="text-xl"/>
                    </div>
                    <p class="text-black font-semibold text-sm py-1">Buy</p>
                </a-col>
                <a-col class="gutter-row" :span="6">
                    <div class="gutter-box">
                         <swap-outlined class="text-xl"/>
                    </div>
                    <p class="text-black font-semibold text-sm py-1">Swap</p>
                </a-col>
                </a-row>
            </div>
        </div>
        
    </div>
  
  </div>
</template>

<script>
import { ScanOutlined, ControlOutlined, SendOutlined, VerticalAlignBottomOutlined, CreditCardOutlined, SwapOutlined } from '@ant-design/icons-vue';
export default {
    components: {
        ScanOutlined,
        ControlOutlined,
        SendOutlined,
        VerticalAlignBottomOutlined,
        CreditCardOutlined,
        SwapOutlined
    }
}
</script>

<style scoped>

    

    .gutter-example :deep(.ant-row > div) {
  background: transparent;
  border: 0;
  color: white;
}
.gutter-box {
  background: black;
  padding: 19px 19px;
  
  border-radius: 18px;
}
</style>