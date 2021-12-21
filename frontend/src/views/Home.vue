<template>
  <div class="about">
    <MyInput
      placeholder="Поиск...."
      :model-value="searchQuery"
      @update:model-value="setSearchQuery"
    />

    <MyButton @click="showDialog" style="margin: 15px"> Add todo </MyButton>

    <MyDialog v-model:show="dialogVisible">
      <PostForm @create="createTodo" />
    </MyDialog>

    <TodoList :todos="searchedTodos" v-if="!isFetching" />
    <p v-else>Загрузка...</p>
    <!--    <ul v-if="!isFetching">-->
    <!--      <li v-for="todo in searchedTodos" v-bind:key="todo._id">-->
    <!--        {{ todo.title }}-->
    <!--        {{ todo.body }}-->
    <!--      </li>-->
    <!--    </ul>-->
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
import MyInput from "../components/UI/MyInput";
import MyButton from "../components/UI/MyButton";
import MyDialog from "../components/UI/MyDialog";
import PostForm from "../components/PostForm";
import TodoList from "../components/TodoList";

export default {
  components: { TodoList, MyButton, MyInput, MyDialog, PostForm },
  data() {
    return {
      dialogVisible: false,
    };
  },
  computed: {
    ...mapState({
      isFetching: (state) => state.isFetching,
      searchQuery: (state) => state.searchQuery,
    }),
    ...mapGetters(["searchedTodos"]),
  },
  methods: {
    ...mapActions(["fetchTodos", "postTodo"]),
    ...mapMutations(["setSearchQuery"]),
    showDialog() {
      this.dialogVisible = true;
    },
    createTodo(todo) {
      this.dialogVisible = false;
      this.postTodo(todo);
    },
  },
  mounted() {
    this.fetchTodos();
  },
};
</script>
