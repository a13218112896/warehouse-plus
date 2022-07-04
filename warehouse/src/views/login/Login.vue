<template>
    <div id="login">
        <canvas id="canvas"></canvas>
    </div>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue';
    // 登录页背景
    const canvasBg = () => {
        var bodywidth = document.body.clientWidth;
        var bodyheight = document.body.clientHeight; 
        var canvas = document.getElementById('canvas');
        console.log(canvas.getContext)
        canvas.width = bodywidth;
        canvas.height = bodyheight;
        if(!canvas.getContext) return;
        var background = canvas.getContext('2d');
        background.strokeStyle = 'rgb(242,245,251)';
        for(var y = 0; y < canvas.height/30; y++){
            for(var x = 0; x < canvas.width/30;x++){
                background.strokeRect(x*30, 1+y*30, 30,30);
            }
        }
    }
    // 生命周期:挂载完数据
    onMounted(() => {
        canvasBg();
    })
</script>

<style scoped>
#login{
  width: 100%;
  height: 100vh;

}
#canvas{
    position: absolute;
    top: 0;
    z-index:-1;
}
</style>