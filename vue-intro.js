import Vue from 'vue/dist/vue';
import $ from 'jquery';

new Vue({
    el: '#app',
    data: {
        todos: [
            {text: 'First Todo', completed: false},
            {text: 'Second Todo', completed: false}
        ]
    }
})

// The counter with jQuery
const count = $('#count');

$('#increment').on('click', () => {
    count.html(Number(count.html()) + 1)
})

$('#decrement').on('click', () => {
    if (Number(count.html()) === 0) return;

    count.html(count.html() - 1)
})