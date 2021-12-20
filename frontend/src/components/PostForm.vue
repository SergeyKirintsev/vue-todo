<template>
  <form @submit.prevent>
    <h4>Создание</h4>
    <MyInput v-model="todo.title" type="text" placeholder="Название" />
    <MyInput v-model="todo.body" type="text" placeholder="Описание" />
    <MyButton
      @click="createPost"
      style="align-self: flex-end; margin-top: 15px"
    >
      Создать
    </MyButton>
  </form>
</template>

<script>
import MyInput from "./UI/MyInput";
import MyButton from "./UI/MyButton";
export default {
  components: { MyButton, MyInput },
  data() {
    return {
      todo: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    createPost() {
      this.$emit("create", this.todo);
      this.todo = {
        title: "",
        body: "",
      };
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
</style>
