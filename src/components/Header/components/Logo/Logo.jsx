import { Link } from "react-router";
import styled from "styled-components";
import { Icon } from "../../../../components";
import { AnimatedText } from "../../../../styles/AnimatedText";
const SmallText = styled.div`
  font-size: 18px;
`;
const LargeText = styled.div`
  font-size: 48px;
  font-weight: 400;
  line-height: 58px;
`;
const LogoContainer = ({ className }) => (
  <Link className={className} to="/">
    <Icon fontSize="70px" id={`fa-code`} padding="0 10px 0 0" />
    <AnimatedText>
      <LargeText>Блог</LargeText>
      <SmallText>веб-разработчика</SmallText>
    </AnimatedText>
  </Link>
);
export const Logo = styled(LogoContainer)`
  display: flex;
  margin-top: -21px;
`;
