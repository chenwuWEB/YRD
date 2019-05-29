<!--1.创建模板-->
<template>
    <div id="about">
        <!--引入header组件-->
        <my-header></my-header>
        <div id="main">
            <div class="tabs">
                <a href="#" class="item active">
                    <div class="tit">愿景与使命</div>
                </a>
                <a href="#" class="item">
                    <div class="tit">企业介绍</div>
                </a>
                <a href="#" class="item">
                    <div class="tit">企业文化</div>
                </a>
                <router-link to="/about_4" class="item">
                    <div class="tit">企业资质</div>
                </router-link>
                <router-link to="/about_5" class="item">
                    <div class="tit">合作伙伴</div>
                </router-link>
            </div>
            <div class="sub-box">
                <div class="content">
                    <div>我是编辑器内容</div>
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
    #about{
        margin-top:50px;
    }
    #about #main{
        padding:20px 10px 40px;
        min-height:85vh;
    }
    #about #main .tabs{
        display:flex;
        flex-wrap:wrap;
    }
    #about #main .tabs .item{
        flex: 0 0 33.33%;
        margin-bottom:15px;
        display:flex;
        justify-content: center;
    }
    #about #main .tabs .item.active .tit{
        color:#fff;
        background-color:#2984ca;
    }
    #about #main .tabs .item .tit{
        padding:7px 15px;
    }
    #about #main .sub-box .content{
        padding:15px 0;
    }
    #about #main .sub-box .content div{
        text-align:left;
        line-height:2;
    }
</style>