const { createApp } = Vue;

createApp({

    data() {
        return {
            todos: [],
            newTodo: ''
        }
    },
    mounted() {
        axios.get('server.php')
            .then(response => {
                this.todos = response.data;
            });
    },
    methods: {
        addTodo() {
            if (this.newTodo.trim() !== '') {
                this.todos.push({
                    text: this.newTodo,
                    done: false
                });
                this.newTodo = '';
            }
        },
        removeTodo(index) {
            this.todos.splice(index, 1);
        }
    }
    
})

.mount('#app');