<template>
  <div id="home">
     <!--引入header组件 -->
    <my-header></my-header>
    <!--轮播图-->
    <mt-swipe :auto="3000">
      <mt-swipe-item v-for="(elem,i) of img_list" :key="i">
        <img :src="elem.img_url"/>
      </mt-swipe-item>
    </mt-swipe>
    <!--主要业务-->
    <div id="service">
      <div class="title">主要业务</div>
      <div class="list">
        <router-link to="/Business" class="item">
          <img :src="url+'img/circle-1.png'"/>
          <div class="tit">通信工程</div>
        </router-link>
        <router-link to="/Business" class="item">
          <img :src="url+'img/circle-2.png'"/>
          <div class="tit">ICT系统集成</div>
        </router-link>
        <router-link to="/Business" class="item">
          <img :src="url+'img/circle-3.png'"/>
          <div class="tit">机房工程</div>
        </router-link>
        <router-link to="/Business" class="item">
          <img :src="url+'img/circle-4.png'"/>
          <div class="tit">IT运维服务</div>
        </router-link>
      </div>
    </div>
    <!--成功案例-->
    <div id="case">
      <div class="title">成功案例</div>
      <div class="list">
        <router-link to="/Case">通信工程案例</router-link>
        <router-link to="/Case">ICT系统集成案例</router-link>
        <router-link to="/Case">机房工程案例</router-link>
        <router-link to="/Case">IT运维服务案例</router-link>
      </div>
    </div>
    <!--新闻中心-->
    <div id="news">
      <div class="title">新闻中心</div>
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
    <!--业务优势-->
    <div id="adv">
      <div class="title">业务优势</div>
      <div class="list">
        <div class="item">
          <img :src="url+'img/adv-1.png'"/>
          <div class="tit">专业的技术</div>
          <div class="info">拥有众多认证工程师</div>
        </div>
        <div class="item">
          <img :src="url+'img/adv-2.png'"/>
          <div class="tit">优质的服务</div>
          <div class="info">拥有众多认证工程师</div>
        </div>
        <div class="item">
          <img :src="url+'img/adv-3.png'"/>
          <div class="tit">资格认证</div>
          <div class="info">拥有众多认证工程师</div>
        </div>
        <div class="item">
          <img :src="url+'img/adv-4.png'"/>
          <div class="tit">合作伙伴</div>
          <div class="info">拥有众多认证工程师</div>
        </div>
      </div>
    </div>
    <div id="footer">
      <div class="tags">
        <div class="list">
          <div class="item">
            <img :src="url+'img/ser-1.png'"/>
            <span>7X24小时售后服务</span>
          </div>
          <div class="item">
            <img :src="url+'img/ser-2.png'"/>
            <span>专业技术顾问</span>
          </div>
          <div class="item">
            <img :src="url+'img/ser-3.png'"/>
            <span>优质的合作伙伴</span>
          </div>
          <div class="item">
            <img :src="url+'img/ser-4.png'"/>
            <span>多对一后台管家服务</span>
          </div>
        </div>
      </div>
      <!--联系我们-->
      <div class="contact">
        <div class="list">
          <div class="item">
            <img :src="url+'img/ic-call.png'"/>
            <span>联系我们：027-59504233</span>
          </div>
          <div class="item">
            <img :src="url+'img/ic-mail.png'"/>
            <span>简历投递邮箱：wangjing@hbinitiate.com</span>
          </div>
          <div class="item">
            <img :src="url+'img/ic-posi.png'"/>
            <span>公司地址：武汉市俊源美佳创业园A栋611-615室</span>
          </div>
        </div>
      </div>
      <!-- 引入footer组件 -->
      <my-footer></my-footer>
    </div>
  </div>
</template>

<script>
  import myHeader from "@/components/header.vue"
  import myFooter from "@/components/footer.vue"
  export default{
    data(){
      return {
        url: this.COMMON.url,
        img_list:[],
        news_list:[],
        pno:1,
        pageSize:4
      //保存模板中要使用的数据
      }
    },
    components:{
      myHeader,
      myFooter
    },
    methods:{
      slideshow(){
        var url=this.url;
        url+="imgList";
        this.axios.get(url,{}).then(result=>{
          this.img_list=result.data.data
        })
      },

//      slideshow () {
//        this.Api.slideshow().then(result =>{
//          this.img_list=result.data.data
//        });
//      },

      yrdnews(){
        var url=this.url;
        url+="newsList";
        this.axios.get(url,{}).then ( (result ) => {
          this.news_list=result.data.data
        })
      }
    },
    created(){
      this.slideshow();
      this.yrdnews();
    }
  }
</script>

<style>
  /*轮播图*/
  #home .mint-swipe{
    margin-top:50px;
    height:180px;
  }
  #home .mint-swipe img{
    width: 100%;
    height:100%;
  }
/*主要业务*/
  #home #service{
    background-image: url(http://127.0.0.1:3000/img/ser-bg-2.png);
    padding: 20px 0;
  }
  #home #service .title{
    color: #fff;
    text-align: center;
    font-size: 18px;
    margin-bottom: 20px;
    font-weight: bold;
  }
  #home #service .list{
    display:flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  #home #service .list .item{
    margin: 15px 0;
    flex: 0 0 50%;
  }
  #home #service .list .item img{
    width:114px;
    height:114px;
  }
  #home #service .list .item .tit{
    font-size:14px;
    color:#fff;
    margin-top: 20px;
  }
  /*成功案例*/
  #home #case{
    padding: 30px 0;
    background:url(http://127.0.0.1:3000/img/bg-squre.png) no-repeat center bottom;
    background-size: 100% auto;
  }
  #home #case .title {
    color: #333;
    text-align: center;
    font-size: 18px;
    margin-bottom: 20px;
    font-weight: bold;
  }
  #home #case .list a{
    display: block;
    background:#1d2663 url(http://127.0.0.1:3000/img/case-bg.png) no-repeat center 30px;
    background-size: 100% auto;
    font-size: 18px;
    color:#fff;
    margin: 10px;
    /*height: 80px;*/
    /*text-align: center;*/
    line-height: 80px;
  }
  /*新闻中心*/
  #home #news{
    background-color:#f3f3f3;
    padding: 20px 10px;
  }
  #home #news .title{
    color: #333;
    /*text-align: center;*/
    font-size: 18px;
    margin-bottom: 20px;
    font-weight: bold;
  }
  #home #news .list .item{
    display: flex;
    padding: 10px 0;
    border-bottom: 1px solid #d3d3d3;
  }
  #home #news .list{
    text-align: left;
  }
  #home #news .list .item img{
    width: 125px;
    height: 80px;
    margin-right: 20px;
  }
  #home #news .list .item .info .tit{
    margin-bottom: 5px;
    font-size: 15px;
    font-weight:bold;
  }
  #home #news .list .item .info .content{
    margin-bottom: 7px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp:2;
    -webkit-box-orient: vertical;
    line-height: 1.4;
  }
  #home #news .list .item .info .date{
    color: #999;
  }
  /*业务优势*/
  #home #adv{
    padding: 20px 0;
  }
  #home #adv .title{
    color: #333;
    font-size: 18px;
    margin-bottom: 20px;
    font-weight: bold;
  }
  #home #adv .list{
    display: flex;
    justify-content: space-around;
    flex-wrap:wrap;
  }
  #home #adv .list .item{
    width: 154px;
    height: 190px;
    border: 1px solid #eee;
    padding: 20px 10px;
    margin-bottom: 20px;
    transition: all .3s;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0);
  }
  #home #adv .list .item:hover{
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  }
  #home #adv .list .item img{
    height: 80px;
    margin-bottom: 10px;
  }
  #home #adv .list .item .tit{
    font-size: 15px;
    margin-bottom: 10px;
  }
  #home #adv .list .item .info{
    font-size: 10px;
    color: #999;
  }
  /*footer*/
  #home #footer .tags{
    height: 125px;
    background: url("http://127.0.0.1:3000/img/tags-bg.png") no-repeat center center;
    background-size: cover;
  }
  #home #footer .tags .list{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    text-align: left;
  }
  #home #footer .tags .list .item{
    margin-top: 20px;
    padding-left: 10px;
    flex: 0 0 50%;
  }
  #home #footer .tags .list .item img{
    width: 35px;
    margin-right: 10px;
  }
  #home #footer .tags .list .item span{
    line-height: 35px;
    color: #fff;
  }
  /*联系我们*/
  #home #footer .contact{
    background-color:#12223c;
    padding: 25px 10px;
  }
  #home #footer .contact .list{
    text-align: left;
  }
  #home #footer .contact .list .item{
    margin-bottom: 20px;
    line-height: 20px;
  }
  #home #footer .contact .list .item:last-child{
    margin: 0;
  }
  #home #footer .contact .list .item img{
    margin-right: 10px;
    vertical-align: middle;
  }
  #home #footer .contact .list .item span{
    /*line-height: 20px;*/
    color: rgba(255, 255, 255, 0.6);
  }
</style>