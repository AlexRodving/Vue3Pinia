<template>
  <div>
    <h1>Props:</h1>
    <PropsMsg msg="Props"/>
    <hr>
    <h1>Emit:</h1>
    <EmitButton @increment="thisIncrement"/>
    <p>{{ count }}</p>
    <hr>
    <h1>Pinia:</h1>
    <div v-for="p of countersStore.posts" :key="p.id">
      <p>{{p.title}}</p>
    </div>
    <hr>
  </div>
</template>

<script>
import {useCounterStore} from '../stores/counter';
import { mapStores } from 'pinia';
import PropsMsg from '../components/PropsMsg.vue';
import EmitButton from '../components/EmitButton.vue';
  export default {
    components:{
      PropsMsg,
      EmitButton
    },
    data(){
      return {
        count: 0,
        posts: [],
      }
    },
    methods: {
      thisIncrement(e){
        this.count = e;
      },
    },
    computed: {
      ...mapStores(useCounterStore)
    },
    beforeMount() {
      this.countersStore.getPosts()
    }
  
  }
</script>

<style scoped>

</style>
 