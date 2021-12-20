import { createStore } from "vuex";
import axios from "axios";

const url = "http://localhost:3000/todos";

export default createStore({
  state: () => ({
    isFetching: false,
    todos: [],
    searchQuery: "",
  }),
  mutations: {
    setTodos(state, todos) {
      state.todos = todos;
    },
    setIsFetching(state, bool) {
      state.isFetching = bool;
    },
    setSearchQuery(state, searchQuery) {
      state.searchQuery = searchQuery;
    },
  },
  getters: {
    searchedTodos(state) {
      return [...state.todos].filter((todo) => {
        const fullText = todo.title + todo.body;
        return fullText.toLowerCase().includes(state.searchQuery.toLowerCase());
      });
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
