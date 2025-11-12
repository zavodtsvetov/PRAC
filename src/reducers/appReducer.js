import { ACTION_TYPE } from "../actions/types";

const initialAppState = {
	wasLogout: false,
};

export const appReducer = (state = initialAppState, action) => {
	switch (action.type) {
		case ACTION_TYPE.LOGOUT: {
			return {
				...state,
				wasLogout: !state.wasLogout,
			};
		}
		default:
			return state;
	}
};
