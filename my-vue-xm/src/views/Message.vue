<!--1.创建模板-->
<template>
    <div id="message">
        <!--引入header组件-->
        <my-header></my-header>
        <div id="main">
            <!--选项卡-->
            <div class="tabs">
                <router-link to="/Contact" class="item">
                    <div class="tit">联系我们</div>
                </router-link>
                <a href="#" class="item active">
                    <div class="tit">在线留言</div>
                </a>
            </div>
            <!--表单-->
            <div class="box">
                <form action method class="message_form">
                    <input type="text" placeholder="姓名："/>
                    <input type="text" placeholder="邮箱："/>
                    <input type="text" placeholder="电话："/>
                    <input type="text" placeholder="地址："/>
                    <textarea name="" placeholder="内容："></textarea>
                    <input type="submit" class="submit"/>
                </form>
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
    #message{
        margin-top:50px;
    }
    #message #main{
        padding:20px 10px 40px;
        min-height:85vh;
    }
    /*选项卡*/
    #message #main .tabs{
        display:flex;
        flex-wrap:wrap;
        justify-content: center;
        margin-bottom:15px;
    }
    #message #main .tabs .item{
        margin:0 15px 15px 15px;
        display:flex;
        justify-content: center;
    }
    #message #main .tabs .item.active .tit{
        color:#fff;
        background-color:#2984ca;
    }
    #message #main .tabs .item .tit{
        padding:7px 15px;
    }
    /*表单*/
    #message #main .box .message_form input,#message #main .box .message_form textarea{
        padding: 0 10px;
        width:100%;
        height:40px;
        border:none;
        background-color:#f6f6f6;
        margin-bottom:10px;
        outline: none;
    }
    #message #main .box .message_form textarea{
        padding: 10px;
        height:200px;
    }
    #message #main .box .message_form .submit{
        color:#fff;
        background-color:#2984ca;
    }
</style>