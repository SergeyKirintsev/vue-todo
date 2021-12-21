<template>
  <form @submit.prevent>
    <h4>{{ formTitle }}</h4>
    <MyInput v-model="todo.title" type="text" placeholder="Название" defaultValue="sdsd"/>
    <MyInput v-model="todo.body" type="text" placeholder="Описание" />
    <MyButton
      @click="handleSubmit"
      style="align-self: flex-end; margin-top: 15px"
    >
      {{ buttonTitle }}
    </MyButton>
  </form>
</template>

<script>
import MyInput from "./UI/MyInput";
import MyButton from "./UI/MyButton";
export default {
  components: { MyButton, MyInput },
  props: {
    formTitle: String,
    buttonTitle: String,
    editData: Object,
  },
  data() {
    return {
      todo: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      this.$emit("submit", this.todo);
      this.todo = {
        title: "",
        body: "",
      };
    },
  },
  mounted() {
    const { title = "", body = "" } = this.editData;
    console.log("title", title);
    this.todo.title = title;
    this.todo.body = body;
  }
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
</style>
