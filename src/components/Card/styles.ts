import styled from "styled-components";

interface ContainerProps {
  width: string;
  height: string;
}

export const Container = styled.div<ContainerProps>`
  background: #787c81;
  border-radius: 25px;
  padding: 10px 65px;

  display: flex;
  justify-content: center;
  align-items: center;

  width: ${(props) => (props.width ? props.width + "px" : "120px")};

  height: ${(props) => (props.height ? props.height + "px" : "300px")};
`;
