import { server } from "../bff/server";
import { useSelector } from "react-redux";
import { useCallback } from "react";
import { userSessionSelector } from "../selectors";
export const useServerRequest = () => {
	const session = useSelector(userSessionSelector);

	return useCallback(
		(operation, ...params) => {
			const request = ["register", "authorize"].includes(operation)
				? params
				: [session, ...params];

			return server[operation](...request);
		},
		[session],
	);
};
