<template>
  <div>
    <Header :done="done" :undone="undone" />
    <Main
      v-bind:todos="todos"
      @deleted-todo="deletedTodo"
      @add-todo="addTodo"
    />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Main from "@/components/Main";

export default {
  name: "app",
  components: {
    Header,
    Main,
  },
  data() {
    return {
      todos: [],
    };
  },
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        this.todos = json.map((elem) => ({
          key: elem.id,
          title: elem.title,
          checked: elem.completed,
        }));
      });
  },
  computed: {
    done: function () {
      return this.todos.filter((item) => item.checked).length;
    },
    undone: function () {
      return this.todos.filter((item) => !item.checked).length;
    },
  },
  methods: {
    deletedTodo(key) {
      this.todos = this.todos.filter((t) => t.key !== key);
    },
    addTodo(todo) {
      this.todos.unshift(todo);
    },
  },
};
</script>
