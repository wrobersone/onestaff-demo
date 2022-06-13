import React from 'react';
import { Link, Logo, NavLinks, SocialIcons, StyledNav, ThemeIcon } from './TopNavbarStyle';
import { FaFacebook, FaInstagram, FaMoon, FaSun } from 'react-icons/fa';
import { motion } from 'framer-motion';

import LogoImg from './images/osm_mobile_logo.png'

const TopNavbar = ({ theme, toggleTheme }) => {
    const NavItems = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1, 
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2 // decide on whether to use this animation
            }, 
        },
    };

    const item = {
        hidden: {opacity: 0, y: -100},
        visible: {opacity: 1, y: 0}
    }

  return (
    <div>
        <StyledNav 
            initial='hidden' 
            animate='visible' 
            variants={NavItems}>
            <motion.div>
                <Logo variants={item}><Link href='/'><img src={LogoImg} alt="" width={130} /></Link></Logo>
            </motion.div>
            {/* <NavLinks>
                <Link href='/about-us' variants={item}>About Us</Link>
                <Link href='/resources' variants={item}>Resources</Link>
                <Link href='/osmblog' variants={item}>Blog</Link>
                <Link href='/travel-jobs' variants={item}>Travel Jobs</Link>
            </NavLinks> */}
            <ThemeIcon onClick={toggleTheme} colorTheme={theme} variants={item}>
                { theme === 'light' ? <FaMoon /> : <FaSun />}
            </ThemeIcon>
            <SocialIcons>
                <motion.div variants={item}>
                    <a href="#"><FaFacebook /></a>
                </motion.div>
                <motion.div variants={item}>
                    <a href="#"><FaInstagram /></a>
                </motion.div>
            </SocialIcons>
        </StyledNav>
    </div>
  )
}

export default TopNavbar