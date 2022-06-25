<template>
    <div class="left-side">
        <div class="card">
            <h2 class="card_title">关于我</h2>
            <div class="card_info">
                <img class="photo" src="images/photos.png"/>
                <p class="des">
                    Jzh，女，一个90后草根女站长！12年入行，从业已经有八九年的时间。想当年我还是一枚.net程序员，兴趣的驱使，我进化成为了一个前端程序猿
                </p>
                <div class="bdsharebuttonbox"><a href="#" class="bds_qzone" data-cmd="qzone" title="分享到QQ空间"></a><a href="#" class="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></a><a href="#" class="bds_tqq" data-cmd="tqq" title="分享到腾讯微博"></a><a href="#" class="bds_renren" data-cmd="renren" title="分享到人人网"></a><a href="#" class="bds_weixin" data-cmd="weixin" title="分享到微信"></a><a href="#" class="bds_more" data-cmd="more"></a></div>
            </div>
        </div>
        <div class="card">
            <h2 class="card_title">文章分类</h2>
            <div class="card_info">
                <ul class="category_list">
                    <li v-for="item of categoryList" :key="item.type">
                        {{item.name}}({{item.count}})
                    </li>
                </ul>
            </div>
        </div>
        <div class="card">
            <h2 class="card_title">标签云</h2>
            <div class="card_info">
                <ul class="tag_ul">
                    <li class="tag_item" v-for="item of tagList" :key="item">
                        {{item}}
                    </li>
                </ul>
            </div>
        </div>
        <div class="card">
            <h2 class="card_title">推荐文章</h2>
            <div class="card_info">
                <ul class="ul_list recommand_ul">
                    <li class="tag_item" v-for="item of recommandList" :key="item._id">
                        {{item.title}}
                    </li>
                </ul>
            </div>
        </div>
        <div class="card">
            <h2 class="card_title">点击排行</h2>
            <div class="card_info">
                <ul class="ul_list rank_ul">
                    <li v-for="item of rankList" :key="item._id">
                        {{item.title}}
                    </li>
                </ul>
            </div>
        </div>


    </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'LeftSide',
    data(){
        return {
            categoryList: [
                {name:'前端技术', type: 'qianduanjishu', count: 88},
                {name:'慢生活', type: 'life', count: 6},
                {name:'兴趣爱好', type: 'hobby', count: 7},
                {name:'工程化', type: 'qianduanjishu', count: 9}
            ],
            tagList: ['前端技术', '彩铅学习', 'Html', 'Css', 'Js', 'Vue', 'Angular', 'node','响应式', 'sass'],
            rankList: [
                {_id: '11', title: 'mongodb', author: {name:'jzh'}, pv: 88, pc:8, createAt: '2022-06-21 23:06:57', abstract: '本地访问远程mongodb服务器时，访问不了， 在阿里云添加安全组规则开放出27017端口，还是不能访问，再排查是服务器防火墙没设置 firewall-cmd --zone=public --add-port=27017/tcp --permanent firewall-cmd --reload systemctl start firewalld.service'},
                {_id: '12', title: 'js学习', author: {name:'jzh'}, pv: 88, pc:8, createAt: '2022-06-21 23:06:57', abstract: '本地访问远程mongodb服务器时，访问不了， 在阿里云添加安全组规则开放出27017端口，还是不能访问，再排查是服务器防火墙没设置 firewall-cmd --zone=public --add-port=27017/tcp --permanent firewall-cmd --reload systemctl start firewalld.service'},
                {_id: '13', title: '数据绑定', author: {name:'jzh'}, pv: 88, pc:8, createAt: '2022-06-21 23:06:57', abstract: '本地访问远程mongodb服务器时，访问不了， 在阿里云添加安全组规则开放出27017端口，还是不能访问，再排查是服务器防火墙没设置 firewall-cmd --zone=public --add-port=27017/tcp --permanent firewall-cmd --reload systemctl start firewalld.service'},
                {_id: '14', title: '彩铅狗狗', author: {name:'jzh'}, pv: 88, pc:8, createAt: '2022-06-21 23:06:57', abstract: '本地访问远程mongodb服务器时，访问不了， 在阿里云添加安全组规则开放出27017端口，还是不能访问，再排查是服务器防火墙没设置 firewall-cmd --zone=public --add-port=27017/tcp --permanent firewall-cmd --reload systemctl start firewalld.service'},
                {_id: '15', title: 'mongodb服务远程连接', author: {name:'jzh'}, pv: 88, pc:8, createAt: '2022-06-21 23:06:57', abstract: '本地访问远程mongodb服务器时，访问不了， 在阿里云添加安全组规则开放出27017端口，还是不能访问，再排查是服务器防火墙没设置 firewall-cmd --zone=public --add-port=27017/tcp --permanent firewall-cmd --reload systemctl start firewalld.service'},
                {_id: '16', title: 'mongodb服务远程连接', author: {name:'jzh'}, pv: 88, pc:8, createAt: '2022-06-21 23:06:57', abstract: '本地访问远程mongodb服务器时，访问不了， 在阿里云添加安全组规则开放出27017端口，还是不能访问，再排查是服务器防火墙没设置 firewall-cmd --zone=public --add-port=27017/tcp --permanent firewall-cmd --reload systemctl start firewalld.service'},
                {_id: '17', title: 'mongodb服务远程连接', author: {name:'jzh'}, pv: 88, pc:8, createAt: '2022-06-21 23:06:57', abstract: '本地访问远程mongodb服务器时，访问不了， 在阿里云添加安全组规则开放出27017端口，还是不能访问，再排查是服务器防火墙没设置 firewall-cmd --zone=public --add-port=27017/tcp --permanent firewall-cmd --reload systemctl start firewalld.service'}
            ],
            recommandList: [
                {_id: '11', title: 'mongodb', author: {name:'jzh'}, pv: 88, pc:8, createAt: '2022-06-21 23:06:57', abstract: '本地访问远程mongodb服务器时，访问不了， 在阿里云添加安全组规则开放出27017端口，还是不能访问，再排查是服务器防火墙没设置 firewall-cmd --zone=public --add-port=27017/tcp --permanent firewall-cmd --reload systemctl start firewalld.service'},
                {_id: '12', title: 'js学习', author: {name:'jzh'}, pv: 88, pc:8, createAt: '2022-06-21 23:06:57', abstract: '本地访问远程mongodb服务器时，访问不了， 在阿里云添加安全组规则开放出27017端口，还是不能访问，再排查是服务器防火墙没设置 firewall-cmd --zone=public --add-port=27017/tcp --permanent firewall-cmd --reload systemctl start firewalld.service'},
                {_id: '13', title: '数据绑定', author: {name:'jzh'}, pv: 88, pc:8, createAt: '2022-06-21 23:06:57', abstract: '本地访问远程mongodb服务器时，访问不了， 在阿里云添加安全组规则开放出27017端口，还是不能访问，再排查是服务器防火墙没设置 firewall-cmd --zone=public --add-port=27017/tcp --permanent firewall-cmd --reload systemctl start firewalld.service'},
                {_id: '14', title: '彩铅狗狗', author: {name:'jzh'}, pv: 88, pc:8, createAt: '2022-06-21 23:06:57', abstract: '本地访问远程mongodb服务器时，访问不了， 在阿里云添加安全组规则开放出27017端口，还是不能访问，再排查是服务器防火墙没设置 firewall-cmd --zone=public --add-port=27017/tcp --permanent firewall-cmd --reload systemctl start firewalld.service'},
            ]
        }
    }
})
</script>
<style lang="scss" scoped>
.card {
    border-radius: 2px;
    margin-bottom: 20px;
    .photo {
        float: left;
        margin: 0 10px 10px 0;
        height: 100px;
    }
    .card_title {
        background: #fff;
        padding: 6px 15px;
        font-weight: bold;
    }
    .card_info {
        padding: 10px 10px 20px;
        background: rgba($color: #fff, $alpha: .5);
        .des {
            line-height: 24px;
            font-size: 14px;
        }
        .tag_ul {
            display: flex;
            flex-wrap: wrap;
            @include background-color();
            .tag_item {
                padding: 5px 15px;
                margin: 6px 10px 0;
                border-radius: 3px;
                color: #fff;
                cursor: pointer;
            }
        }
        .category_list {
            display: flex;
            flex-wrap: wrap;
            li {
                width: 50%;
                padding: 3px 10px;
                box-sizing: border-box;
            }
        }
        .ul_list li {
            font-size: 14px;
            line-height: 28px;
            margin-bottom: 12px;
            display: block;
            border-radius: 4px;
            background: #efefef;
            padding: 4px 12px 4px 30px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            position: relative; 
            transition: all .2s ease;
            cursor: pointer;
        }
        .ul_list li:before {
            position: absolute;
            content: "";
            width: 3px;
            height: 3px;
            background: #000;
            border-radius: 10px;
            left: 15px;
            top: 20px;
        }
        .ul_list li:hover {
            background: #f2f2f2;
            box-shadow: 0 0 10px #ccc;
            transition: all .2s ease;
        }
    }
}
</style>