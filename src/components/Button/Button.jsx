import styled from 'styled-components';
const ButtonContainer = ({ children, className, width, color, ...props }) => {
	return (
		<button className={className} {...props}>
			{children}
		</button>
	);
};

export const Button = styled(ButtonContainer)`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 30px;
	width: ${({ width = 'auto' }) => width};
	height: 32px;
	color: ${({ color = 'white' }) => color};
	background-color: #405060;
	border: 2px solid black;
	&:hover {
		cursor: pointer;
	}
`;
