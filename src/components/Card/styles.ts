import styled from "styled-components";

interface ContainerProps {
  width: string;
  maxWidth: string;
  height: string;
}

export const Container = styled.div<ContainerProps>`
  background: #787c81;
  border-radius: 25px;
  padding: 10px 65px;

  display: flex;
  justify-content: center;
  align-items: center;

  width: ${(props) => (props.width ? props.width : "120px")};
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : "780px")};

  height: ${(props) => (props.height ? props.height : "300px")};
`;
