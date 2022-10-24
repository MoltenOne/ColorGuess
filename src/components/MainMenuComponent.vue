<script setup>
import { ref, reactive } from 'vue'


const difVal = ref(3)



</script>

<template>
<div class = "mainDiv">
    <span class = "GCG">GUESS COLOR GAME</span>
    <span class = "difSpan">Choose difficulty</span>
    <div class = "topMainDiv">     
        <div class="starDiv" >
            <img @click = "difVal = 3; $emit('dif3')" src="../assets/star-icon.svg"> 
            <div>EASY</div>
        </div>
        <div class="starDiv" v-if="difVal > 3" >
            <img @click = "difVal = 5; $emit('dif5')" src="../assets/star-icon.svg">
            <div>MEDIUM</div>
        </div>
        <div class="starDiv" v-else >
            <img @click = "difVal = 5; $emit('dif5')" src="../assets/star-outline.svg">
            <div>MEDIUM</div>
        </div>  
        <div class="starDiv" v-if="difVal > 5" >
            <img @click = "difVal = 7; $emit('dif7')" src="../assets/star-icon.svg">
            <div>HARD</div>
        </div>
        <div class="starDiv" v-else >
            <img @click = "difVal = 7; $emit('dif7')" src="../assets/star-outline.svg">
            <div>HARD</div>
        </div> 
    </div>
</div>
</template>

<style scoped>

.mainDiv {
  background-color: #f06553;
  margin: 0px;
  padding: 40px;
  border-radius: 20px;
}

.GCG {
  width:300px;
  background-color: yellow;
  padding: 10px 23px;
  height: 80px;
  font-size: 40px;
  line-height:1;
}

.difSpan{
  width: 300px;
  font-size: 30px;
  background-color:yellow;
  height: 20px;
  padding: 10px 23px;
}
.starDiv {
  height:130px;
  display: inline-block;
  background-color: royalblue;
  margin-left: 10px;
  margin-right: 10px;
}

.starDiv div {
  padding:0px;
  margin:0px;
  font-family: Georgia, Times, Times New Roman, serif;
  font-size: 24px; font-style: normal;
  font-variant: normal;
  font-weight: 100;
  line-height: 26.4px;
  background-color: yellow;
}

img {
  height: 100px;
  width: 100px;
}

img:hover {
  opacity: 0.7;
  cursor: pointer;
}

span {
  width:100px;
  height:100px;
  display: inline-block;
  margin:20px;
 /* border: 2px solid aqua*/
}

</style>
