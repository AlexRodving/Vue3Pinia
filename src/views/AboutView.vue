<template>
  <!-- <helloworld msg="Hello" @counters="countEmit" /> -->
  <!-- Основной контент -->
  <!-- <div :[attr]="login">
      <h1>About</h1>
  </div> -->
  <div class="main">
    <RouterLink to="/">Home</RouterLink>
    <button @click="counter">Клик: {{ count }}</button>
    <div class="post" v-for="post in posts" :key="post.id">
    <h1>{{ post.title }}</h1>
    <p>{{ post.text }}</p>
    </div>
  </div>
</template>

<script>
// import ComponentsHello from '../components/ComponentsHello.vue'
// import компонентов
export default{
  components: { // Подключаемые компоненты
    //   'helloworld': ComponentsHello
  },
  data () {    // Переменные
      return {
          title: 'About',
          firrstName: '',
          lastName: '',
          attr: 'class',
          posts: [ ],
          count: 0
      }
  },
  methods: { // Наши функции
      create: function(){
          console.log('Hello!')
      },
      async getPosts(){
         
      },
      counter: function(){
          this.count++
      },
      countEmit(count){
          this.count++
      }

  },
  computed: { // Метод который содержит обьект с вычисляемыми свойствами
      fullName() {
          return this.firrstName + this.lastName 
      },
  },
  watch: { // Содержит обьект с наблюдателями за изменениями

  },
  mounted() { // Компонент монтирован
     
  },
  updated() { // Компонент обновлен

  },
  created() { // Компонент создан

  },
  unmounted() { // Компонент размонтирован

  },
  async beforeMount() { // Компонент будет монтирован
      const data = await fetch('http://127.0.0.1:8000/api/posts/')
      this.posts = await data.json()
  }
}
</script>

<!-- Стили, если scoped, то только для компонента -->
<style scoped> 
.post{
  width: 400px;
  height: max-content;
  margin-top: 10px;
  background-color: rgb(179, 130, 58);
  color: rgb(255, 255, 255);
}
</style>