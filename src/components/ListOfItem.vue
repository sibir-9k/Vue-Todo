<template>
    <li class="list-group-item p-3"   >
      
        <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"  v-on:change="todo.checked = !todo.checked">
        <label class="form-check-label" for="flexCheckDefault"></label>
      </div>

      <span v-bind:class="{done: todo.checked}">
        <div class="todo">{{todo.title}}</div>
      </span>
      
      
      <button type="button" class="btn btn-outline-danger btn-sm" v-on:click="$emit('deleted-todo', todo.id)">
				&times;
			</button>
    </li>
</template>

<script>
export default {
  props:{
    todo: {
      type: Object,
      required: true
    }
  } 
}
</script>

<style scoped>
 li{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.done{
  text-decoration: line-through;
  color: #cacaca;
}
span{
  display: flex;
  justify-content: flex-end;
}
</style>