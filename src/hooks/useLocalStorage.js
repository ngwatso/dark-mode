import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
	// TODO set state to be stored
	const [storedValue, setStoredValue] = useState(() => {
		// TODO check localStorage for stored data
		if (localStorage.getItem(key)) {
			// ! if state exists, return state
			return JSON.parse(localStorage.getItem(key));
		}
		// ! if state does not exist, set & return state
		localStorage.setItem(key, JSON.stringify(initialValue));
		return initialValue;
	});
};

export default useLocalStorage;
