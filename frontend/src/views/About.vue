<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ul>
      <li v-for="todo in todos" v-bind:key="todo.id">
        {{ todo.title }}
        {{ todo.text }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: mapState({
    // стрелочные функции могут сделать код очень кратким
    todos: (state) => state.todos,
  }),
};
</script>
