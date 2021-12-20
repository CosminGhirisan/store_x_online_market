import React from 'react'
import styled from 'styled-components'
import { CartProvider } from 'react-use-cart';

//Components
import InfoCart from '../components/InfoCart';
import Product from '../components/Product';
import useFetch from '../useFetch';

const Home = ({ input }) => {
   const {data: products, isPending} = useFetch('https://fakestoreapi.com/products')
   
   return (
      <>
         <StyledWrapper>
            <CartProvider>
               {isPending && <div> Loading...</div>}
               {isPending === false && 
               <StyledLeftSide>
                  <InfoCart />
               </StyledLeftSide>
               }
               <StyledRightSide>
                  {products && products.filter(e => e.title.toLowerCase().includes(input)).map(product => (
                     <Product    
                     title={product.title}
                     key={product.id}
                     id={product.id}
                     description={product.description}
                     image={product.image}
                     price={product.price}
                     product={product}
                  />
                     ))}
               </StyledRightSide>
            </CartProvider>
         </StyledWrapper>
      </>
   )
}

const StyledWrapper = styled.div`
   display: flex;
   /* width: 95%; */
   margin: 30px 40px;

   @media only screen and (max-width: 962px) {
      flex-direction: column;
      margin: 30px 20px;
   }
`;

const StyledLeftSide = styled.div`
   width: 300px;
   height: 350px;
   background: #164FAC;
   margin-right: 10px;
   
   @media only screen and (max-width: 962px) {
      margin-bottom: 30px;
      width: 100%;
   }
`;

const StyledRightSide = styled.div`
   display: flex;
   flex-wrap: wrap;
   align-items: center;
   justify-content: center;
`;

export default Home
