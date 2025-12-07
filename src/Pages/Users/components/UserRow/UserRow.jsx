import { Icon } from "../../../../components";
import styled from "styled-components";
import { TableRow } from "../table-row/TableRow";
import { useState } from "react";
import { useServerRequest } from "../../../../hooks";
const UserRowContainer = ({
	className,
	id: userId,
	login,
	registeredAt,
	roleId: userRoleId,
	roles,
	onUserDelete,
}) => {
	const [initialRoleId, setInitialRoleId] = useState(userRoleId);
	const [selectedRoleId, setSelectedRoleId] = useState(userRoleId);
	const requestServer = useServerRequest();
	const onRoleSave = (userId, newUserRoleId) => {
		requestServer("updateUserRole", userId, newUserRoleId).then(() => {
			setInitialRoleId(newUserRoleId);
		});
	};
	const onRoleChange = ({ target }) => {
		setSelectedRoleId(Number(target.value));
	};
	const isSaveButtonDisabled = selectedRoleId === initialRoleId;
	return (
		<>
			<div className={className}>
				<TableRow border={true}>
					<div className="login-column"> {login} </div>
					<div className="registed-column">{registeredAt}</div>
					<div className="role-column">
						<select value={selectedRoleId} onChange={onRoleChange}>
							{roles.map(({ id, name }) => (
								<option id={id} key={id} value={id}>
									{name}
								</option>
							))}
						</select>
						<div onClick={() => onRoleSave(userId, selectedRoleId)}>
							<Icon
								id="fa-floppy-o"
								margin=" 0 0 0 10px;"
								disabled={isSaveButtonDisabled}
							/>{" "}
						</div>
					</div>
				</TableRow>
				<div onClick={onUserDelete}>
					<Icon id="fa-trash" margin="0 0 0 20px;" />
				</div>
			</div>
		</>
	);
};

export const UserRow = styled(UserRowContainer)`
	margin: 5px auto;
	display: flex;
	& > div {
		display: flex;
		align-items: center;
	}
`;
