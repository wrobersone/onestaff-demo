import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledNav = styled(motion.nav)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    width: 100%;
`;

export const Logo = styled(motion.div)`
    font-weight: 800;
    font-size: 25px;
    span {
        color: #eee;
    }
`;

export const NavLinks = styled.div`
    @media screen and (max-width: 824px) {
        display: none;
    }
`;

export const Link = styled(motion.a)`
    display: inline-block;
    text-decoration: none;
    margin-right: 50px;
    color: ${({theme}) => theme.fontColor};
    font-weight: 500;

    &:last-child {
        margin-right: 0;
    }
    &:hover {
        color: #ffc14d;
    }
`;

export const ThemeIcon = styled(motion.div)`
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    border: 1px solid #ccc;
    border-radius: 50%;
    cursor: pointer;
    color: ${({theme, colorTheme}) => colorTheme === 'dark' ? '#ffc14d' : theme.fontColor};
`;

export const SocialIcons = styled.div`
    display: flex;
    div {
        margin-right: 10px;
        
        &:last-child {
            margin-right: 0px;
        }
    }
    a {
        color: ${({theme}) => theme.fontColor};
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid #eee;
        border-radius: 30px;
        padding: 10px;

        &:hover {
            color: ${({theme}) => theme.background};
            background: #ffc14d;
        }
    }

    @media screen and (max-width: 992px) {
        display: none;
    }
`;