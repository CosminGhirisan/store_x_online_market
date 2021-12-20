import React from 'react'
import styled from 'styled-components';
import { BsPerson, BsCart2, BsFillCartXFill } from 'react-icons/bs'
import { useCart } from 'react-use-cart';

import CartProduct from './CartProduct';

const InfoCart = () => {
   const { 
      isEmpty,
      items,
      totalUniqueItems,
      cartTotal,
      emptyCart
   } = useCart();
   return (
      <StyledContainer>
         <StyledDiv>
            <BsPerson size="25px" fill="#fff"/>
            <h2>Contact</h2>
         </StyledDiv>
         <StyledParagraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ratione vel tempore neque necessitatibus repellat itaque incidunt ipsam. Fugit, voluptatum.
         </StyledParagraph>
         <StyledDiv>
            <BsCart2 size="25px" fill="#fff"/>
            <h2>Cart {!isEmpty && `(${totalUniqueItems})`}</h2>
         </StyledDiv>
         <StyledCart>
            {isEmpty && <StyledEmptyCart>Cart is Empty</StyledEmptyCart>}
            {!isEmpty && 
               items.map((item => {
                  return(
                        <CartProduct 
                           title={item.title}
                           key={item.id}
                           id={item.id}
                           price={item.price}
                           product={item}
                        />
                  )
               }))
            }
         </StyledCart>
         <StyledDiv>
            <section>
               <h2>Total: <span>{`${cartTotal.toFixed(2)} $`}</span></h2>
               <StyledBtn onClick={() => emptyCart()}>
                  <BsFillCartXFill size="20px" fill="red"/>
               </StyledBtn>
            </section>
         </StyledDiv>
      </StyledContainer>
   )
}

const StyledContainer=styled.div`
   padding: 10px 20px;
`;

const StyledDiv = styled.div`
   position: relative;
   display: flex;
   width: 300px;
   margin: 15px 0;
   
   h2{
      margin-left: 15px;
   }

   section{
      position: absolute;
      right: 40px;
      display: flex;

      span{
         margin: 0 15px 0 5px;
      }
   }
`;

const StyledParagraph = styled.p`
   color: #fff;
   font-size: 13px;
   font-weight: 300;
   text-align: justify;
`;

const StyledCart = styled.div`
   position: relative;
   display: block;
   height: 120px;
   border: 1px dashed #fff;
   overflow: scroll;
`;

const StyledEmptyCart = styled.p`
   position: absolute;
   top: 50%;
   left: 50%;
   color: #fff;
   font-size: 13px;
   font-weight: 300;
   text-align: justify;
   transform: translate(-50%,-50%);
`;

const StyledBtn = styled.button`
   background: transparent;
   border: none;
   text-decoration: none;
   transition: transform 300ms ease-in;

   :hover{
      transform: scale(1.05);
      cursor: pointer;
   }

   :active {
      transform: scale(1);
   }
`;

export default InfoCart
