<!--1.创建模板-->
<template>
    <div id="business">
        <!--引入header组件-->
        <my-header></my-header>
        <div id="main">
            <div class="tabs">
                <a href="#" class="item active">
                    <div class="tit">业务范畴</div>
                </a>
            </div>
            <div id="service">
                <div class="list">
                    <a href="#" class="item">
                        <img :src="url+'img/circle-1.png'"/>
                        <div class="tit">通信工程</div>
                    </a>
                    <a href="#" class="item">
                        <img :src="url+'img/circle-2.png'"/>
                        <div class="tit">ICT系统集成</div>
                    </a>
                    <a href="#" class="item">
                        <img :src="url+'img/circle-3.png'"/>
                        <div class="tit">机房工程</div>
                    </a>
                    <a href="#" class="item">
                        <img :src="url+'img/circle-4.png'"/>
                        <div class="tit">IT运维服务</div>
                    </a>
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
    #business{
        margin-top:50px;
    }
    #business #main{
        padding:20px 10px 40px;
        min-height:85vh;
    }
    #business #main .tabs .item{
        margin-bottom:15px;
        display:flex;
        justify-content: center;
    }
    #business #main .tabs .item.active .tit{
        color:#fff;
        background-color:#2984ca;
    }
    #business #main .tabs .item .tit{
        padding:7px 15px;
    }
    #business #main .sub-box .content div{
        text-align:left;
        line-height:2;
    }
    #business #service{
        padding: 15px 0;
    }
    #business #service .list{
        display:flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }
    #business #service .list .item{
        margin: 15px 0;
        flex: 0 0 50%;
    }
    #business #service .list .item img{
        width:114px;
        height:114px;
    }
    #business #service .list .item .tit{
        font-size:14px;
        margin-top: 20px;
    }
</style>