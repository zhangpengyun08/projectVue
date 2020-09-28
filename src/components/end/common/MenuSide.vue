<template>
    <div>
        <el-menu
            :default-active="$route.path" exact
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            @select="selActive"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b" router>
            <menuList
                v-for="(item, index) in items"
                :key="index"
                :item = 'item'
            >
            </menuList>
        </el-menu>
    </div>
</template>
<script>
import menuList from './menuList'
export default {
    components:{
        menuList,
    },
    data() {
        return {
            items: [
                {
                    name: '首页',
                    url: '/index'
                },
                {
                    name: '主页',
                    url: '/home',
                    children: [
                        {
                            name: '404',
                            url: '/404'
                        },
                        {
                            name: '1',
                            url: '/1'
                        },
                        {
                            name: '2',
                            url: '/2'
                        },
                        {
                            name: '3',
                            url: '/3'
                        }
                    ]
                }
            ]
        }
    },
    mounted(){
        console.log(this.$route.path)
    },
    methods: {
        selActive(val){
            console.log(val)
        },
        handleOpen(key, keyPath) {
            console.log('open')
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log('close')
            console.log(key, keyPath);
        }
    }
}
</script>
<style scoped>

</style>