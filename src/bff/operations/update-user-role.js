import { setUserRole } from "../api";
import { sessions } from "../sessions";
import { ROLE } from "../constants";
export const updateUserRole = async (userSession, userId, newUserRoleId) => {
	const accessRoles = [ROLE.ADMIN];
	if (!sessions.access(userSession, accessRoles)) {
		return {
			error: "Нет доступа! Только администраторам.",
			response: null,
		};
	}
	setUserRole(userId, newUserRoleId);
	// console.log("userId: ", userId, "newUserRoleId: ", newUserRoleId);
	return {
		error: null,
		res: true,
	};
};
