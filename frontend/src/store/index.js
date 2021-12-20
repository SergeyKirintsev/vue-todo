import { createStore } from "vuex";
import axios from "axios";

const url = "http://localhost:3000/todos";

export default createStore({
  state: () => ({
    isFetching: false,
    todos: [],
  }),
  mutations: {
    setTodos(state, todos) {
      state.todos = todos;
    },
    setIsFetching(state, bool) {
      state.isFetching = bool;
    },
  },
  actions: {
    async fetchTodos({ commit }) {
      try {
        commit("setIsFetching", true);
        const response = await axios.get(url);
        commit("setTodos", response.data.data);
      } catch (e) {
        console.log(e);
      } finally {
        commit("setIsFetching", false);
      }
    },
  },
  modules: {},
});
