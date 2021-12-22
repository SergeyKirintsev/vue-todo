<template>
  <form>
    <h4>{{ formTitle }}</h4>
    <MyInput v-model="todo.title" type="text" placeholder="Название"/>
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
    onSubmit: Function,
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
    handleSubmit(evt) {
      evt.preventDefault();
      const data = { ...this.todo, _id: this.editData._id };
      this.onSubmit(data);
    },
  },
  mounted() {
    const { title = "", body = "" } = this.editData;
    this.todo.title = title;
    this.todo.body = body;
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
</style>
