<style scoped>
    .index {
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        text-align: center;
    }

    .index h1 {
        height: 150px;
    }

    .index h1 img {
        height: 100%;
    }

    .index h2 {
        color: #666;
        margin-bottom: 200px;
    }

    .index h2 p {
        margin: 0 0 50px;
    }

    .index .ivu-row-flex {
        height: 100%;
    }
</style>
<template>
    <div class="index">
        <Row type="flex" justify="center" align="middle">
            <Col span="12">
                <h1>
                    <img  v-bind:src="imgUrl"/>
                </h1>
                <h1>
                    <Button type="ghost"  v-on:click="changeImg(imgUrl)">变换图片</Button>
                </h1>
                <h2>
                    <p>{{message}}</p>
                    <Button type="ghost" @click="handleStart">Start iView</Button>
                </h2>
            </Col>
            <Col span="12">
            <Button >{{message.split(',').reverse().join(',')}}</Button>
            <Button type="primary">{{date | formatDateA(message,messageInfo)}}</Button>
            <Button type="ghost">Ghost</Button>
            <Button type="dashed">Dashed</Button>
            <Button type="text">Text</Button>
            <br><br>
            <Button type="info">Info</Button>
            <Button type="success">Success</Button>
            <Button type="warning">Warning</Button>
            <Button v-if="show" type="error">Error</Button>
            <span v-html="link"></span>
            <div>{{ isOk ? '确定':'取消' }}</div>
            <Switch v-model="switch1" @on-change="change"></Switch>
            <span v-bind:title=message>鼠标悬停提示3信息</span>
            </Col>
        </Row>
    </div>
</template>
<script>
    import  dateUtil from "iview/src/utils/date";
    export default {
        data:function(){
            return{
                message:"页面加,载于"+new Date().toLocaleString(),
                messageInfo:"信息a",
                value1:0,
                switch1:true,
                date:new Date(),
                link:'<a href="#"> 这是一个链接</a>',
                isOk:false,
                show:true,
                imgUrl:"http://pic29.photophoto.cn/20131204/0034034499213463_b.jpg",
                tempUrl:""
            }
        },
        created:function(){
            console.log("尚未挂载，$el不可用，但是数据可读"+this.message);
        },
        mounted:function(){
            console.log("el已挂载，$el可用"+this.$el);
            let _this = this;
            /*this.timeer = setInterval(function(){
                _this.date= new Date();
            },1000)
            console.log(this.timeer)*/
        },
        beforeUpdate:function(){
            console.log("view数据被更新"+this.switch1);
        },
        beforeDestroy:function(){
          if(this.timeer){
              clearInterval(this.timeer);//vue实例销毁，清除定时器
          }
        },
        methods: {
            handleStart() {
                this.$Modal.info({
                    title: 'Bravo',
                    content: 'Now, enjoy the convenience of iView.'
                });
            },
            change (status) {
                console.log(this);
                this.show = status;
                this.$Message.info('开关状态：' + status);
            },
            changeImg(url){
                console.info(url)
                let imgUrla  = "http://pic32.photophoto.cn/20140711/0011024086081224_b.jpg";
                if(url === imgUrla){
                    this.imgUrl = this.tempUrl;
                }else{
                    this.imgUrl = imgUrla;
                    this.tempUrl = url;
                }
            }
        },
        filters: {
            formatDateA:function (value,message,messageInfo) {
                console.info(value+"aa"+message+"bb"+messageInfo);
                let date = dateUtil.format(value,'yyyy-MM-dd HH:mm:ss');
               // let value = this.iView.formatDate(this.date, "yyyy-MM-dd HH:mm:ss")
                return date;
            }
        }
    };
</script>
