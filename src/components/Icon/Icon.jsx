import styled from 'styled-components';

const IconContainer = ({ className, id }) => (
	<div className={className}>
		<i className={`fa ${id}`} aria-hidden="true"></i>
	</div>
);
export const Icon = styled(IconContainer)`
	font-size: ${({ fontSize = '24px' }) => fontSize};
	padding: ${({ padding = '0' }) => padding};
	margin: ${({ margin = '0' }) => margin};
	background-color: ${({ bgColor = 'white' }) => bgColor};
	border: ${({ border = 'none' }) => border};
`;
