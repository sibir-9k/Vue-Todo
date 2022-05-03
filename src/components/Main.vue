<template>
  <div class="container-xl p-3">
    <Input @add-todo="addTodo" />
    <hr />
    <ul class="list-group">
      <ListOfItem
        v-for="todo of todos"
        :key="todo.key"
        :todo="todo"
        @deleted-todo="deletedTodo"
      />
    </ul>
  </div>
</template>

<script>
import Input from "./Input.vue";
import ListOfItem from "./ListOfItem.vue";
import Header from "./Header.vue";
export default {
  props: ["todos"],
  components: {
    Header,
    Input,
    ListOfItem,
  },
  methods: {
    deletedTodo(key) {
      this.$emit("deleted-todo", key);
    },
    addTodo(todo) {
      this.$emit("add-todo", todo);
    },
  },
};
</script>
