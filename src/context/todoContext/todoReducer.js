import { COMPLETETASK, ADDTASK, CLEARCURRENT, UPDATE_TASK, CHANGE_GROUP, SET_TASKS } from '../types';

const reducer = (state, action) => {
	switch (action.type) {
		case SET_TASKS:
			return {
				...state,
				tasks : action.payload
			}
		case ADDTASK:
			return {
				...state,
				tasks: [...state.tasks, action.payload]
			};
		case COMPLETETASK:
			return {
				...state,
				tasks: state.tasks.filter((task) => task.id !== action.payload),
			};
		case UPDATE_TASK:
			return {
				...state,
				tasks: state.tasks.map(task => task.id === action.payload.id ? action.payload : task)
			}
		case CLEARCURRENT:
			return {
				...state,
				current: null,
			};
		case CHANGE_GROUP:
			return {
				...state,
				group: action.payload
			}
		default:
			return {
				...state,
			};
	}
};

export default reducer;
