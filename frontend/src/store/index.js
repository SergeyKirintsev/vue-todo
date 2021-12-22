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
    deleteTodo(state, todo) {
      state.todos = [...state.todos.filter((el) => el._id !== todo._id)];
    },
    updateTodo(state, todo) {
      state.todos = state.todos.map((el) =>
        el._id === todo._id ? { ...todo } : el
      );
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
    async deleteTodo({ commit }, todo) {
      try {
        const { data } = await axios.delete(`${baseUrl}/${todo._id}`);
        commit("deleteTodo", data.data);
      } catch (e) {
        console.log(e);
      }
    },
    async updateTodo({ commit }, todo) {
      try {
        const { data } = await axios.patch(baseUrl, {
          id: todo._id,
          title: todo.title,
          body: todo.body,
        });
        commit("updateTodo", data);
      } catch (e) {
        console.log(e);
      }
    },
    async toggleTodo({ commit }, todo) {
      try {
        const { data } = await axios.patch(`${baseUrl}/completed`, {
          id: todo._id,
          completed: !todo.completed,
        });
        commit("updateTodo", data);
      } catch (e) {
        console.log(e);
      }
    },
  },
  modules: {},
});
