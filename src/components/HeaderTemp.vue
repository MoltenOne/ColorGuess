<script setup>
import { ref } from 'vue'

/*defineProps({
  news: Number
})*/

const newsCount = ref(0)
</script>

<template>
<div>
    <div>Количество новостей: {{newsCount}}</div>
    <span>Главная</span> 
    <span>Цветы</span> 
    <span>Деревья</span> 
    <span>Кустарники</span> 
</div>
</template>

<style scoped>

span {
  width:100px;
  height:40px;
  display: inline-block;
}

</style>
