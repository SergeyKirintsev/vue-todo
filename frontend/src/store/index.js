import { createStore } from "vuex";

export default createStore({
  state: {
    todos: [
      { id: 1, title: "Z", body: "zzzzzz" },
      { id: 2, title: "Y", body: "yyyy" },
      { id: 3, title: "X", body: "xxx" },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
