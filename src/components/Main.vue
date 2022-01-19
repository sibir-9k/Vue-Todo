<template>
	<div class="container-xl p-3">
		<Input 
      @add-todo="addTodo"
    />
		<hr />
		<ul class="list-group">
			<ListOfItem 
        v-for="todo of todos" :key="todo.title"
        v-bind:todo="todo" 
        v-on:deleted-todo="deletedTodo" />
		</ul>
	</div>
</template>

<script>
	import Input from "./Input.vue";
	import ListOfItem from "./ListOfItem.vue";
	export default {
		props: ['todos'],
		components: {
			Input,
			ListOfItem,
		},
    methods: {
      deletedTodo(id) {
        this.$emit('deleted-todo', id)
      },
      addTodo(todo) {
      this.todos.push(todo)
    }
    }
	};
</script>
