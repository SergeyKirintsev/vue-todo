<template>
  <div class="about">
    <MyInput
      placeholder="Поиск...."
      :model-value="searchQuery"
      @update:model-value="this.setSearchQuery"
    />
    <ul v-if="!isFetching">
      <li v-for="todo in this.searchedTodos" v-bind:key="todo._id">
        {{ todo.title }}
        {{ todo.body }}
      </li>
    </ul>
    <p v-else>Загрузка...</p>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
import MyInput from "../components/UI/MyInput";

export default {
  components: { MyInput },
  computed: {
    ...mapState({
      isFetching: (state) => state.isFetching,
      searchQuery: (state) => state.searchQuery,
    }),
    ...mapGetters(["searchedTodos"]),
  },
  methods: {
    ...mapActions(["fetchTodos"]),
    ...mapMutations(["setSearchQuery"]),
  },
  mounted() {
    this.fetchTodos();
  },
};
</script>
