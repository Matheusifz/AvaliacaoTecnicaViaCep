import styled from "styled-components";

export const Container = styled.div`
  input {
    background: Transparent no-repeat;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    border: none;
    overflow: hidden;
    outline: none;

    text-align: center;

    width: 260px;
    padding: 0 20px;
    color: #fff;

    &::placeholder {
      color: #fff;
    }

    &:focus::placeholder {
      color: transparent;
    }
  }
`;
