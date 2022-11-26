<template>
    <div class="bg-gray-300 h-8" >
        <div class="w-4/5 m-auto relative" id="container">
            <div class="float-left whitespace-pre">
                <p class="headText inline-block ">尚品汇欢迎您 </p>
                <p class="headText inline-block">请登录 | 免费注册</p>
            </div>

            <div class="folat-right whitespace-pre">
                <p class="headText float-right">我的订单 </p>
                <p class="headText float-right">我的订单 |</p>
                <p class="headText float-right">我的订单 |</p>
                <p class="headText float-right">我的订单 |</p>
            </div>

            <img src="@/assets/img/Logo.png" alt="picutre" class="float-left clear-left mt-5">

            <div class="float-right mt-5">
                <input type="text" class="w-120 h-30 py-1 px-1.5 border-red outline-red-400 box-border" placeholder="请输入商品名">
                <button class="bg-red-500 text-white w-20 h-30 " >搜索</button>
            </div>

            <div class="w-full">
                <ul class="flex justify-start float-left bottom-0 clear-both mt-10 w-full">
                    <li class="text-base bg-red-500 text-white px-1 py-2 box-border w-40 text-center">全部商品分类</li>
                    <li class="lis">服装城</li>
                    <li class="lis">美妆馆</li>
                    <li class="lis">超市</li>
                    <li class="lis">全球购</li>
                    <li class="lis">闪购</li>
                    <li class="lis">团购</li>
                    <li class="lis">秒杀</li>
                </ul>
            </div>
        </div>
        <hr class="border-red-500 border-1 ">
        <!-- body -->
        <div class="w-4/5 m-auto relative" id="container-body">
            <!-- navgation -->
        <div class="hover:text-red-500 px-5 py-2 bg-gray-100 w-40 float-left pb-12">
            <div>xxxx</div>
            <div>xxxx</div>
            <div>xxxx</div>
            <div>xxxx</div>
            <div>xxxx</div>
            <div>xxxx</div>
            <div>xxxx</div>
            <div>xxxx</div>
            <div>xxxx</div>
            <div>xxxx</div>
            <div>xxxx</div>
            <div>xxxx</div>
            <div>xxxx</div>
            <div>xxxx</div>
            <div>xxxx</div>
            <div>xxxx</div>
        </div>
        <!-- swiper -->
        <div class="w-8/12 bg-red-100 h-full float-left ml-1">
            <img src="@/assets/img/banner1.jpg" alt="banner">
        </div>
        <!-- list -->
        <div class="bg-gray-100 absolute right-0 bottom-0 top-0 text-center w-44">
            fasfasfasfdsaf
        </div>
        </div>
    </div>
</template>

<style>
#container::after{
    content: '';
    display: block;
    clear: both;
}
#container-body{
    overflow: hidden;
}
</style>