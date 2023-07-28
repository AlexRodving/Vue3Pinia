<template>
    <div>
        <button @click="incrCount">Клик</button>
        <p>{{ count }}</p>
    </div>
</template>

<script>
    export default {
      data(){
        return{
            count: 0,
        }
      },
      methods:{
        incrCount(){
            this.count++;
            this.$emit('increment', this.count);
        }
      }  
    }
</script>

<style scoped>
 
</style>