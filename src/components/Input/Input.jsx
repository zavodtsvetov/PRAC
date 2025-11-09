import styled from 'styled-components';
import { forwardRef } from 'react';
const InputContainer = forwardRef(({ className, width, ...props }, ref) => {
	return <input className={className} {...props} ref={ref} />;
});
export const Input = styled(InputContainer)`
	width: ${({ width = 'auto' }) => width};
	height: 30px;
	padding: 10px;
	margin-bottom: 10px;
	border: 2px solind black;
`;
