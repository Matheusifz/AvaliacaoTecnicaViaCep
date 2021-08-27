import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

 & > div {
    margin-top: 80px;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: left;
  flex-direction: column; 
  width: 100%;
  height: 100%;
`;
