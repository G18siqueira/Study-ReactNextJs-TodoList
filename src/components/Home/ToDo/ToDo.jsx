import { useState } from 'react';

import styles from './todo.module.scss';
import InputToDo from './InputToDo';
import ListTodo from './ListTodo';

const ToDo = () => {
	const [todos, setTodos] = useState([]);

	const onNewtodo = (value) => {
		const newTodo = [
			...todos,
			{ id: new Date().getTime(), title: value, checked: false },
		];

		setTodos(newTodo);
	};

	const handleToggle = (todo) => {
		const newTodos = todos.map((obj) =>
			obj.id === todo.id ? { ...obj, checked: !todo.checked } : obj,
		);
		setTodos(newTodos);
	};

	const handleDelete = (todo) => {
		const removeTodos = todos.filter((obj) => obj.id !== todo.id);
		setTodos(removeTodos);
	};

	return (
		<section className={styles['todo']}>
			<div className={`container ${styles['todo-container']}`}>
				<div className={styles['todo-content']}>
					<h1>Todo</h1>

					<InputToDo onNewTodo={onNewtodo} />
					<ListTodo
						todos={todos}
						handleToggle={handleToggle}
						handleDelete={handleDelete}
					/>
				</div>
			</div>
		</section>
	);
};

export default ToDo;
