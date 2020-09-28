<template>
    <div>
        <!-- <p>我叫：{{$route.params.name}}</p>
        <router-link :to="'/route/' + $route.params.name + '/more'">更多</router-link> -->
        <div>我叫：{{$route.params.name}}</div>
        <router-link :to="'/route/' + $route.params.name + '/more'">更多信息</router-link>
        <router-view></router-view>
    </div>
</template>
<style scoped>

</style>
<script>
export default {
    
}
</script>