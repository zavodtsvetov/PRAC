import styled from "styled-components";
import { Link } from "react-router";
import { Button, Icon } from "../../../../components";
import { useNavigate } from "react-router";
const RightAligned = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StyledIcon = styled.div`
  &:hover {
    cursor: pointer;
  }
`;
const StyledLink = styled(Link)`
  color: white;
`;
const ControlPanelContainer = ({ className }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className={className}>
        <RightAligned>
          <Button>
            <StyledLink to="/login">Войти</StyledLink>
          </Button>
        </RightAligned>
        <RightAligned>
          <StyledIcon onClick={() => navigate(-1)}>
            <Icon id="fa-backward" margin="10px 0 0 0" />
          </StyledIcon>

          <Link to="/post">
            <Icon id="fa-file-text-o" margin="10px 0 0 18px" />
          </Link>
          <Link to="/users">
            <Icon id="fa-users" margin="10px 0 0 18px" />
          </Link>
        </RightAligned>
      </div>
    </>
  );
};

export const ControlPanel = styled(ControlPanelContainer)``;
