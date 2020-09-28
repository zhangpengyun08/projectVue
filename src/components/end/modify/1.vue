<template>
    <div>
        <p>11111</p>
        <!-- 两种传参方式 path: '/404/:name', 路径？age='20'-->
        <p>{{$route.params.name}}</p>
        <p>{{$route.query.age}}</p>
        <router-link to="/route/王花花">王花花</router-link>
        <router-link to="/route/王花花2">王花花2</router-link>
        <router-view></router-view>
        <p @click="openDetil">打开详情</p>
    </div>
</template>
<style scoped>

</style>
<script>
export default {
    data(){
        return {

        }
    },
    methods:{
        openDetil(){
            this.$router.push({
                path: '/detail',
                
            })
        }
    }
}
</script>