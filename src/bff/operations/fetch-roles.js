import { getRoles } from "./get-roles";
import { sessions } from "../sessions";
import { ROLE } from "../constants";
export const fetchRoles = async (userSession) => {
	const accessRoles = [ROLE.ADMIN];
	if (!sessions.access(userSession, accessRoles)) {
		return {
			error: "Нет доступа! Только администраторам.",
			response: null,
		};
	}
	const roles = await getRoles();
	return {
		error: null,
		response: roles,
	};
};
