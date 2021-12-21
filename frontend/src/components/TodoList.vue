<template>
  <div v-if="todos.length > 0">
    <transition-group name="todo-list">
      <TodoItem
        v-for="todo in todos"
        :todo="todo"
        :key="todo._id"
        @remove="$emit('remove', todo)"
        @edit="$emit('edit', todo)"
      />
    </transition-group>
  </div>
  <h2 v-else style="color: red">Список пуст</h2>
</template>

<script>
import TodoItem from "./TodoItem";
export default {
  name: "TodoList",
  components: { TodoItem },
  props: {
    todos: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.todo-list-item {
  display: inline-block;
  margin-right: 10px;
}
.todo-list-enter-active,
.todo-list-leave-active {
  transition: all 0.4s ease;
}
.todo-list-enter-from,
.todo-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
.todo-list-move {
  transition: transform 0.4s ease;
}
</style>
