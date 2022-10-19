<script setup>
import { ref, reactive } from 'vue'

import HelloWorld from './components/HelloWorld.vue'
import HeaderTemp from './components/HeaderTemp.vue'

let stateVar = reactive({
      state: true
    });


function setState(){
  stateVar.state = !stateVar.state;
}

</script>

<template>
<button @click="setState">Переключить состояние</button>
  <HeaderTemp v-if="stateVar.state"/>
  <HelloWorld v-else msg="Vite + Vue" />
</template>

<style scoped>

</style>
