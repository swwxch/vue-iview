<template>
    <div>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        data() {
            return {

            };
        },
        mounted() {
            console.log("app el已挂载，$el可用"+this.$el);
        },
        beforeDestroy() {

        },
        methods: {

        }
    };
</script>