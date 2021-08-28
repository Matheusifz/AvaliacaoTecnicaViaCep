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

export const Content = styled.ul`
  display: flex;
  align-items: left;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;

  li {
    display: flex;
    align-items: center;
    font-size: 20px;
    list-style-type: none;
    padding: 12px;

    span {
      padding-left: 19px;
    }
  }
`;
