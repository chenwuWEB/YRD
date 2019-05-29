<!--1.创建模板-->
<template>
    <div id="about_5">
        <!--引入header组件-->
        <my-header></my-header>
        <div id="main">
            <div class="tabs">
                <router-link to="/About" class="item">
                    <div class="tit">愿景与使命</div>
                </router-link>
                <a href="#" class="item">
                    <div class="tit">企业介绍</div>
                </a>
                <a href="#" class="item">
                    <div class="tit">企业文化</div>
                </a>
                <router-link to="/About_4" class="item">
                    <div class="tit">企业资质</div>
                </router-link>
                <a href="#" class="item active">
                    <div class="tit">合作伙伴</div>
                </a>
            </div>
            <div class="sub-box">
                <div class="list">
                    <div class="item" v-for="(item,i) of lists" :key="i">
                        <img :src="item.img_url"/>
                    </div>
                </div>
            </div>
        </div>
        <!--引入footer组件-->
        <my-footer></my-footer>
    </div>
</template>
<!--2.添加script-->
<script>
    import myHeader from "@/components/header.vue"
    import myFooter from "@/components/footer.vue"
    export default{
        data(){
            return {
                lists:[
                    {img_url:"http://127.0.0.1:3000/img/partner-1.jpg"},
                    {img_url:"http://127.0.0.1:3000/img/partner-1.jpg"},
                    {img_url:"http://127.0.0.1:3000/img/partner-1.jpg"},
                    {img_url:"http://127.0.0.1:3000/img/partner-1.jpg"},
                    {img_url:"http://127.0.0.1:3000/img/partner-1.jpg"},
                    {img_url:"http://127.0.0.1:3000/img/partner-1.jpg"},
                    {img_url:"http://127.0.0.1:3000/img/partner-1.jpg"},
                    {img_url:"http://127.0.0.1:3000/img/partner-1.jpg"},
                    {img_url:"http://127.0.0.1:3000/img/partner-1.jpg"},
                    {img_url:"http://127.0.0.1:3000/img/partner-1.jpg"},
                    {img_url:"http://127.0.0.1:3000/img/partner-1.jpg"}
                ]
                //保存模板中要使用的数据
            }
        },
        components:{
            myHeader,
            myFooter
        }
    }
</script>
<!--2.添加style-->
<style>
    #about_5{
        margin-top:50px;
    }
    #about_5 #main{
        padding:20px 10px 40px;
        min-height:85vh;
    }
    #about_5 #main .tabs{
        display:flex;
        flex-wrap:wrap;
    }
    #about_5 #main .tabs .item{
        flex: 0 0 33.33%;
        margin-bottom:15px;
        display:flex;
        justify-content: center;
    }
    #about_5 #main .tabs .item.active .tit{
        color:#fff;
        background-color:#2984ca;
    }
    #about_5 #main .tabs .item .tit{
        padding:7px 15px;
    }
    #about_5 #main .sub-box{
        padding:15px 0;
    }
    #about_5 #main .sub-box .list{
        display: flex;
        flex-wrap:wrap;
    }
    #about_5 #main .sub-box .list .item{
        width:33.33%;
    }
    #about_5 #main .sub-box .list img{
        width: 110px;
        height: 60px;
        border: 1px solid #dbdbdb;
        margin-bottom:10px;
    }
</style>