<template>
    <div>
        <el-collapse v-model="Form" >
            <el-collapse-item v-for="warehouse in warehousingForm" :key="warehouse.index" :title="warehouse.name" :name="warehouse.index" class="form-first-title">
                <div style="padding: 0 2% 0 2%">
                    <el-collapse-item v-for="reservoir in warehouse.reservoir" :key="reservoir.index" :title="reservoir.name" :name="reservoir.index">
                        <!-- {{reservoir.shelves}} -->
                        <div style="padding: 0 2% 0 2%">

                            <el-collapse-item v-for="shelves in reservoir.shelves" :key="shelves.index" :title="shelves.name" :name="shelves.index">
                                <div class="shelves-Box">
                                    <div>
                                        <span v-for="(y,index) in Number(shelves.specifications.split('*')[0])" :key="y.index">
                                            {{index+1}}
                                        </span>
                                    </div>
                                    <div class="shelves-X-Box" v-for="x in Number(shelves.specifications.split('*')[1])" :key="x.index">
                                        <div 
                                        @click="dialogMsg(shelves.shelvesBox[(x-1)*Number(shelves.specifications.split('*')[0])+y-1])" 
                                        class="shelves-Y-Box" 
                                        v-for="y in Number(shelves.specifications.split('*')[0])" :key="y.index">
                                            <el-tooltip 
                                            :content="shelves.shelvesBox[(x-1)*Number(shelves.specifications.split('*')[0])+y-1].name" 
                                            placement="bottom" effect="light">
                                                <div>
                                                    <span>
                                                        {{shelves.shelvesBox[(x-1)*Number(shelves.specifications.split('*')[0])+y-1].identifier}}
                                                    </span>
                                                </div>
                                            </el-tooltip>
                                        </div> 
                                    </div>
                                </div>
                            </el-collapse-item>
                        </div>
                    </el-collapse-item>
                </div>
            </el-collapse-item> 
        </el-collapse>

            <el-dialog
                v-model="dialogShow"
                title="入库"
                width="50%"
            >
                <p>编号：{{message.stuffId}}</p>
                <p>剩余数量：{{message.stuffNum}}</p>
                <p>型号：{{message.name}}</p>
                <el-input-number v-model="warehouseNum" :min="0" :max="parseInt(message.stuffNum)"/>

                <template #footer>
                <span class="dialog-footer">
                    <el-button @click="dialogShow = false">关闭</el-button>
                    <el-button type="primary" @click="warehousing">出库</el-button>
                </span>
                </template>
            </el-dialog>
</div>
</template>
 
<script setup>
import { ref, reactive } from 'vue'
import { ElMessageBox } from 'element-plus'
const props = defineProps(
    ["warehousingForm"]
);
const dialogShow = ref(false)

const warehouseNum = ref(0)
let message = ref()
const dialogMsg = (data) => {
    dialogShow.value = true
    message.value = data;
    console.log(message);
}
</script>
 
<style scoped lang='less'>
::v-deep(.el-collapse-item__header){
  font-size: 16px;
}
::v-deep(.el-collapse-item__content){
    border-top: 1px solid rgb(235, 238, 245);
    padding: 0;
}
.shelves-Box{
    overflow: auto;
    padding-bottom: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
    .shelves-X-Box{
        padding: 0 5%;
        display: flex;
        .shelves-Y-Box{
            flex: 1;
            border: 1px solid #c4c4c4;
            text-align: center;
            width: 100%;
            div{
                height: 0;
                padding-top: 10%;
                padding-bottom: 25%;
                min-width: 70px;
                min-height: 35px;
                box-sizing: border-box;
                width: 100%;
                span{
                    width: 100%;
                }
            }
            div:after {
                content: '';
                padding-top: 100%;
            }
        }

        .shelves-Y-Box:hover{
            background-color: #409eff;
            cursor: pointer;
            color: #fff;
        }
    }
}
.shelves-Box::-webkit-scrollbar{
    height: 8px;
    padding-bottom: 10px; overflow-x: scroll; width: 1000px; margin-bottom: 20px;

}
.shelves-Box::-webkit-scrollbar-thumb{
    border-radius: 10px;
    background-color: #b0d6ff;
}
.shelves-Box::-webkit-scrollbar-track{
    border-radius: 5px;
    background: #eef5fd;
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