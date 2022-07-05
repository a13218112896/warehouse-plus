<template>
    <div>
        <el-collapse v-model="Form" >
            <el-collapse-item v-for="warehouse in warehousingForm" :title="warehouse.name" :name="warehouse.index" class="form-first-title">
                <div style="padding: 0 0 0 20px">
                    <el-collapse-item v-for="reservoir in warehouse.reservoir" :title="reservoir.name" :name="reservoir.index">
                        <!-- {{reservoir.shelves}} -->
                        <div style="padding: 0 0 0 20px">
                            <el-collapse-item v-for="shelves in reservoir.shelves" :title="shelves.name" :name="shelves.index">
                                <div class="shelves-X-Box" v-for="x in Number(shelves.specifications.split('*')[1])">
                                    <div class="shelves-Y-Box" v-for="y in Number(shelves.specifications.split('*')[0])">
                                        {{shelves.shelvesBox[(x-1)*Number(shelves.specifications.split('*')[0])+y-1].identifier}}
                                    </div>
                                </div>
                            </el-collapse-item>
                        </div>
                    </el-collapse-item>
                </div>
            </el-collapse-item>
        </el-collapse>


        <!-- <div class="warehouseBox" v-for="warehouse in warehousingForm" :key="warehouse.index">
            <nav>
                <div class="warehouse-name">
                    {{warehouse.name}}
                </div>
                <div class="warehouse-msg">
                    <div  class="warehouse-msg-box">
                        地址：
                        <span>{{warehouse.province}}</span>
                        <span>{{warehouse.city}}</span>
                        <span>{{warehouse.district}}</span>
                    </div>
                    <div class="warehouse-msg-box">
                        具体地址：
                        <span>{{warehouse.address}}</span>
                    </div>
                    <div class="warehouse-msg-box">
                        仓库名称：
                        <span>{{warehouse.name}}</span>
                    </div>
                </div>
            </nav>
            <main v-for="reservoir in warehouse.reservoir" :key="reservoir.index">
                <div v-if="show_+'index'" class="reservoir.name">
                    {{reservoir.name}}
                </div>
            </main>
        </div> -->
    </div>
</template>
 
<script setup>

const props = defineProps(
    ["warehousingForm"]
);
</script>
 
<style scoped lang='less'>
/deep/ .el-collapse-item__header{
  font-size: 16px;
}
/deep/ .el-collapse-item__content{
    border-top: 1px solid rgb(235, 238, 245);
    padding: 0;
}
.shelves-X-Box{
    box-sizing: border-box;
    display: flex;
    .shelves-Y-Box{
        width: 50px;
        line-height: 30px ;
        border: 1px solid #c4c4c4;
        text-align: center;
    }
    .shelves-Y-Box:hover{
        background-color: #409eff;
        cursor: pointer;
        color: #fff;
    }
}
// .warehouseBox{
//     border-bottom: 1px solid #d4d4d4;
//     padding: 25px 20px;
//     .warehouse-name{
//         font-size: 20px;
//         margin-bottom: 10px;
//     }
//     .warehouse-msg{
//         font-size: 14px;
//         .warehouse-msg-box{
//             margin-top: 5px;
//         }
//     }
// }
// .warehouseBox:hover{
//     cursor: pointer;
//     background-color: #e4f1ff;
// }
</style>