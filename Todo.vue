<template>
  <div>
    <div>
      <div>Owner
        <div>
          Full Name
          <span v-text="username"></span>
        </div>

        <hr>
      </div>
      <div>
        <input type="text" @keypress.enter="addTodo()" v-model="newTodo">
        <input type="text" @keypress.enter="addTodo()" v-model="newImage">
        <button @click="addTodo()">Add Todo</button>
      </div>Todos
      
      <todo-list
        @delete-todo="deleteTodo"
        @complete-todo="$event.completed=true"
        :todos="uncompletedTodos"
      ></todo-list>
      
      Completed
      <ul>
        <li
          v-for="(t, index) in abc"
          :key="t.text"
          :class="{'important-todo': t.important, 'completed-todo': t.completed}"
        >
          {{ t.text }}
          <img v-bind:src="t.image" class="small-image">
          <button @click="deleteTodo(t)">X</button>
          <button v-if="!t.completed" @click="$emit('complete-todo', t)">Complete</button>
          <label v-else>
            <input type="checkbox" v-model="t.important"> Important
          </label>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    username: { type: String, required: true }
  },
  data: () => ({
    firstName: "",
    lastName: "",

    newTodo: "",
    newImage: "",
    todos: []
  }),
  computed: {
    fullName: {
      get() {
        return [this.firstName, this.lastName].filter(Boolean).join(" ");
      },
      set(value) {
        [this.firstName = "", this.lastName = ""] = value.split(" ");
      }
    },
    uncompletedTodos() {
      return this.todos.filter(x => !x.completed);
    },
    completedTodos() {
      return this.todos.filter(x => x.completed);
    }
  },
  methods: {
    addTodo(e) {
      if (!this.newTodo) return;

      this.todos.push({
        text: this.newTodo,
        image: this.newImage,
        completed: false,
        important: false
      });
      this.newImage = "";
      this.newTodo = "";
    },
    deleteTodo(todo) {
      const index = this.todos.indexOf(todo);

      this.todos.splice(index, 1);
    }
  }
};
</script>

<style scoped>
</style>

