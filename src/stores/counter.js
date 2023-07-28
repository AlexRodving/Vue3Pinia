import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counters', {
  state: () => ({
    countx: 0,
    posts: [],
  }),
  actions: {
    async getPosts(){
      const data = await fetch('http://127.0.0.1:8000/api/posts/')
      const posts = await data.json()
      this.posts = posts
    },

    increment() {
      this.count++
    },
  },
})
