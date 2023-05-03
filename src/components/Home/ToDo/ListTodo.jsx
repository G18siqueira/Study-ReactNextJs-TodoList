import { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import PropTypes from 'prop-types';
import styles from './todo.module.scss';
const ListTodo = ({ todos, handleToggle, handleDelete }) => {
	return (
		<ul className={styles['todo-list']}>
			{todos.map((todo) => (
				<li key={todo.id}>
					<span
						className={`${styles['']} ${
							todo.checked ? styles['checked'] : ''
						}`}
						onClick={() => handleToggle && handleToggle(todo)}
						role="button"
					>
						{todo.title}
					</span>
					<button
						type="button"
						onClick={() => handleDelete && handleDelete(todo)}
					>
						<MdDelete />
					</button>
				</li>
			))}
		</ul>
	);
};

ListTodo.protoTypes = {
	todos: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			title: PropTypes.string.isRequired,
			checked: PropTypes.bool.isRequired,
		}),
	).isRequired,
	handleToggle: PropTypes.func.isRequired,
	handleDelete: PropTypes.func.isRequired,
};

export default ListTodo;
