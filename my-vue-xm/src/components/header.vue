<template>
    <header>
        <div id="header">
            <div class="left">
                <img :src="url+'img/logo.png'"/>
            </div>
            <div class="right" :class="header_active" @click="open">
                <div class="icon-bar"></div>
                <div class="icon-bar"></div>
                <div class="icon-bar"></div>
            </div>
        </div>
        <div class="mobi-navbar" :class="mobi_navbar" id="navbar">
            <ul class="navbar">
                <li class="item">
                    <router-link to="/Home">网站首页</router-link>
                </li>
                <li class="item">
                    <router-link to="/About">关于英瑞得</router-link>
                </li>
                <li class="item">
                    <router-link to="/Business" href="#">业务范畴</router-link>
                </li>
                <li class="item">
                    <router-link to="/Case">公司案例</router-link>
                </li>
                <li class="item">
                    <router-link to="/Recruitment">招聘信息</router-link>
                </li>
                <li class="item">
                    <router-link to="/News">新闻中心</router-link>
                </li>
                <li class="item">
                    <router-link to="/Contact">联系我们</router-link>
                </li>
            </ul>
        </div>
    </header>
</template>

<script>
    export default{
        data(){
            return {
                url: this.COMMON.url,
                mobi_navbar:{
                    open:false
                },
                header_active:{
                    active:false
                }
            //保存模板中要使用的数据
    }
        },
        methods:{
            open:function(){
                if(!this.mobi_navbar.open){
                    this.mobi_navbar.open=true;
                    this.header_active.active=true;
                }else{
                    this.mobi_navbar.open=false;
                    this.header_active.active=false;
                }
            }
        }
    }
</script>

<style>
    #header{
        display: flex;
        justify-content: space-between;
        z-index: 99;
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 50px;
        background-color: #fff;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    }
    #header .left{
         height: 100%;
         padding-top: 5px;
         padding-left: 10px;
     }
    #header .left img{
        height:40px;
    }
    img {
        line-height: 1;
        font-size: 0;
        vertical-align: top;
        height: auto;
        max-width: 100%;
    }
    #header .right{
        position: absolute;
        top: 11px;
        right: 15px;
        /*z-index: 100;*/
        cursor: pointer;
        width: 25px;
        /*-webkit-transform: translate3d(0, -50%, 0);*/
    }
    #header .right .icon-bar{
        width: 25px;
        height: 3px;
        border-radius: 1px;
        background: #232323;
        margin-bottom: 6px;
        position: relative;
        -webkit-transition: all 700ms cubic-bezier(0.77, 0, 0.175, 1);
        -moz-transition: all 700ms cubic-bezier(0.77, 0, 0.175, 1);
        -o-transition: all 700ms cubic-bezier(0.77, 0, 0.175, 1);
        transition: all 700ms cubic-bezier(0.77, 0, 0.175, 1);
        -webkit-transition-timing-function: cubic-bezier(0.77, 0, 0.175, 1);
        -moz-transition-timing-function: cubic-bezier(0.77, 0, 0.175, 1);
        -o-transition-timing-function: cubic-bezier(0.77, 0, 0.175, 1);
        transition-timing-function: cubic-bezier(0.77, 0, 0.175, 1);
        -webkit-transform-origin: center left;
        -moz-transform-origin: center left;
        -ms-transform-origin: center left;
        -o-transform-origin: center left;
        transform-origin: center left;
    }
    #header .right .icon-bar:nth-child(2) {
        width: 20px;
    }
    #header .right .icon-bar:nth-child(3) {
        width: 15px;
    }
    #header .right.active .icon-bar:nth-child(1) {
        background-color: #232323;
        width: 25px;
        -webkit-transform: rotate(405deg);
        -moz-transform: rotate(405deg);
        -ms-transform: rotate(405deg);
        transform: rotate(405deg);
    }
    #header .right.active .icon-bar:nth-child(2) {
        -webkit-transform: translate(-25px, 0);
        -moz-transform: translate(-25px, 0);
        -ms-transform: translate(-25px, 0);
        transform: translate(-25px, 0);
        opacity: 0;
    }
    #header .right.active .icon-bar:nth-child(3) {
        background-color: #232323;
        width: 25px;
        -webkit-transform: rotate(-45deg);
        -moz-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
        transform: rotate(-45deg);
    }
    .mobi-navbar{
        z-index: 98;
        padding-top: 50px;
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        opacity: 0;
        visibility: hidden;
        transition: .5s;
    }
    .mobi-navbar .navbar{
        background-color: #fff;
    }
    .mobi-navbar .navbar .item a{
        display: block;
        height: 54px;
        line-height: 54px;
        text-align: center;
        color: #000;
        font-size: 15px;
        border-top: 1px solid #f1f1f1;
    }
    .open{
        opacity: 1;
        visibility: visible;
    }
</style>