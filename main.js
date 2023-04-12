const { createApp } = Vue;

createApp({

    data() {
        return {
            todos: []
        }
    },
    mounted() {
        axios.get('file.json')
            .then(response => {
                this.todos = response.data;
            });
    }
})

.mount('#app');