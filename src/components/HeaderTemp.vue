<script setup>
import { ref, reactive } from 'vue'


const difVal = ref(0)



</script>

<template>
<div class = "mainDiv">
<span class = "difSpan">Choose difficulty</span>
  <div class = "topMainDiv">
      
      <div class="starDiv" v-if="difVal > 0" @click = "difVal = 1">
          <img src="../assets/star-icon.svg"> 
          <div>EASY</div>
      </div>
      <div class="starDiv" v-else @click = "difVal = 1">
          <img  src="../assets/star-outline.svg">
          <div>EASY</div>
      </div>
      <div class="starDiv" v-if="difVal > 1" @click = "difVal = 2">
          <img src="../assets/star-icon.svg">
          <div>MEDIUM</div>
      </div>
      <div class="starDiv" v-else @click = "difVal = 2">
          <img src="../assets/star-outline.svg">
          <div>MEDIUM</div>
          </div>  
      <div class="starDiv" v-if="difVal > 2" @click = "difVal = 3">
          <img src="../assets/star-icon.svg">
          <div>HARD</div>
      </div>
      <div class="starDiv" v-else @click = "difVal = 3">
      <img src="../assets/star-outline.svg">
          <div>HARD</div>
      </div> 
  </div>

  <div class = "botMainDiv">
    <button> ИГРАТЬ</button>
  </div>

</div>
</template>

<style scoped>

.difSpan{
  vertical-align: top;
  width: 300px;
  font-size: 30px;
}
.starDiv {
  height:140px;
  display: inline-block;
}

div {
border: 2px solid grey
}

img {
  height: 100px;
  width: 100px;
  vertical-aligh:top;
}

img:hover {
  opacity: 0.8;
  cursor: pointer;
}

span {
  width:100px;
  height:100px;
  display: inline-block;
  margin:20px;
  border: 2px solid aqua
}

</style>
