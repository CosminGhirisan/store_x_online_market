import React from 'react'
import ReactDom from 'react-dom'
import styled from 'styled-components';
import { FaRegWindowClose } from 'react-icons/fa'
import { useCart } from 'react-use-cart'

export default function Modal({open, onClose, title, image, description, price, product }) {
   const { addItem, inCart } = useCart();
   if(!open) return null;

   return ReactDom.createPortal(
      <>
         <StyledOverlay onClick={onClose} />
         <StyledModal>
            <StyledColseBtn onClick={onClose} >
                  <FaRegWindowClose size="25px" color="#d6d6d6"/>
            </StyledColseBtn>
            <img src={image} alt={title} />
            <StyledRight>
               <StyledInfo>
                  <h1>{title}</h1>
                  <p>{description}</p>
                  <p>{price+" $"}</p>
               </StyledInfo>
               {inCart(product.id) 
                  ? <button disabled>Added</button> 
                  : <button onClick={() => addItem(product)}>Add to Cart</button>
               }
            </StyledRight>
         </StyledModal>
      </>,
      document.getElementById('portal')
   )
}

const StyledModal = styled.div`
   display: flex;
   align-items: center;
   position: fixed;
   top: 50%;
   left: 65%;
   transform: translate(-50%, -50%);
   background-color: #ffffff;
   width: 60%;
   height: 80%;
   border-radius: 5px;
   padding: 30px;
   z-index: 10;

   @media only screen and (max-width: 962px) {
      flex-direction: column;
   }

   img{
      max-width: 250px;
      height: 70%;
      object-fit: scale-down;

      @media only screen and (max-width: 962px) {
         height: 40%;
      }
   }
`
const StyledRight = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: start;
   align-items: center;
   height: 100%;
   margin: 20px;
   text-align: justify;
   overflow: scroll;

   button{
      color: #FAFAFA;
      background: #117540;
      border: none;
      border-radius: 2px;
      padding: 15px 40px;
      font-size: 16px;
      font-weight: 300;
      cursor: pointer;
      text-decoration: none;
      transition: transform 250ms ease-in;

      @media only screen and (max-width: 962px) {
         padding: 10px 25px;
      }

      &:hover{
         transform: scale(1.05);
      }

      &:active{
         transform: scale(1);
      }
   }

   button:disabled,
   button[disabled]{
      color: #666666;
      background-color: #cccccc;

   :hover{
      transform: scale(1);
      cursor: not-allowed;
   }
   }
`;

const StyledInfo = styled.div`
   h1{
      color: #424242;
      margin-top: 5px;
      margin-bottom: 30px;
      font-size: 25px;
      text-align: justify;

      @media only screen and (max-width: 962px) {
         margin-bottom: 10px;
         font-size: 15px;
      }
   }  

   p{
      color: #858585;
      margin-bottom: 20px;
      font-weight: 300;

      @media only screen and (max-width: 962px) {
         font-size: 13px;
      }
   }
`;

const StyledColseBtn = styled.button`
   position: absolute;
   top: 15px;
   right: 15px;
   display: flex;
   align-items: center;
   background: transparent;
   border: none;
   border-radius: 5px;
   padding: 2px;
   cursor: pointer;
   transition: transform 250ms ease-in;

   &:hover{
      transform: scale(1.05);
   }

   &:active{
      transform: scale(1);
   }
`;

const StyledOverlay = styled.div`
   position: fixed;
   top: 0;
   right: 0;
   bottom: 0;
   left: 0;
   background-color: #33333399;
   z-index: 9;
`