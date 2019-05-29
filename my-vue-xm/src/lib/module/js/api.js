/**
 * Created by Administrator on 2019/5/26.
 */
import axios from 'axios';
function Api () {
    this.baseUrl = 'http://www.baidu.com/';
    this.slideUrl = this.baseUrl + 'imgList'
}

Object.assign(Api.prototype,{
    slideshow(params){
        return this.axios.get(this.slideUrl,{params:params})
    },
});

export default new Api()