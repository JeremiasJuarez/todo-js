import './styles.css';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';



export const todoList = new TodoList();

// const tarea = new Todo('Aprender JavaScript');
// todoList.nuevoTodo( tarea );


// console.log( todoList );

// crearTodoHtml( tarea );


// localStorage.setItem('mi-key','ABC123');

// 155 '12

todoList.todos.forEach( todo => crearTodoHtml( todo )); // llamamos funcion de construccion de html

console.log('todos', todoList.todos ); 
