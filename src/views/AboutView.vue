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
      <button @click="del(post.id)">Delete</button>
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
          count: 0,
          crf: '',
          obj:{
            title: "Наш Пост5",
            anons: "Мы создадим многопользовательский блог",
            text: "Мы создадим многопользовательский блог для клуба любителей задач Python Bytes. Вместе со стандартным пакетом Django будем использовать модули django-crispy-forms и Pillow. Реализуем всю функциональность, необходимую для:\r\n\r\n* регистрации и авторизации участников;\r\n* автоматического создания пользовательских профилей;\r\n* заполнения и изменения информации в профилях;\r\n* автоматического сжатия изображений для аватарок;\r\n* создания, редактирования и удаления записей со стороны фронтенда;\r\n* пагинации и вывода записей на страницах авторов.",
            date: "2023-05-02T19:16:50Z"
          }
      }
  },
  methods: { // Наши функции
      create: function(){
          console.log('Hello!')
      },
      getCookie(name) {
        let matches = document.cookie.match(new RegExp(
          "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
      },
      async getPosts(){
         
      },
      counter: function(){
          this.count++
      },
      countEmit(count){
          this.count++
      },
      del: async function(id){
        await fetch(`http://127.0.0.1:8000/api/posts/${id}`, { method: "DELETE"})
        
        const i = this.posts.findIndex(n => n.id == id)
        this.posts.splice(i, 1)
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
      // console.log(this.posts)
      // const d1 = await fetch('http://127.0.0.1:8000/api/get_csrf')
      // this.crf = await d1.json()
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