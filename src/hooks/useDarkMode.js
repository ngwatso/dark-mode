import useLocalStorage from "./useLocalStorage";

const useDarkMode = (initialValue) => {
	// TODO set up state, using useLocalStorage hook
	const [value, setValue] = useLocalStorage("enabled", initialValue);

	// TODO handleChanges
	const handleChanges = (e) => {
		setValue({
			...value,
			[e.target.className]: e.target.value,
		});
	};

	// TODO clearForm
	const clearForm = (e) => {
		e.preventDefault();
		setValue(initialValue);
	};

	// ! return state
	return [value, handleChanges, clearForm];
};

export default useDarkMode;
