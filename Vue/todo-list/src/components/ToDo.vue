<script>
import { ref } from 'vue';

export default {
  setup() {
    const todoList = ref([]);
    const newItem = ref('');

    const addTodo = () => {
      if (newItem.value !== '') {
        const newTodo = { id: todoList.value.length + 1, item: newItem.value };
        todoList.value.push(newTodo);
        newItem.value = '';
      }
    };

    const deleteTodo = (id) => {
      todoList.value = todoList.value.filter((todo) => todo.id !== id);
    };

    return { todoList, newItem, addTodo, deleteTodo };
  },
};
</script>

<template>
  <div class="todo-app">
    <h1>Todo App</h1>
    <div class="add-todo">
      <input v-model="newItem" type="text" placeholder="Add a new todo item" />
      <button @click="addTodo">Add</button>
    </div>
    <ul class="todo-list">
      <li v-for="(todo, index) in todoList" :key="index">
        {{ todo.item }}
        <button @click="deleteTodo(todo.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
