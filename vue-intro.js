import Vue from "vue/dist/vue";
import $ from "jquery";

import Todo from './Todo.vue';

// Global registration
Vue.component("todo", Todo);

new Vue({
  el: "#app",
  data: {
      newUsername: '',
      todoListsUsernames: [

      ]
  },
  methods: {
    addTodolist() {
        this.todoListsUsernames.push(this.newUsername);
        this.newUsername = '';
    }
  }
});

// This also can use <todo></todo>
// new Vue({
//     el: '#app2',
//     template: `<div>
//     <todo></todo>
//     </div>`
// })
