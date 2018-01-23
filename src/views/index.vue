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
                    <img src="https://raw.githubusercontent.com/iview/iview/master/assets/logo.png">
                </h1>
                <h2>
                    <p>{{message}}</p>
                    <Button type="ghost" @click="handleStart">Start iView</Button>
                </h2>
            </Col>
            <Col span="12">
            <Button>Default</Button>
            <Button type="primary">Primary</Button>
            <Button type="ghost">Ghost</Button>
            <Button type="dashed">Dashed</Button>
            <Button type="text">Text</Button>
            <br><br>
            <Button type="info">Info</Button>
            <Button type="success">Success</Button>
            <Button type="warning">Warning</Button>
            <Button type="error">Error</Button>

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
                switch1:false
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
                this.$Message.info('开关状态：' + status);
            }
        }
    };
</script>