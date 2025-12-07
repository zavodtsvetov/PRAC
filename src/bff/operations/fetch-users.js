import { getUsers } from "../api";
import { sessions } from "../sessions";
import { ROLE } from "../constants";
export const fetchUsers = async (userSession) => {
	const accessRoles = [ROLE.ADMIN];
	if (!sessions.access(userSession, accessRoles)) {
		return {
			error: "Нет доступа! Только администраторам.",
			response: null,
		};
	}
	const roles = await getUsers();
	return {
		error: null,
		response: roles,
	};
};
