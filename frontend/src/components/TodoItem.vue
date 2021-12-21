<template>
  <div class="card">
    <div class="card__text">
      <div><strong>Название:</strong> {{ todo.title }}</div>
      <div><strong>Описание:</strong> {{ todo.body }}</div>
    </div>
    <div class="card__buttons">
      <MyButton @click="$emit('edit')" style="margin-right: 15px"
        >Редактировать</MyButton
      >
      <MyButton @click="$emit('remove')">Удалить</MyButton>
    </div>
  </div>
</template>

<script>
import MyButton from "./UI/MyButton";
export default {
  name: "TodoItem",
  components: { MyButton },
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.card {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.card__buttons {
  display: flex;
}
.card__text {
  text-align: left;
}
</style>
