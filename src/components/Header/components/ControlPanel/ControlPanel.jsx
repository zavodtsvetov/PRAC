import styled from "styled-components";
import { Link } from "react-router";
import { Button, Icon } from "../../../../components";
import { useNavigate } from "react-router";
import { ROLE } from "../../../../constants";
import { useDispatch, useSelector } from "react-redux";
import { userLoginSelector, userRoleIdSelector } from "../../../../selectors";
import { logout } from "../../../../actions";
import { userSessionSelector } from "../../../../selectors/user-session-selector";
const RightAligned = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

const StyledLink = styled(Link)`
	color: white;
`;
const StyledLogin = styled.div`
	font-size: 20px;
`;
const StyledLogoutIcon = styled.div`
	margin: 0 0 10px 10px;
`;
const ControlPanelContainer = ({ className }) => {
	const roleId = useSelector(userRoleIdSelector);
	const login = useSelector(userLoginSelector);
	const session = useSelector(userSessionSelector);
	const navigate = useNavigate();
	const nav = () => {
		navigate(-1);
		console.log("nav");
	};
	const dispatch = useDispatch();
	return (
		<>
			<div className={className}>
				<RightAligned>
					{roleId === ROLE.GUEST ? (
						<Button>
							{" "}
							<StyledLink to="/login">Войти</StyledLink>
						</Button>
					) : (
						<>
							<StyledLogin>{login}</StyledLogin>
							<Link onClick={() => dispatch(logout(session))}>
								<Icon id="fa-sign-out" padding="0 0 0 10px;" />
							</Link>
						</>
					)}
				</RightAligned>
				<RightAligned>
					<Link onClick={nav}>
						<Icon id="fa-backward" margin="10px 0 0 0" />
					</Link>

					<Link to="/post">
						<Icon id="fa-file-text-o" margin="10px 0 0 18px" />
					</Link>
					{roleId === ROLE.ADMIN ? (
						<Link to="/users">
							<Icon id="fa-users" margin="10px 0 0 18px" />
						</Link>
					) : (
						""
					)}
				</RightAligned>
			</div>
		</>
	);
};
export const ControlPanel = styled(ControlPanelContainer)``;
