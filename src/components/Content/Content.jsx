export const Content = ({ children, error }) =>
	error ? (
		<>
			<div>Ошибка: {error}</div>
		</>
	) : (
		children
	);
