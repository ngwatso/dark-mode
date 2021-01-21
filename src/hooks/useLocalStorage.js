import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
	// TODO set state to be stored
	const [storedValue, setStoredValue] = useState(() => {
		// TODO check localStorage for stored data
		const item = window.localStorage.getItem(key);

		// ! if state exists, return state
		return item ? JSON.parse(item) : initialValue;
	});
	// ! if state does not exist, return initial data

	// TODO "setter function"
	const setValue = (value) => {
		setStoredValue(value);

		window.localStorage.setItem(key, JSON.stringify(value));
	};

	return [storedValue, setValue];
};
