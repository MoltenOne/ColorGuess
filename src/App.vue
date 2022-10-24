<script setup>
import { ref, reactive } from 'vue'

import GameComponent from './components/GameComponent.vue'
import MainMenuComponent from './components/MainMenuComponent.vue'

let stateVar = reactive({  //false is for main menu, true is for game component;
      state: false
    });

let difEmited = reactive({
      dif: Number
    })


function setState(){
  if (!stateVar.state) {
    difEmited.dif = 3
  }

  stateVar.state = !stateVar.state;
  globalDifValue = difEmited.dif;
}

setState()

</script>

<template>
  <MainMenuComponent 
      @dif3="difEmited.dif = 3"
      @dif5="difEmited.dif = 5"
      @dif7="difEmited.dif = 7" 
      v-if="stateVar.state"/>
  <GameComponent :difProp="difEmited.dif" @change-state="setState" v-else />
    <div class = "botMainDiv">
    <button class = "playButton" v-if="stateVar.state" @click="setState"> PLAY</button>
  </div>
</template>

<style scoped>

.playButton {
   margin-top: 30px; 
   background-color: #ad3d6f;
   color: black;
}

</style>
