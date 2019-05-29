<!--1.创建模板-->
<template>
    <div id="news">
        <!--引入header组件-->
        <my-header></my-header>
        <div id="main">
            <div class="tabs">
                <a href="#" class="item active">
                    <div class="tit">新闻中心</div>
                </a>
            </div>
            <div class="box">
                <div class="list">
                    <router-link to="/Details" href="#" class="item" v-for="(elem,i) of news_list" :key="i">
                        <img :src="url+elem.img_url"/>
                        <div class="info">
                            <div class="tit">{{elem.title}}</div>
                            <div class="content">{{elem.content}}</div>
                            <div class="date">{{elem.ytime | Date}}</div>
                        </div>
                    </router-link>
                </div>
                <button type="button" class="button" @click="loadMore">加载更多</button>
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
    import {Toast} from "mint-ui"
    export default{
        data(){
            return {
                url: this.COMMON.url,
                news_list:[],
                pno:1,
                pageSize:5,
                hasMore:true
                //保存模板中要使用的数据
            }
        },
        components:{
            myHeader,
            myFooter
        },
        methods:{
            yrdnews(){
                var url=this.url;
                url+="newsList";
                this.axios.get(url,{
                    params:{
                        pno:this.pno,
                        pageSize:this.pageSize
                    }
                }).then(result=>{
                    this.news_list=result.data.data
            })
         },
            loadMore(){
                if(this.hasMore==false){
                    Toast("已经没有更多的数据")
                    return;
                }
                this.pno++;
                var url=this.url;
                url+="newsList";
                // 发送ajax请求
                this.axios.get(url,{
                    params:{
                        pno:this.pno,
                        pageSize:this.pageSize
                    }
                }).then(result=>{
                    this.news_list=result.data.data
//                    this.news_list=this.news_list.concat(result.data.data)
                if(this.pno>=result.data.pageCount){
                    this.hasMore=false;
                }
            })
            }
        },
        created(){
            this.yrdnews();
        }
    }
</script>
<!--2.添加style-->
<style scoped>
    #news{
        margin-top:50px;
    }
    #news #main{
        padding:20px 10px 40px;
        min-height:85vh;
    }
    #news #main .tabs{
        display:flex;
        flex-wrap:wrap;
        justify-content: center;
    }
    #news #main .tabs .item{
        margin-bottom:15px;
        display:flex;
        justify-content: center;
    }
    #news #main .tabs .item.active .tit{
        color:#fff;
        background-color:#2984ca;
    }
    #news #main .tabs .item .tit{
        padding:7px 15px;
    }
    #news .box{
        padding: 15px 10px;
    }
    #news .box .list .item{
        display: flex;
        padding: 10px 0;
        border-bottom: 1px solid #d3d3d3;
    }
    #news .box .list{
        text-align: left;
    }
    #news .box .list .item img{
        width: 125px;
        height: 80px;
        margin-right: 20px;
    }
    #news .box .list .item .info .tit{
        margin-bottom: 5px;
        font-size: 15px;
        font-weight:bold;
    }
    #news .box .list .item .info .content{
        margin-bottom: 7px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp:2;
        -webkit-box-orient: vertical;
        line-height: 1.4;
    }
    #news .box .list .item .info .date{
        color: #999;
    }
    #news .box .button{
        padding: 0 10px;
        width:100%;
        height:40px;
        border:none;
        margin-bottom:10px;
        outline: none;
        color:#fff;
        background-color:#2984ca;
    }
</style>