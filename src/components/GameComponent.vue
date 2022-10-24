<script setup>
import { ref, reactive } from 'vue'

defineProps({
  difProp: Number
})


const score = ref(0);

function getRandomInt(number) {
  return Math.floor(Math.random() * number);
}



let colorsVar = reactive({
      color0hex: String, color1hex: String, color2hex: String, color3hex: String, color4hex: String, color5hex: String, color6hex: String,
      color0name: String, color1name: String, color2name: String, color3name: String, color4name: String, color5name: String, color6name: String,
      answerDiv: Number,
      disabledProp: Boolean,
      getTrueDiv() {
          if (globalDifValue == 3) {
              this.answerDiv = getRandomInt(3);
        } else if (globalDifValue == 5) {
              this.answerDiv = getRandomInt(5);
        } else {
              this.answerDiv = getRandomInt(7);
        }

      },
      nextSet() {
        colorsVar.getTrueDiv();
          this.disabledProp = true;
          for (let i = 0; i < globalDifValue; i++){
              let tempColorNumber = getRandomInt(1302);
              this["color" + i + "hex"] = mydata[tempColorNumber].hex;
              this["color" + i + "name"] = mydata[tempColorNumber].name;
        } 
      },
      checkAnswer(event){
          let targetId = event.currentTarget.id;
          if (targetId[2] == this.answerDiv) {
             // document.getElementsByClassName('nextButton')[0].disabled = false; 
             this.disabledProp = false;
              score.value++;
          } else {
              if (score.value != 0) score.value--;

          }
      }
      
    });

colorsVar.nextSet();


</script>

<template>

  <div >
    <div class = "scoreDiv"> Score: {{score}} </div>
    <div style="float:left; padding: 5px;">
      <button class="homeButton" @click="$emit('change-state')">
        <img src="../assets/home.svg">
      </button>
    </div>
    
  </div>

  <div class = "mainColorDiv">
      <button id = "id0" :disabled="!colorsVar.disabledProp" :style="{backgroundColor: colorsVar.color0hex}" class = "colorDiv" @click="colorsVar.checkAnswer"></button>
      <button id = "id1" :disabled="!colorsVar.disabledProp" :style="{backgroundColor: colorsVar.color1hex}" class = "colorDiv" @click="colorsVar.checkAnswer"></button>
      <button id = "id2" :disabled="!colorsVar.disabledProp" :style="{backgroundColor: colorsVar.color2hex}" class = "colorDiv" @click="colorsVar.checkAnswer"></button>
      <button id = "id3" :disabled="!colorsVar.disabledProp" v-if="difProp > 3" :style="{backgroundColor: colorsVar.color3hex}" class = "colorDiv" @click="colorsVar.checkAnswer"></button>
      <button id = "id4" :disabled="!colorsVar.disabledProp" v-if="difProp > 3" :style="{backgroundColor: colorsVar.color4hex}" class = "colorDiv" @click="colorsVar.checkAnswer"></button>
      <button id = "id5" :disabled="!colorsVar.disabledProp" v-if="difProp > 5" :style="{backgroundColor: colorsVar.color5hex}" class = "colorDiv" @click="colorsVar.checkAnswer"></button>
      <button id = "id6" :disabled="!colorsVar.disabledProp" v-if="difProp > 5" :style="{backgroundColor: colorsVar.color6hex}" class = "colorDiv" @click="colorsVar.checkAnswer"></button>
  </div>

  <div class="findMessageDiv">Find <b>{{colorsVar['color' + colorsVar.answerDiv  +'name']}}</b> color</div>
  <button class="nextButton" :disabled="colorsVar.disabledProp" @click="colorsVar.nextSet"> Next</button>

</template>

<style scoped>


.mainColorDiv {
    display: flex;
    width: 100%;
    place-items: center;
    text-align: center;
}

.homeButton {
    background-color: royalblue;
    height: 50px;
    padding: 5px 5px 50px 5px;
    margin:10px 0px 0px 10px;
}

.scoreDiv{
  font-size: 35px;
  background-color: royalblue;
  width: 50%;
  float:right;
  height: 40px;
  padding: 15px 0px 0px 0px;
  border-radius: 10px;
  margin: 15px 15px 0px 0px;
}

.nextButton {
    background-color: #ad3d6f;
    color: black;
}

.nextButton:disabled{
  background-color: grey;
}

.findMessageDiv{
    color: black;
    font-size: 40px;
    margin: 10px;
    background-color: #f06553;
    padding: 20px 20px 20px 20px;
    border-radius: 20px;
}


.colorDiv {
  height: 100px;
  width: 10%;
  margin: 50px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
  border-radius: 15px;
  border: 2px solid transparent;
}



.colorDiv:hover{
  border-color: #646cff;
}
</style>
