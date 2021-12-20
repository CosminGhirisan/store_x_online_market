import React, { useState } from 'react'
import styled from 'styled-components'

//Components
import Modal from './Modal'


const Product = ({ title, description, image, price, open, product }) => {
   const [isOpen, setIsOpen] = useState(false)

   return (
      <>
         <p>{open}</p>
         <StyledContainer onClick={() => setIsOpen(true)}>  
            <StyledImg src={image} alt={title}>
            </StyledImg>
            <StyledTitle>{title.slice(0,15)+" ..."}</StyledTitle>
            <StyledDescription>
               {description.slice(0,75)+"..."}
            </StyledDescription>
         </StyledContainer>
         <Modal 
               open={isOpen} 
               onClose={() => setIsOpen(false)}
               title={title}
               image={image}
               description={description}
               price={price}
               product={product}
            />
      </>
      
   )
}

const StyledContainer = styled.button`
   background: transparent;
   box-shadow: 2px 6px 10px rgba(0,0,0,.3);
   border: none;
   margin: 0 5px 20px;
   text-decoration: none;
   transition: transform 300ms ease-in-out;

   :hover{
      transform: scale(1.05);
      cursor: pointer;
   }

   :active{
      transform: scale(1);
   }
`;

const StyledImg = styled.img`
   width: 200px;
   height: 150px;
   object-fit: scale-down;
`;

const StyledTitle = styled.h3`
   padding: 10px;
   color: #fff;
   background: #164FAC;
   font-weight: 600;
   letter-spacing: .5px;
   text-align: start;
`;

const StyledDescription = styled.p`
   width: 200px;
   height: 60px;
   color: #d4d4d4;
   background: #164FAC;
   padding: 0 10px;
   padding-bottom: 5px;
   font-size: 12px;
   font-weight: 300;
   text-align: justify;
`;

export default Product
