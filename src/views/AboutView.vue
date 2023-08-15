<template>
  <!-- <helloworld msg="Hello" @counters="countEmit" /> -->
  <!-- Основной контент -->
  <!-- <div :[attr]="login">
      <h1>About</h1>
  </div> -->
  <RouterLink to="/">Home</RouterLink>
  <button @click="counter">Клик: {{ count }}</button>
  <div class="main">
    <div class="box1">
      <div class="post" v-for="post in posts" :key="post.id">
        <h1>{{ post.title }}</h1>
        <p>{{ post.text }}</p>
        <button @click="del(post.id)">Delete</button>
        <button @click="editPost(post)">Edit</button>
      </div>
    </div>
    <div class="box2">
      <label>
        <span>Заголовок: </span>
        <input v-model="title">
      </label>
      <label>
        <span>Анонс: </span>
        <input v-model="anons">
      </label>
      <label>
        <span>Текст: </span>
        <input v-model="text">
      </label>
      <label>
        <span>Дата: </span>
        <input v-model="date" type="datetime-local">
      </label>
      <button @click.prevent="saveEdit()">Сохранить Изминения</button>
      <button @click.prevent="pushPost()">Отправить</button>
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
          _id: '',
          title: '',
          anons: '',
          text: '',
          date: '',
          firrstName: '',
          lastName: '',
          attr: 'class',
          posts: [ ],
          count: 0,
          crf: '',
      }
  },
  methods: { // Наши функции
      create: function(){
          console.log('Hello!')
      },
      getCookie(name) {                                       //GET CSRF
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
      pushPost: async function(){     //POST
        const newPost = {            //Создаем объект
          title: this.title,
          anons: this.anons,
          text: this.text,
          date: this.date
        }
        this.posts.push(newPost)  //Пушим его в массив, для отрисовки без перезагрузки
        const res = await fetch('http://127.0.0.1:8000/api/posts/', {
          method: "POST",
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(newPost)
        })
        const data = await res.json()
        if(data.id)alert("Запушили!") //Получаем ответ, проверяем, выводим alert
      },
      editPost: function(post){      //Кнопка edit перенос post в форму для изменения
        this._id = post.id
        this.title = post.title
        this.anons = post.anons
        this.text = post.text
        this.date = this.formatDate(post.date)
      },
      saveEdit: async function(){    //PUT Кнопка Сохранить Изменения 
        console.log(this._id)
        await fetch(`http://127.0.0.1:8000/api/posts/${this._id}`,{
          method: "PUT",
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify({title: this.title, anons: this.anons, text: this.text, date: this.date})
        })
        const i = this.posts.findIndex(n => n.id == this._id)
        this.posts.splice(i, 1)
        this.posts.push({ id:this._id, title: this.title, anons: this.anons, text: this.text, date: this.date})
        this._id = ''
        this.title = ''
        this.anons = ''
        this.text = ''
        this.date = ''
      },
      del: async function(id){              //DELETE
        await fetch(`http://127.0.0.1:8000/api/posts/${id}`, { method: "DELETE"})

        const i = this.posts.findIndex(n => n.id == id)
        this.posts.splice(i, 1)      //Отрезаем наш пост от массива для отрисовки без перезагрузки
      },
      formatDate(date) {   //Преобразуем дату в нужный формат для type="datetime-local"
        const dateObj = new Date(date);
        const formattedDate = dateObj.toISOString().slice(0, 16);
        return formattedDate;
      },

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
      // const d1 = await fetch('http://127.0.0.1:8000/api/get_csrf') //GET CSRF
      // this.crf = await d1.json()
    }
}
</script>

<!-- Стили, если scoped, то только для компонента -->
<style scoped> 

.main{
  display: flex;
  justify-content: space-around;
}

.box2{
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-end;
}
.post{
  width: 400px;
  height: max-content;
  margin-top: 10px;
  background-color: rgb(179, 130, 58);
  color: rgb(255, 255, 255);
}
</style>