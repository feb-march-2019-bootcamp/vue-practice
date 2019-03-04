<template>
  <div>
    <h1>
      <slot name="header">
      </slot>
    </h1>
    <div>
      <div>Owner
        <div>
          Full Name
          <span v-text="username"></span>
        </div>

        <hr>
      </div>
      <div>
        <div>
          <slot>
            Default slot is empty
          </slot>
        </div>
        <input type="text" @keypress.enter="addTodo()" v-model="newTodo">
        <input type="text" @keypress.enter="addTodo()" v-model="newImage">
        <button @click="addTodo()">Add Todo</button>
      </div>Todos
      
      <todo-list
        @delete-todo="deleteTodo"
        @complete-todo="$event.completed=true"
        :todos="uncompletedTodos"
      >
        <template slot="default" slot-scope="p">
        <div>
          {{ p.todo.text }}
          <button class="btn btn-danger">Delete</button>
        </div>
        </template>
      </todo-list>
      
      Completed
      <todo-list
        @delete-todo="deleteTodo"
        @complete-todo="$event.completed=true"
        :todos="completedTodos"
      ></todo-list>

      <footer>
        <slot name="footer">
          This is a footer
        </slot>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    username: { type: String, required: true },
    innerText: {type: String}
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

