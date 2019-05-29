<!--1.创建模板-->
<template>
    <div id="recruitment">
        <!--引入header组件-->
        <my-header></my-header>
        <div id="main">
            <div class="tabs">
                <a href="#" class="item active">
                    <div class="tit">招聘信息</div>
                </a>
                <router-link to="/Concept"class="item">
                    <div class="tit">人才理念</div>
                </router-link>
            </div>
            <div class="box">
                <div class="item">
                    <div class="info">
                        <div class="tit">通讯技术工程师</div>
                        <div class="num">薪酬：4000--10000元/月</div>
                    </div>
                    <div class="links"></div>
                </div>
                <div class="item">
                    <div class="info">
                        <div class="tit">通讯技术工程师</div>
                        <div class="num">薪酬：4000--10000元/月</div>
                    </div>
                    <div class="links"></div>
                </div>
                <div class="item">
                    <div class="info">
                        <div class="tit">通讯技术工程师</div>
                        <div class="num">薪酬：4000--10000元/月</div>
                    </div>
                    <div class="links"></div>
                </div>
                <div class="item">
                    <div class="info">
                        <div class="tit">通讯技术工程师</div>
                        <div class="num">薪酬：4000--10000元/月</div>
                    </div>
                    <div class="links"></div>
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
    #recruitment{
        margin-top:50px;
    }
    #recruitment #main{
        padding:20px 10px 40px;
        min-height:85vh;
    }
    #recruitment #main .tabs{
        display:flex;
        justify-content: center;
        flex-wrap:wrap;
    }
    #recruitment #main .tabs .item{
        flex: 0 0 30%;
        margin-bottom:15px;
        display:flex;
        justify-content: center;
    }
    #recruitment #main .tabs .item.active .tit{
        color:#fff;
        background-color:#2984ca;
    }
    #recruitment #main .tabs .item .tit{
        padding:7px 15px;
    }
    #recruitment #main .box{
        margin: 20px 0;
    }
    #recruitment #main .box .item{
        width: 100%;
        height: 70px;
        position: relative;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
        padding: 20px 90px 0 25px;
        margin-bottom: 20px;
    }
    #recruitment #main .box .item .info{
        text-align: left;
    }
    #recruitment #main .box .item .info .tit{
        font-size:15px;
        margin-bottom:10px;
    }
    #recruitment #main .box .item .info .num{
        color:#999;
    }
    #recruitment #main .box .item .links{
        position: absolute;
        right: 0;
        top: 0;
        width: 90px;
        height: 70px;
        background: url(http://127.0.0.1:3000/img/zp-arrow.png) no-repeat center center;
        background-size: 36px auto;
        box-shadow: -1px 0 3px rgba(0, 0, 0, 0.2);
    }
    #recruitment #main .box .item:hover .links{
        background: #2984ca url(http://127.0.0.1:3000/img/zp-arrow-curr.png) no-repeat center center;
        background-size: 36px auto;
    }
</style>