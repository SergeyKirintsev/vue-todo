<template>
  <div class="about">
    <MyInput
      placeholder="Поиск...."
      :model-value="searchQuery"
      @update:model-value="setSearchQuery"
    />

    <MyButton @click="showCreateForm" style="margin: 15px">
      Добавить запись
    </MyButton>

    <MyDialog v-model:show="isShowCreateForm">
      <PostForm
        @submit="createTodo"
        form-title="Добавление"
        button-title="Создать"
        :edit-data="{}"
      />
    </MyDialog>

    <MyDialog v-model:show="isShowEditForm">
      <PostForm
        @submit="editTodo"
        form-title="Редактирование"
        button-title="Сохранить"
        :edit-data="todoForEdit"
      />
    </MyDialog>

    <TodoList
      :todos="searchedTodos"
      v-if="!isFetching"
      @remove="deleteTodo"
      @edit="showEditForm"
    />
    <p v-else>Загрузка...</p>
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
      isShowCreateForm: false,
      isShowEditForm: false,
      todoForEdit: {},
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
    ...mapActions(["fetchTodos", "postTodo", "deleteTodo"]),
    ...mapMutations(["setSearchQuery"]),
    showCreateForm() {
      this.isShowCreateForm = true;
    },
    showEditForm(todo) {
      console.log(todo);
      this.todoForEdit = { ...todo };
      this.isShowEditForm = true;
    },
    createTodo(todo) {
      this.closePopup();
      this.postTodo(todo);
    },
    editTodo(todo) {
      console.log(todo);
      this.closePopup();
      // this.postTodo(todo);
    },
    closePopup() {
      this.isShowEditForm = false;
      this.isShowCreateForm = false;
    },
  },
  mounted() {
    this.fetchTodos();
  },
};
</script>
