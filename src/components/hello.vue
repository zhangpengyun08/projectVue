<template>
    <div class="hello">
        {{ ip }}
        <p id="demo1"></p>
        <p id="demo2"></p>
        <p id="demo3"></p>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    console.log(mapState(['ip']))
	export default {
		name: 'hello',
		data() {
			return {
				msg: 'hello'
			}
        },
        computed:{
            ...mapState({
                ip: state => state.user.ip
            })
        }
        ,
        mounted() {
            let arr = ['qq','aa','uu'];
            let x = arr.keys();
            document.getElementById("demo1").innerHTML = x.next().value;
            document.getElementById("demo2").innerHTML = x.next().value;
            document.getElementById("demo3").innerHTML = x.next().value;
            console.log(this.ip)
        },
        methods: {

        }
	}
</script>

<style lang="scss" scoped>
    .hello {
        color: #607dc9;
        font-size: 30px;
        font-weight: bold;
        line-height: 200px;
        text-align: center;
    }
</style>

