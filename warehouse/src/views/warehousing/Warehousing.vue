<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <userMessage></userMessage>
                <div class="btns-box">
                    <span class="header-btn" @click="ToScreen">筛选</span>
                    <el-button  type="primary" @click="ToBack">返回</el-button>
                </div>
            </el-header>
            <el-affix :offset="0">
            <el-main>
                <el-form  :inline="true" class="demo-form-inline" :model="form" label-width="120px">
                    <el-input style="border-radius: 0 0 0 0;" class="input" v-model="search" placeholder=""/>
                    <el-button class="search-btn" type="primary" @click="onSubmit">
                        <el-icon style="vertical-align: middle">
                        <Search/>
                        </el-icon>
                        <span style="vertical-align: middle"> 搜索 </span>
                    </el-button>
                </el-form>
            </el-main>
            </el-affix>
            <el-footer>
                <warehousingMsg :warehousingForm="warehousingForm"></warehousingMsg>
            </el-footer>
        </el-container>
    </div>
</template>
 
<script setup>
import router from '../../router/index.js'
import { ref, reactive } from 'vue'
import { Search } from '@element-plus/icons-vue'
import UserMessage from '../../components/home/UserMessage.vue'
import WarehousingMsg from '../../components/warehousing/WarehousingMsg.vue'


const ToScreen = () =>{
    router.push('/screen')
}
const ToBack = () =>{
    router.push('/home')
}
const warehousingForm = reactive(
    [
        // 仓库
        {   
            id: 1,
            name:'北校区仓库',
            province:'江苏省',
            city:'苏州市',
            district:'姑苏区',
            address:'北校区',
            reservoir:[
                // 库区
                {
                    warehouseId:11,
                    name:'教学楼一楼库区',
                    address: '教学楼一楼',
                    // 货架
                    shelves:[
                        {
                            name:'一号货架',
                            specifications: '6*5',
                            // 存储盒
                            shelvesBox:[
                                {
                                    identifier: '001',
                                    stuffId: '111',
                                    stuffNum: '100',
                                },
                                {
                                    identifier: '002',
                                    stuffId: '222',
                                    stuffNum: '50',
                                },
                                {
                                    identifier: '003',
                                    stuffId: '333',
                                    stuffNum: '157',
                                },
                                {
                                    identifier: '004',
                                    stuffId: '111',
                                    stuffNum: '1345',
                                },
                                {
                                    identifier: '005',
                                    stuffId: '111',
                                    stuffNum: '100',
                                },
                                {
                                    identifier: '006',
                                    stuffId: '111',
                                    stuffNum: '100',
                                },
                                {
                                    identifier: '007',
                                    stuffId: '111',
                                    stuffNum: '100',
                                },
                                {
                                    identifier: '008',
                                    stuffId: '222',
                                    stuffNum: '100',
                                },
                                {
                                    identifier: '009',
                                    stuffId: '333',
                                    stuffNum: '100',
                                },
                                {
                                    identifier: '010',
                                    stuffId: '111',
                                    stuffNum: '100',
                                },
                                {
                                    identifier: '011',
                                    stuffId: '111',
                                    stuffNum: '100',
                                },
                                {
                                    identifier: '012',
                                    stuffId: '111',
                                    stuffNum: '100',
                                },
                                {
                                    identifier: '013',
                                    stuffId: '111',
                                    stuffNum: '100',
                                },
                                {
                                    identifier: '014',
                                    stuffId: '222',
                                    stuffNum: '100',
                                },
                                {
                                    identifier: '015',
                                    stuffId: '333',
                                    stuffNum: '100',
                                },
                                {
                                    identifier: '016',
                                    stuffId: '111',
                                    stuffNum: '100',
                                },
                                {
                                    identifier: '017',
                                    stuffId: '222',
                                    stuffNum: '50',
                                },
                                {
                                    identifier: '018',
                                    stuffId: '333',
                                    stuffNum: '157',
                                },
                                {
                                    identifier: '019',
                                    stuffId: '111',
                                    stuffNum: '1345',
                                },
                                {
                                    identifier: '020',
                                    stuffId: '111',
                                    stuffNum: '100',
                                },
                                {
                                    identifier: '21',
                                    stuffId: '111',
                                    stuffNum: '100',
                                },
                                {
                                    identifier: '22',
                                    stuffId: '111',
                                    stuffNum: '100',
                                },
                                {
                                    identifier: '23',
                                    stuffId: '222',
                                    stuffNum: '100',
                                },
                                {
                                    identifier: '24',
                                    stuffId: '333',
                                    stuffNum: '100',
                                },
                                {
                                    identifier: '25',
                                    stuffId: '111',
                                    stuffNum: '100',
                                },
                                {
                                    identifier: '26',
                                    stuffId: '111',
                                    stuffNum: '100',
                                },
                                {
                                    identifier: '027',
                                    stuffId: '111',
                                    stuffNum: '100',
                                },
                                {
                                    identifier: '028',
                                    stuffId: '111',
                                    stuffNum: '100',
                                },
                                {
                                    identifier: '029',
                                    stuffId: '222',
                                    stuffNum: '100',
                                },
                                {
                                    identifier: '030',
                                    stuffId: '333',
                                    stuffNum: '100',
                                },
                            ]
                        },
                    ]
                }
            ]
        },
        {
            id: 2,
            name:'南校区仓库',
            province:'江苏省',
            city:'苏州市',
            district:'姑苏区',
            address:'南校区',
        },
    ]
)
</script>
 
<style scoped lang='less'>
 .el-header{
    height:60px;
    padding: 15px 50px 0;
    display: flex;
    justify-content: space-between;
    background-color: #e7f2ff;  
    position: fixed;
    width: 100%;
    .btns-box{
        display: flex;
    }
    /* 筛选按钮 */
    .header-btn{
        display: block;
        width: 60px;
        text-align: center;
        color: #409eff;
        height: 30px;
        line-height: 30px;
        margin-right: 20px;
        cursor: pointer;
    }
}

.el-main{
    margin-top:60px;
    padding-left: 60px;
    .demo-form-inline{
        width: 100%;
        display: flex;
        /* 搜索框 */
        .input{
            width: 500px;
            font-size: 16px;
            height: 45px;
        }
        /* 搜索 */
        .search-btn{
            height: 45px;
            width: 110px;
            font-size: 17px;
            border-radius: 0px 5px 5px 0px ;
            position: relative;
            top: 0px;
            left: -10px;
        }
    }
}
.el-footer{
    padding: 0px 60px;
}
</style>