<template>
    <div class="home">
        <el-container class="admin_body_container">
            <el-header>
                <Header></Header>
            </el-header>
            <el-container class="admin_con_container">
                <el-aside width="200px">
                    <Menuside></Menuside>
                </el-aside>
                <el-main>
                  <Main></Main>
                </el-main>
            </el-container>
            <el-footer>Footer</el-footer>
        </el-container>
    </div>
</template>

<script>
import Menuside from '@C/end/common/MenuSide'
import Header from '@C/end/common/Header'
import Main from '@C/end/common/main'
	export default {
		name: 'Home',
    components: {
      Menuside,
      Header,
      Main
    }
	}
</script>

<style lang="scss">
    .home{
      height: 100vh;
    }
    .admin_body_container{
      height: 100%;
    }
    .admin_con_container{
      height: calc(100% - 100px);
    }
</style>
<style lang="scss" scoped>
  .home ::v-deep{
    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
      }
      
      .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 200px;
      }
      
      .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
      }
      
      body > .el-container {
        margin-bottom: 40px;
      }
      
      .el-container:nth-child(5) .el-aside,
      .el-container:nth-child(6) .el-aside {
        line-height: 260px;
      }
      
      .el-container:nth-child(7) .el-aside {
        line-height: 320px;
      }
    }
</style>

