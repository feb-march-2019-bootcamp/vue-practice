import Vue from 'vue/dist/vue';
import $ from 'jquery';

new Vue({
    el: '#app',
    data: {
        firstName: '',
        lastName: '',

        newTodo: '',
        newImage: '',
        todos: [
            {text: 'First Todo', completed: false, important: false},
            {text: 'Second Todo', completed: false, important: false}
        ]
    },
    computed: {
        fullName: {
            get() {
                return [
                    this.firstName,
                    this.lastName
                ]
                .filter(Boolean)
                .join(' ');
            },
            set(value) {
                [this.firstName = '', this.lastName = ''] = value.split(' ');
            }
        },
        uncompletedTodos() {
            return this.todos
                .filter(x => !x.completed);
        },
        completedTodos() {
            return this.todos
                .filter(x => x.completed);
        }
    },
    methods: { 
        addTodo(e) {
            if (! this.newTodo) return;

            this.todos.push({
                text: this.newTodo,
                image: this.newImage,
                completed: false, 
                important: false
            });
            this.newImage = '';
            this.newTodo = '';
        },
        deleteTodo(todo) {
            const index = this.todos.indexOf(todo);

            this.todos.splice(index, 1);
        }
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

class A
{
    get name() {
        return 'ABC';
    }

    set name(value) {
        console.log(value)
    }
}

window.A = A;