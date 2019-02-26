import Vue from 'vue/dist/vue';
import $ from 'jquery';

import Todo from './Todo.vue'

Vue.component('todo', Todo)

new Vue({
    el: '#app',
});