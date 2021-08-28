import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
    outline:0;
  }
  body{
    background: #E5E5E5;
    color: #FFF;
    -webkit-font-smoothing: antialiased;
    
  }
  body, input, button{ 
    font-size: 16px;   letter-spacing: 4px; 
    font-family: "Lato", sans-serif;
    font-weight:300;
  line-height: 20px; 
 }
  
  button, a{
    cursor: pointer;
  } `;
