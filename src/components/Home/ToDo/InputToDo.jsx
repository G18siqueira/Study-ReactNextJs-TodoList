import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './todo.module.scss';

const InputToDo = ({ onNewTodo }) => {
	const ESCAPE_KEY = 27;
	const ENTER_KEY = 13;
	const [value, setValue] = useState('');

	const handleErase = () => {
		setValue('');
	};

	const handleSubmit = () => {
		if (onNewTodo) {
			onNewTodo(value);
			handleErase();
		}
	};

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	const handleKeyDown = (e) => {
		if (e.key === 'Enter' || e.which === ENTER_KEY) {
			handleSubmit();
		} else if (e.key === 'Esc' || e.which === ESCAPE_KEY) {
			handleErase();
		}
	};

	return (
		<div className={styles['form-control']}>
			<input
				type="text"
				placeholder="O que precisa ser feito"
				value={value}
				onChange={handleChange}
				onKeyDown={handleKeyDown}
			/>
		</div>
	);
};

InputToDo.propTypes = {
	onNewTodo: PropTypes.func.isRequired,
};

export default InputToDo;
