<template>
    <div>
        <!-- 有子级 -->
        <el-submenu :index="item.url" v-if="item.children">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{item.name}}</span>
            </template>
            <menuItem
                v-for="(itemChild,indexChild) in item.children"
                :key="indexChild"
                :item="itemChild"
            />
        </el-submenu>
        <!-- 无子级 -->
        <el-menu-item :index="item.url" v-else>
            <i class="el-icon-menu"></i>
            <span slot="title">{{item.name}}</span>
        </el-menu-item>
    </div>
</template>
<script>
export default {
    name:'menuItem',
    props:['item'],
    data() {
        return {
            
        }
    },
    methods: {
      
    }
}
</script>
<style scoped>

</style>