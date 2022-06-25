<template>
    <main class="right-side">
        <li v-for="item of articles" :key="item._id">
            <h3>
                <a>{{item.title}}</a>
            </h3>
            <div class="article_info">
                <div>
                    <p>{{item.abstract}}</p>
                    <p class="autor">
                        <span>作者：jiaozh1</span>
                        <span>分类：【<a href="{ _id: 62b12a7084ba3d0de83c0702, name: '前端知识点' }.html">前端知识点</a>】</span>
                        <span>浏览（<a href="/">5</a>）</span>
                        <span>评论（<a href="/">0</a>）</span>
                        <a class="read_more">阅读更多</a>
                    </p>
                </div>
                <i>
                    <img class="article_img" src="images/photos.png"/>
                </i>
            </div>
        </li>
    </main>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'RightSide',
    data() {
        return {
            articles: [
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
.right-side {
    li {
        list-style: none;
        padding: 10px;
        background: rgba(255,255,255,0.8);
        padding: 15px;
        overflow: hidden;
        color: #797b7c;
        margin-bottom: 20px;
        h3 {
            font-size: 16px;
            line-height: 25px;
            text-shadow: #fff 1px 1px 1px;
            font-weight: bold;
            a {
                color: #222;
                cursor: pointer;
            }
        }
        .article_info {
            display: flex;
            .article_img {
                width: 100px;
                height: 100px;
                margin-left: 15px;
            }
            p {
                margin-top: 15px;
                flex: 0 1 auto;
            }
            .autor {
                span {
                    a {
                        color: #759b08;
                    }
                }
                .read_more {
                    float: right;
                    color: #12b7de;
                    cursor: pointer;
                }
            }
        }
    }
}
</style>