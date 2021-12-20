import React from 'react';
import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'

const Navbar = ({ setInput }) => {

   let activeStyle = {
      color: "#155BCC"
    };

   return (
      <StyledNavbar>
         <StyledLeftSide>
            <NavLink to="/">
               sToRE X
            </NavLink>
         </StyledLeftSide>
         <StyledRightSide>
            <StyledPages>
               <NavLink 
                  to="/" 
                  style={({ isActive }) => isActive ? activeStyle : undefined}
               >Home</NavLink>
               <NavLink 
                  to="/about" 
                  style={({ isActive }) => isActive ? activeStyle : undefined}
               >About</NavLink>
               <NavLink 
                  to="/contact" 
                  style={({ isActive }) => isActive ? activeStyle : undefined}
               >Contact</NavLink>
            </StyledPages>
            <StyledSearch>
               <BsSearch size="20px" color="#000" />
               <input placeholder='Search...' className="inputSearch" onChange={(e) => setInput(e.target.value.toLowerCase())}/>
            </StyledSearch>
         </StyledRightSide>
      </StyledNavbar>
   )
}

const StyledNavbar = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   min-height: 70px;
   padding: 0 40px;
   border-bottom: 1px solid #D6D6D6;

   @media only screen and (max-width: 768px) {
      padding: 0 20px;
   }

   a{
      color: #424242;
      text-decoration: none;

      :hover{
         cursor: pointer;
      }
   }
`;

const StyledLeftSide = styled.div`
   font-size: 18px;
   font-weight: 300;
   letter-spacing: 1.5px;
`;

const StyledRightSide = styled.div`
   position: relative;
   display: flex;
   font-size: 15px;
   font-weight: 500;
`;

const StyledPages = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   min-width: 300px;
   padding: 20px;
   margin-right: 20px;

   @media only screen and (max-width: 768px) {
      min-width: 200px;
      padding: 10px;
   }
`;

const StyledSearch = styled.div`
   position: relative;
   display: inline-block;
   background: #F5F5F5;
   padding: 30px;

   .inputSearch{
      position: absolute;
      top: 84px;
      right: 0;
      width: 300px;
      height: 30px;
      color: #858585;
      border: 1px solid #D6D6D6;
      border-radius: 2px;
      padding: 5px;
      font-size: 12px;
      visibility: hidden;
      z-index: 1;

      :focus{
         background-color: #F5F5F5;
         outline: none;
      }

      ::after{
         content: "";
         position: absolute;
         bottom: 100%;
         left: 80%;
         border-width: 5px;
         border-style: solid;
         border-color: transparent transparent #858585 transparent;
         margin-left: -5px;
      }
   }

   :hover {
      cursor: auto; 
   }

   :hover .inputSearch {
      visibility: visible;
   }
`;

export default Navbar;
