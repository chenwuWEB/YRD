<!--1.创建模板-->
<template>
    <footer>
        <!--<div id="footer">-->
            <div class="copyright">
                copyright © 2018 湖北英瑞德信息技术有限公司
            </div>
        <!--</div>-->
    </footer>
</template>
<!--2.添加script-->
<script>
    export default{
        data(){
            return {
                //保存模板中要使用的数据
            }
        }
    }
</script>
<!--2.添加style-->
<style>
    /*#footer{*/
        /*background-color: #12223c;*/
    /*}*/
    .copyright{
        background-color: #12223c;
        text-align: center;
        padding: 20px;
        border-top: 1px solid #202f47;
        color: rgba(255, 255, 255, 0.6);
    }
</style>