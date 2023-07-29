<template>
  <div class="box main">
    <!-- PROPS -->
    <div class="props">
      <h1>Props:</h1>
      <PropsMsg msg="Props"/>
      <p>Использование: HomeView, PropsMsg</p>
      <br><hr>
    </div>
    <!-- EMIT -->
    <div class="box emit">
      <h1>Emit:</h1>
      <EmitButton @increment="thisIncrement"/>
      <p>{{ count }}</p>
      <p>Использование: HomeView, EmitButton</p>
      <br><hr>
    </div>
    <!-- PINIA -->
    <div class="box pinia">
      <h1>Pinia:</h1>
      <h3>Счетчик: {{ counterStore.count }}</h3>
      <button @click="counterStore.increment">Увеличить</button>
      <button @click="counterStore.decrement">Уменьшить</button>
      <p>Использование: HomeView, counter.js</p>
      <p>Подключить в main.js</p>
      <br><hr>
    </div>
    <div class="box about">
      <p>Описание свойст компонента Vue3(Option Api) в AboutView.vue</p>
      <RouterLink to="/about">About</RouterLink>
    </div>
  </div>
</template>

<script>
import {useCounterStore} from '../stores/counter';//Pinia
import PropsMsg from '../components/PropsMsg.vue';
import EmitButton from '../components/EmitButton.vue';
import { RouterLink } from 'vue-router';
  export default {
    components:{
    PropsMsg,
    EmitButton,
    RouterLink
},
    data(){
      return {
        count: 0,
        posts: [],
        counterStore: useCounterStore(), //Pinia
        //После подключение мы получаем доступ ко всем параметрам стора
        //использование, через точку как к вложеным полям обьекта 
      }
    },
    methods: {
      thisIncrement(e){
        this.count = e;
      },
    },
  }
</script>

<style scoped>

</style>
 