import Vue from "vue/dist/vue";
import $ from "jquery";

import Todo from './Todo.vue';
import TodoList from './TodoList.vue'
import MaterialInput from './MaterialInput.vue';

// Global registration
Vue.component("todo", Todo);
Vue.component("todo-list", TodoList);
Vue.component("material-input", MaterialInput);

new Vue({
  el: "#app",
  data: {
      name: 'Foo',
      newUsername: '',
      todoListsUsernames: [
        'Jon Doe'
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
