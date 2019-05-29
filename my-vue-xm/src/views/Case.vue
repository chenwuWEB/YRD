<!--1.创建模板-->
<template>
    <div id="case">
        <!--引入header组件-->
        <my-header></my-header>
        <div id="main">
            <div class="tabs">
                <a href="#" class="item active">
                    <div class="tit">通信工程案例</div>
                </a>
                <a href="#" class="item">
                    <div class="tit">ICT系统集成案例</div>
                </a>
                <a href="#" class="item">
                    <div class="tit">机房工程案例</div>
                </a>
                <a href="#" class="item">
                    <div class="tit">IT运维服务案例</div>
                </a>
            </div>
            <div id="news">
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
                url: this.COMMON.url,
                news_list:[],
                pno:1,
                pageSize:5
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
            }
        },
        created(){
            this.yrdnews();
        }
    }
</script>
<!--2.添加style-->
<style scoped>
    #case{
        margin-top:50px;
    }
    #case #main{
        padding:20px 10px 40px;
        min-height:85vh;
    }
    #case #main .tabs{
        display:flex;
        flex-wrap:wrap;
        justify-content: center;
    }
    #case #main .tabs .item{
        margin-bottom:15px;
        display:flex;
        justify-content: center;
        width:50%;
    }
    #case #main .tabs .item.active .tit{
        color:#fff;
        background-color:#2984ca;
    }
    #case #main .tabs .item .tit{
        padding:7px 15px;
    }
    #case #news{
        padding: 15px 10px;
    }
    #case #news .list .item{
        display: flex;
        padding: 10px 0;
        border-bottom: 1px solid #d3d3d3;
    }
    #case #news .list{
        text-align: left;
    }
    #case #news .list .item img{
        width: 125px;
        height: 80px;
        margin-right: 20px;
    }
    #case #news .list .item .info .tit{
        margin-bottom: 5px;
        font-size: 15px;
        font-weight:bold;
    }
    #case #news .list .item .info .content{
        margin-bottom: 7px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp:2;
        -webkit-box-orient: vertical;
        line-height: 1.4;
    }
    #case #news .list .item .info .date{
        color: #999;
    }
</style>