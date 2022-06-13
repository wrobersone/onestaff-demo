import React from 'react'
import styled from 'styled-components'
import Button from './Button';

function MainNavbar() {
  // const links = ['Home', 'Dashboard', 'Resources', 'About', 'Blog'];
  return (
    <Nav className='flex j-between a-center'>
      <div className="brand">
        <h2>Onestaff</h2>
      </div>
      <div className="toggle"></div>
      <div className="links">
        <ul className='flex gap-2'>
          <li><a href="/">Home</a></li>
          <li><a href="/osm-employment">Travel Jobs</a></li>
          <li><a href="/osm-resources">Resources</a></li>
          <li><a href="/about-us">About Us</a></li>
          <li><a href="/osm-blog">OSM Blog</a></li>
          {/* {links.map((link) => {
            return (
              <li key={link}>
                <a href="/">{link}</a>
              </li>
            );
          })} */}
        </ul>
      </div>
      <div className="auth">
        <Button text="Sign In"/>
      </div>
    </Nav>
  );
}

export default MainNavbar

const Nav = styled.nav`
  margin: 1rem 2rem;
  .brand {
    h2 {
      font-size: 2.5rem;
    }
  }
  .toggle {
    display: none;
  }
  .links {
    ul {
      font-weight: bolder;
      li {
        cursor: pointer;
        &:first-of-type {
          a {
            opacity: 1;
          }
        }
        a {
          opacity: 0.7;
          transition: 0.5s ease-in-out;
          &:hover {
            opacity: initial;
          }
        }
      }
    }
  }
`;