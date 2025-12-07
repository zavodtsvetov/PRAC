import { H2 } from "../../components/";
import { UserRow, TableRow } from "./components";
import { Content } from "../../components/";
import { useEffect, useState } from "react";
import { useServerRequest } from "../../hooks/";
import styled from "styled-components";
import { ROLE } from "../../constants";
const UsersContainer = ({ className }) => {
	const [roles, setRoles] = useState([]);
	const [users, setUsers] = useState([]);
	const [errorMessage, setErrorMessage] = useState(null);
	const [usersUpdate, setUsersUpdate] = useState(false);

	const requestServer = useServerRequest();

	useEffect(() => {
		Promise.all([
			requestServer("fetchUsers"),
			requestServer("fetchRoles"),
		]).then(([usersRes, rolesRes]) => {
			if (usersRes.error || rolesRes.error) {
				setErrorMessage(usersRes.error || rolesRes.error);
				return;
			}
			setUsers(usersRes.response);
			setRoles(rolesRes.response);
		});
		requestServer("fetchRoles").then(({ rolesError, response }) => {
			if (rolesError) {
				return;
			}
			setRoles(response);
		});

		requestServer("fetchUsers");
	}, [requestServer, usersUpdate]);

	const onUserDelete = (userId) => {
		requestServer("removeUser", userId).then(() => {
			setUsersUpdate(!usersUpdate);
		});
	};
	return (
		<>
			<Content error={errorMessage}>
				<div className={className}>
					<H2>ПОЛЬЗОВАТЕЛИ</H2>
					<div>
						<TableRow>
							<div className="login-column">
								{" "}
								<b>Логин</b>{" "}
							</div>
							<div className="registed-column">
								<b>Дата регистрации</b>
							</div>
							<div className="role-column">
								{" "}
								<b>Роль</b>
							</div>
						</TableRow>

						{users.map(({ id, login, registeredAt, roleId }) => (
							<UserRow
								key={id}
								id={id}
								login={login}
								registeredAt={registeredAt}
								roleId={roleId}
								roles={roles.filter(
									(role) => role.id !== ROLE.GUEST,
								)}
								onUserDelete={() => onUserDelete(id)}
							/>
						))}
					</div>
				</div>
			</Content>

			<></>
		</>
	);
};

export const Users = styled(UsersContainer)`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 auto;
	width: 570px;
`;
