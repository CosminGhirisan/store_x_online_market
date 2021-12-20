import { createGlobalStyle } from 'styled-components'


const GlobalStyles = createGlobalStyle`
   *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "Roboto", sans-serif;
   }

   body {
      width: 100%;
   }

   h2{
      display: flex;
      align-items: center;
      color: #fff;
      font-size: 15px;
      font-weight: 600;
   }

   h3{
      font-size: 15px;
   }
`

export default GlobalStyles;
