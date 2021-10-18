import React, { useEffect, useReducer } from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth, db } from '../../Config';
import { LOGIN_SUCCESS, LOGOUT } from '../types';
import { doc, setDoc } from '@firebase/firestore';
import { useTodos } from '../todoContext/todoContext';

// todo make user on login for firestore, add tasks to firestore, add

const AuthState = ({ children }) => {
	const { setTodos } = useTodos();
	const initialState = {
		user: null,
		isAuthenticated: false,
	};

	const [state, dispatch] = useReducer(authReducer, initialState);

	const signUp = async (email, password) => {
		try {
			const result = await createUserWithEmailAndPassword(auth, email, password);
			dispatch({ type: LOGIN_SUCCESS, payload: result.user });
			await setDoc(doc(db, 'users', result.user.uid), {
				email: result.user.email,
				tasks: [],
				createdOn: Date.now(),
			});
		} catch (error) {
			throw error;
		}
	};

	const logIn = async (email, password) => {
		try {
			const result = await signInWithEmailAndPassword(auth, email, password);
			dispatch({ type: LOGIN_SUCCESS, payload: result.user });
		} catch (error) {
			throw error;
		}
	};

	const logOut = () => {
		dispatch({ type: LOGOUT });
		signOut(auth);
	};

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			if (user) {
				dispatch({ type: LOGIN_SUCCESS, payload: user });
				setTodos(user.uid);
			} else {
				dispatch({ type: LOGOUT });
			}
		});
		return unsubscribe;
		// eslint-disable-next-line
	}, []);

	const value = {
		user: state.user,
		isAuthenticated: state.isAuthenticated,
		signUp,
		logIn,
		logOut,
	};
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthState;
