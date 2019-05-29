<!--1.创建模板-->
<template>
    <div id="contact">
        <!--引入header组件-->
        <my-header></my-header>
        <div id="main">
            <!--选项卡-->
            <div class="tabs">
                <a href="#" class="item active">
                    <div class="tit">联系我们</div>
                </a>
                <router-link to="/Message" class="item">
                    <div class="tit">在线留言</div>
                </router-link>
            </div>
            <!--地图-->
            <div class="map">
                <div class="map_box" ref="map_box"></div>
            </div>
            <!--联系我们-->
            <div class="contact">
                <div class="list">
                    <div class="item">
                        <img :src="url+'img/ic-call2.png'"/>
                        <span>联系我们：027-59504233</span>
                    </div>
                    <div class="item">
                        <img :src="url+'img/ic-mail2.png'"/>
                        <span>简历投递邮箱：wangjing@hbinitiate.com</span>
                    </div>
                    <div class="item">
                        <img :src="url+'img/ic-posi2.png'"/>
                        <span>公司地址：武汉市俊源美佳创业园A栋611-615室</span>
                    </div>
                </div>
            </div>
            <!--二维码-->
            <div class="code">
                <div class="pic">
                    <img :src="url+'img/code.jpg'"/>
                </div>
                <div class="tip">
                    手机扫一扫<br/>关注我们的公众号
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
        methods:{
            map(){
                let map =new BMap.Map(this.$refs.map_box); // 创建Map实例
                map.centerAndZoom(new BMap.Point(114.242466, 30.627564), 18);// 初始化地图,设置中心点坐标（经纬度/城市的名称）和地图级别
                map.addControl(new BMap.MapTypeControl({//添加地图类型控件
                    mapTypes:[
                        BMAP_NORMAL_MAP,
                        BMAP_HYBRID_MAP
                    ]}));
                map.setCurrentCity("武汉");// 设置地图显示的城市 此项是必须设置的
                map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
                map.enableDoubleClickZoom(true);
            }
        },
        mounted(){
            this.map();
        },
        components:{
            myHeader,
            myFooter
        }
    }
</script>
<!--2.添加style-->
<style scoped>
    #contact{
        margin-top:50px;
    }
    #contact #main{
        padding:20px 10px 40px;
        min-height:85vh;
    }
    /*选项卡*/
    #contact #main .tabs{
        display:flex;
        flex-wrap:wrap;
        justify-content: center;
        margin-bottom: 15px;
    }
    #contact #main .tabs .item{
        margin:0 15px 15px 15px;
        display:flex;
        justify-content: center;
    }
    #contact #main .tabs .item.active .tit{
        color:#fff;
        background-color:#2984ca;
    }
    #contact #main .tabs .item .tit{
        padding:7px 15px;
    }
    /*地图*/
    #contact #main .map{
        width: 100%;
        margin-bottom: 20px;
    }
    #contact #main .map .map_box{
        height:300px;
        overflow: hidden;
    }
    /*联系我们*/
    #contact #main .contact .list{
        text-align: left;
    }
    #contact #main .contact .list .item{
        margin-bottom: 20px;
        line-height: 20px;
    }
    #contact #main .contact .list .item img{
        margin-right: 10px;
        vertical-align: middle;
    }
    /*二维码*/
    #contact #main .code .pic{
        width: 85px;
        height: 85px;
        margin:0 auto 13px;
    }
    #contact #main .code .tip{
        line-height:2;
    }
</style>