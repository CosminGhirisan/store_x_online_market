import React from 'react'
import styled from 'styled-components';
import { BsPerson } from 'react-icons/bs'

const Contact = () => {
   return (
      <div>
         <StyledContainer>
            <StyledInfo>
               <BsPerson size="70px" color="#164FAC"/>
               <h1>CONTACT</h1>
               <p>Phone: +333 323 232 32</p>
               <p>Email: info@store.com</p>
               <p>Adress: 23 Blabla Str. Somewhere</p>
            </StyledInfo>
         </StyledContainer>
      </div>
   )
}

const StyledContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 100%;
   min-height: 100vh;
   background-color: #FAFAFA;
   border-radius: 5px;
   padding: 30px;
`;

const StyledInfo = styled.div`
   position: fixed;
   top: 50%;
   left: 50%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   width: 50%;
   height: 60%;
   background-color: #fff;
   border-radius: 5px;
   padding: 0 50px;
   overflow: scroll;
   z-index: 10;
   transform: translate(-50%, -50%);

   @media only screen and (max-width: 768px) {
      width: 70%;
      height: 60%;
   }

   h1{
      color: #424242;
      margin: 30px 0 20px;
      font-weight: 400;
   }

   p{
      color: #858585;
      margin-bottom: 10px;
      font-weight: 300;
      text-align: justify;
   }
`;

export default Contact
