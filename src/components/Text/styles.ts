import styled from "styled-components";

interface ContainerProps {
  color: string;
  backgroundColor?: string;
}

export const Container = styled.div<ContainerProps>`
  background: ${(props) =>
    props.backgroundColor ? props.backgroundColor : ""};
  color: ${(props) => (props.color ? props.color : "#6c8fa8")};
`;
