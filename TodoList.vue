<template>
  <ul>
    <li v-for="(t, index) in todos" :key="t.text" 
        :class="{'important-todo': t.important, 'completed-todo': t.completed}">
      <slot :todo="t" :index="index"> 

         {{ t.text }}
        <img v-bind:src="t.image" class="small-image">
        <button @click="deleteTodo(t)">X</button>
        <button v-if="!t.completed" @click="$emit('complete-todo', t)">Complete</button>
        <label v-else>
          <input type="checkbox" v-model="t.important"> Important
        </label>

      </slot>
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    todos: {
      default: () => [],
      required: true,
      type: Array
    }
  },
  methods: {
    deleteTodo(t) {
      this.$emit("delete-todo", t);
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

