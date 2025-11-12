import styled from "styled-components";
export const AnimatedText = styled.div`
background: linear-gradient(90deg, #e933ff, #ffb400, #ff3333, #334dff, #e933ff);
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textflow 5s linear infinite;
}
@keyframes textflow {
  from {background-position: 0% center}         
  to {background-position: 200% center}
}
`;
