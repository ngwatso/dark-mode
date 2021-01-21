import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (initialValue) => {
	// TODO set up state, using useLocalStorage hook
	const [darkMode, setDarkMode] = useLocalStorage("darkMode", initialValue);

	// ! return state
	return [darkMode, setDarkMode];
};
