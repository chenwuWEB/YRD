<!--1.创建模板-->
<template>
    <div id="concept">
        <!--引入header组件-->
        <my-header></my-header>
        <div id="main">
            <div class="tabs">
                <router-link to="/Recruitment" class="item">
                    <div class="tit">招聘信息</div>
                </router-link>
                <a href="#" class="item active">
                    <div class="tit">人才理念</div>
                </a>
            </div>
            <div class="box">
                <div class="word">
                    人才理念：德才兼备，不拘一格，人尽其才，才尽其用<br/>
                    德才兼备——才者，德之资也；德者，才之帅也。<br/>
                    不拘一格——创新人才观念，不拘一格选人才，不论资排辈，唯贤是举。<br/>
                    人尽其才——人有长短，不分大小，德才兼顾，内外兼收。<br/>
                    才尽其用——因其材以取之，审其能以任之，用其所长，掩其所短。<br/>
                </div>
                <div class="list">
                    <div class="item">
                        <img :src="url+'img/adv-5.png'"/>
                        <div class="tit">专业培训</div>
                        <div class="info">拥有众多认证工程师</div>
                    </div>
                    <div class="item">
                        <img :src="url+'img/adv-6.png'"/>
                        <div class="tit">定期体检</div>
                        <div class="info">拥有众多认证工程师</div>
                    </div>
                    <div class="item">
                        <img :src="url+'img/adv-7.png'"/>
                        <div class="tit">五险一金</div>
                        <div class="info">拥有众多认证工程师</div>
                    </div>
                    <div class="item">
                        <img :src="url+'img/adv-8.png'"/>
                        <div class="tit">团队活动</div>
                        <div class="info">拥有众多认证工程师</div>
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
    #concept{
        margin-top:50px;
    }
    #concept #main{
        padding:20px 10px 40px;
        min-height:85vh;
    }
    #concept #main .tabs{
        display:flex;
        justify-content: center;
        flex-wrap:wrap;
    }
    #concept #main .tabs .item{
        margin:0 15px 15px 15px;
        display:flex;
        justify-content: center;
    }
    #concept #main .tabs .item.active .tit{
        color:#fff;
        background-color:#2984ca;
    }
    #concept #main .tabs .item .tit{
        padding:7px 15px;
    }
    #concept #main .box{
        padding:15px 0;
    }
    #concept #main .box .word{
        text-align: left;
        line-height:2;
        margin-bottom:20px;
    }
    #concept #main .box .list{
        display: flex;
        flex-wrap:wrap;
    }
    #concept #main .box .list .item{
        width: 50%;
        padding:20px 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0);
        transition: .3s all;
    }
    #concept #main .box .list .item:hover{
        border-radius:15px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    }
    #concept #main .box .list .item img{
        height:80px;
    }
    #concept #main .box .list .item img{
        margin-bottom:10px;
    }
    #concept #main .box .list .item .tit{
        margin-bottom:10px;
        font-size:15px;
    }
    #concept #main .box .list .item .info{
        font-size:10px;
        margin-bottom:10px;
        color:#999;
    }
</style>