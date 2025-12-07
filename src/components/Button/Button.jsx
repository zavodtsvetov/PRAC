import styled from "styled-components";
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
	font-size: ${({ fontSize = "30px" }) => fontSize};
	width: ${({ width = "auto" }) => width};
	height: 32px;
	color: ${({ color = "white" }) => color};
	background-color: ${({ backgrounColor = "#405060" }) => backgrounColor};
	border: ${({ border = "2px solid black" }) => border};
	&:hover {
		cursor: pointer;
	}
`;
