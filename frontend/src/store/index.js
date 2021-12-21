import { createStore } from "vuex";
import axios from "axios";

const baseUrl = "http://localhost:3000/todos";

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
    setTodo(state, todo) {
      state.todos = [...state.todos, todo];
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
        const response = await axios.get(baseUrl, {});
        commit("setTodos", response.data.data);
      } catch (e) {
        console.log(e);
      } finally {
        commit("setIsFetching", false);
      }
    },
    async postTodo({ commit }, todo) {
      try {
        const { data } = await axios.post(baseUrl, {
          title: todo.title,
          body: todo.body,
        });
        commit("setTodo", data);
      } catch (e) {
        console.log(e);
      }
    },
  },
  modules: {},
});
