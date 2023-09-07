import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";

const TodoList = () => {
	const [todos, setTodos] = useState([]);
	const addList = (newList) => {
		setTodos((todos) => [...todos, { id: uuidv4(), ...newList }]);
	};
	const remove = (id) => {
		setTodos((todos) => todos.filter((lst) => lst.id !== id));
	};
	return (
		<div>
			<TodoForm addList={addList} />
			<ul>
				{todos.map((todoTask) => (
					<Todo
						remove={remove}
						key={todoTask.id}
						id={todoTask.id}
						task={todoTask.task}
					/>
				))}
			</ul>
		</div>
	);
};

export default TodoList;
