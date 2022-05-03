<template>
  <div class="form-group">
    <input
      type="text"
      class="form-control p-3"
      placeholder="Введите название заметки"
      value=""
      v-on:keyup.enter="submit"
      v-model="title"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
    };
  },
  methods: {
    submit() {
      if (this.title.trim()) {
        const newTodo = {
          key: new Date().getTime(),
          title: this.title,
          checked: false,
        };
        this.$emit("add-todo", newTodo);
        this.title = "";
      }
    },
  },
};
</script>
