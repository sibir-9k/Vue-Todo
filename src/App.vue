<template>
	<div id="app">
		<Header />
		<Main v-bind:todos="todos" @deleted-todo="deletedTodo" @add-todo="addTodo" />
	</div>
</template>

<script>
	import Header from "@/components/Header";
	import Main from "@/components/Main";

	export default {
		name: "app",
		data() {
			return {
				todos: [
					{id: "1", title: "number 1", checked: false},
					{id: "2", title: "number 2", checked: false},
					{id: "3", title: "number 3", checked: false},
				],
			};
		},
		methods: {
			deletedTodo(id) {
				this.todos = this.todos.filter((t) => t.id !== id);
			},
			addTodo() {},
		},
		components: {
			Header,
			Main,
		},
	};
</script>

<style></style>
