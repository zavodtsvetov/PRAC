import styled from "styled-components";
const TableRowContainer = ({ className, children }) => (
	<div className={className}>{children}</div>
);
export const TableRow = styled(TableRowContainer)`
	display: flex;
	align-items: center;
	border: ${({ border }) => (border ? "2px solid black;" : "none")} //
		& > div {
		padding: 5px 10px;
	}
	& select {
		border: none;
		background-color: #dcdcdc;
		font-size: 16px;
	}

	& .login-column {
		width: 200px;
		display: flex;
		justify-content: center;
		align-item: center;
	}
	& .registed-column {
		width: 250px;
		display: flex;
		justify-content: center;
		align-item: center;
	}
	& .role-column {
		width: 150px;
		display: flex;
		justify-content: center;
		align-item: center;
	}
`;
