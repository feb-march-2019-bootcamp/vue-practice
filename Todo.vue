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
      <ul>
        <li v-for="(t, index) in uncompletedTodos" :key="t.text">
          {{ t.text }}
          <img v-bind:src="t.image" class="small-image">
          <button @click="deleteTodo(t)">X</button>
          <button @click="t.completed=true">Complete</button>
        </li>
      </ul>Completed
      <ul>
        <li
          v-for="t in completedTodos"
          :class="{'important-todo': t.important}"
          class="completed-todo"
          :key="t.text"
        >
          {{ t.text }}
          <button @click="deleteTodo(t)">X</button>
          <label>
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
    username: {type: String, required: true},
    initialTodos: {type: Array, default: () => []}
  },
  data: () => ({
    firstName: "",
    lastName: "",

    newTodo: "",
    newImage: "",
    todos: [
      { text: "First Todo", completed: false, important: false },
      { text: "Second Todo", completed: false, important: false }
    ]
  }),
  mounted() {
    this.todos = this.initialTodos.concat();
  },
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
/* Scoped so it will not be overriden by the styles in the html */

.completed-todo {
  color: green;
  text-decoration: line-through;
}

.important-todo {
  background: rgba(255, 0, 0, 0.3);
}

.small-image {
  max-width: 5rem;
}
</style>

