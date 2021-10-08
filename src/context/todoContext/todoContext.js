import { createContext, useContext } from 'react';

const TodoContext = createContext()
export const useTodos = () => {
	return useContext(TodoContext)
}
export default TodoContext