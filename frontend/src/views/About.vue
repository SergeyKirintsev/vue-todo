<template>
  <div class="about">
    <h1>Todo list</h1>
    <ul v-if="!isFetching">
      <li v-for="todo in todos" v-bind:key="todo._id">
        {{ todo.title }}
        {{ todo.body }}
      </li>
    </ul>
    <p v-else>Загрузка...</p>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: mapState({
    // стрелочные функции могут сделать код очень кратким
    todos: (state) => state.todos,
    isFetching: (state) => state.isFetching,
  }),
  methods: {
    ...mapActions(["fetchTodos"]),
  },
  mounted() {
    this.fetchTodos();
  },
};
</script>
