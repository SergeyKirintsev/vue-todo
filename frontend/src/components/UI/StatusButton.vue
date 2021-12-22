<template>
  <button
    :class="{ button: !completed, button__completed: completed }"
  ></button>
</template>

<script>
export default {
  name: "StatusButton",
  props: {
    completed: Boolean,
  },
};
</script>

<style scoped>
.button {
  height: 40px;
  width: 40px;
  text-align: center;
  cursor: pointer;
  border: 1px solid #5622ed;
  background-color: #ffffff;
}
.button::after {
  content: "";
  display: inline-block;
  margin-bottom: 4px;
  width: 16px;
  border-bottom: 1px solid #5622ed;
}

.button__completed {
  height: 40px;
  width: 40px;
  text-align: center;
  cursor: pointer;
  border: 1px solid #1ab900;
  background-color: #ffffff;
}
.button__completed::after {
  content: "";
  display: inline-block;
  margin-bottom: 4px;
  width: 12px;
  height: 24px;
  border-bottom: 3px solid #1ab900;
  border-right: 3px solid #1ab900;
  transform: translate(0px, -2px) rotate(45deg);
}
</style>
