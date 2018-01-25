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

                </h1>
                <h2>
                    <p>{{message}}</p>
                    <Button type="ghost" @click="handleStart">Start iView</Button>
                </h2>
            </Col>
            <Col span="12">
            <Button >{{message}}</Button>
            <Button type="primary">{{date}}</Button>
            <Button type="ghost">Ghost</Button>
            <Button type="dashed">Dashed</Button>
            <Button type="text">Text</Button>
            <br><br>
            <Button type="info">Info</Button>
            <Button type="success">Success</Button>
            <Button type="warning">Warning</Button>
            <Button type="error">Error</Button>
            <span v-html="link"></span>
            <div>{{ isOk ? '确定':'取额消' }}</div>
            <Switch v-model="switch1" @on-change="change"></Switch>
            <span v-bind:title=message>鼠标悬停提示信息</span>
            </Col>
        </Row>
    </div>
</template>
<script>
    export default {
        data:function(){
            return{
                message:"页面加载于"+new Date().toLocaleString(),
                value1:0,
                switch1:false,
                date:new Date().toLocaleString(),
                link:'<a href="#"> 这是一个链接</a>',
                isOk:false
            }
        },
        created:function(){
            console.log("尚未挂载，$el不可用，但是数据可读"+this.message);
        },
        mounted:function(){
            console.log("el已挂载，$el可用"+this.$el);
            let _this = this;
            this.timeer = setInterval(function(){
                _this.date= new Date().toLocaleString();
            },1000)
            console.log(this.timeer)
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
                console.log(this.message);
                this.$Message.info('开关状态：' + status);
            }
        }
    };
</script>
