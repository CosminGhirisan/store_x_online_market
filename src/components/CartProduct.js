import React from 'react'
import styled from 'styled-components'
import { BsFillCartDashFill } from 'react-icons/bs'
import { useCart } from 'react-use-cart';


const CartProduct = ({ title, product, price }) => {
   const {
      removeItem
   } = useCart();

   return (
      <StyledComponent>
         <p>{`${price.toFixed(2)} $`}</p>
         <h3>{title.slice(0,20)+" ..."}</h3>
         <button onClick={() => removeItem(product.id)}>
            <BsFillCartDashFill size="12px" fill="#da2f2f"/>
         </button>
      </StyledComponent>
   )
}

const StyledComponent = styled.div`
   position: relative;
   display: flex;
   align-items: center;
   width: 240px;
   height: 25px;
   color: #D6D6D6;
   background: #155BCC;
   margin: 3px 10px;
   font-size: 13px;
   font-weight: 300;

   @media only screen and (max-width: 768px) {
      width: 97%;
   }

   p{
      width: 55px;
      color: #2FDA7F;
      margin-right: 10px;
      text-align: right;
   }

   h3{
      font-size: inherit;
      font-weight: inherit;
   }

   button {
      position: absolute;
      right: 0;
      display: flex;
      align-items: center;
      background: transparent;
      border: none;
      padding: 3px;
      text-decoration: none;
      transition: transform 300ms ease-in;

      :hover{
         transform: scale(1.05);
         cursor: pointer;
      }
      
      :active {
         transform: scale(1);
      }
   }
`;

export default CartProduct
