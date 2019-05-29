<!--1.创建模板-->
<template>
    <div id="about_4">
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
                <a href="#" class="item active">
                    <div class="tit">企业资质</div>
                </a>
                <router-link to="/About_5" class="item">
                    <div class="tit">合作伙伴</div>
                </router-link>
            </div>
            <div class="sub-box">
                <div class="list">
                    <div class="item">
                        <img :src="url+'img/honor-1.jpg'"/>
                    </div>
                    <div class="item">
                        <img :src="url+'img/honor-2.jpg'"/>
                    </div>
                    <div class="item">
                        <img :src="url+'img/honor-3.jpg'"/>
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
                url: this.COMMON.url
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
    #about_4{
        margin-top:50px;
    }
    #about_4 #main{
        padding:20px 10px 40px;
        min-height:85vh;
    }
    #about_4 #main .tabs{
        display:flex;
        flex-wrap:wrap;
    }
    #about_4 #main .tabs .item{
        flex: 0 0 33.33%;
        margin-bottom:15px;
        display:flex;
        justify-content: center;
    }
    #about_4 #main .tabs .item.active .tit{
        color:#fff;
        background-color:#2984ca;
    }
    #about_4 #main .tabs .item .tit{
        padding:7px 15px;
    }
    #about_4 #main .sub-box{
        padding:15px 0;
    }
    #about_4 #main .sub-box .list{
        display: flex;
        flex-wrap:wrap;
    }
    #about_4 #main .sub-box .list .item{
        width:50%;
    }
    #about_4 #main .sub-box .list img{
        width:80%;
        margin-bottom:15px;
    }
</style>