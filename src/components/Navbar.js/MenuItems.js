import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'
import{FaBars} from 'react-icons/fa'

export const Nav = styled.nav`
    background: ;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    margin: 0px 100px;
    z-index:10;

    @media screen and (max-width: 1000px) {
        margin: 0px 0px;
    }
    
`;

export const NavLink = styled(Link)`
    color : #000;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    margin: 0px 10px;

    &:hover{
        transition: all 0.2s ease-in-out;
        
        color: #20A40D;
    }

    &.active{
        color: #20A40D ;
    }
`;

export const Bars = styled(FaBars)`
    display: none;
    color: #000;

    @media screen and (max-width: 1000px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform:translate(-100%, 75%);
        font-size:1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.div`
display: flex;
margin-right: -24px;
align-items: center;
white-space: nowrap;

    @media screen and (max-width:1000px){
        display:none;
    }
`;

export const NavBtn = styled.nav`
display: flex;
margin-right: 24px;
align-items: center;
white-space: nowrap;

@media screen and (max-width:1000px){
    display:none;
}
`;

export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: #256ce1;
    margin-left: 20px;
    color: #fff;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
   

    &:hover{
        transition: all 0.2s ease-in-out;
        background:#20A40D ;
        color: #010606;
    }
`;
export const NavAdminBtnLink = styled(Link)`
    border-radius: 4px;
    background: #434141;
    padding: 10px 22px;
    margin-left: 20px;
    color: #fff;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background:#20A40D ;
        color: #010606;
    }
`;

