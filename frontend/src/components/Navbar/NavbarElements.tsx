import styled from '@emotion/styled'
import { NavLink as Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'


export const NavContainer = styled.nav`
    display: flex;
    justify-content: center;
    -webkit-box-shadow: 0px 7px 10px -1px rgba(0,0,0,0.3);
    -moz-box-shadow: 0px 7px 10px -1px rgba(0,0,0,0.3);
    box-shadow: 0px 7px 10px -1px rgba(0,0,0,0.3);
`;

export const Nav = styled.nav`
    background-image: url('https://d2vkoy1na2a6o6.cloudfront.net/_next/static/media/wood_middle_repeat.b4458ce9f1d0c41bb51b9b8385c0943f.png');
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 73px;
`;

export const NavMenu = styled.div`
    
`;

export const NavLink = styled(Link)`
    text-decoration: none;
    margin-right: 70px;
    margin-left: 100px;
    color: #fcd144;
    text-shadow: 0 1px 3px rgb(0,0,0/30%);
`;
