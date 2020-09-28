<template>
    <div id="app">
        <transition name="fade" mode="out-in">
            <router-view/>
        </transition>
    </div>
</template>

<script>
	export default {
		name: 'App'
	}
</script>

<style lang="scss">
    body,html{
        margin: 0;
        padding: 0;
    }
    #app{
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
</style>
