import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

/* Track */
::-webkit-scrollbar-track {
  border-radius: 8px;
}
  
/* Handle */
::-webkit-scrollbar-thumb {
  background: ${({ theme }) => theme.COLORS.PINK};
  border-radius: 10px;
}

  :root{
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
    outline: none;
  }

  body{
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color:  ${({ theme }) => theme.COLORS.WHITE};

    -webkit-font-smoothing: antialiased;
  }

  a{
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }

  input{
    outline: none;
  }
`;
