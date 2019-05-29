<!--1.创建模板-->
<template>
    <div id="details">
        <!--引入header组件-->
        <my-header></my-header>
        <div class="box">
            <div class="header">
                <div class="tit">智能化建设</div>
                <div class="sub">
                    <div class="date">发布时间：2019-04-12</div>
                    <div class="view">点击量：8251</div>
                </div>
            </div>
            <div class="content">
                <div>我是编辑器内容</div>
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
    #details{
        margin-top:50px;
    }
    #details .box{
        padding:20px 10px 40px;
        min-height: 85vh;
    }
    #details .box .header{
        margin:10px 0 15px 0;
    }
    #details .box .header .tit{
        text-align: center;
        font-size: 18px;
        margin-bottom:15px;
    }
    #details .box .header .sub{
        color:#999;
        display:flex;
        justify-content: center;
    }
    #details .box .header .sub .date{
        margin-right:20px;
    }
    #details .box .content{
        text-align:left;
        padding:10px;
    }
</style>