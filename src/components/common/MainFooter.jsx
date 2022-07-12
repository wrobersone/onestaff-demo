import React from "react";
import styled from "styled-components";
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import mbe from "../images/logo/MBE.png";
import tjc from "../images/logo/tjc.png";

export default function MainFooter() {
  const companyLinks = [
    "About",
    "Careers",
    "Affiliates",
    "Blog",
    "Press",
    "Investors",
    "Legal & Privacy",
    "Cookie policy",
    "Cookie preferences",
  ];
  const LearnLinks = [
    "Browse crypto prices",
    "Coinbase Bytes newsletter",
    "Crypto basics",
    "Tips & Turoials",
    "Market Updates",
    "What is Bitcoin?",
    "What is crypto?",
    "What is a blockchain?",
  ];
  const socialIcons = [<BsFacebook />, <BsTwitter />, <BsInstagram />, <BsLinkedin />];
  return (
    <Foot className="flex column gap">
      <div className="upper-footer">
        <div className=" flex column gap-1">
          <div className="brand">
            <h2>onestaff</h2>
          </div>
          <div className="address">
            <p>10802 Farnam Drive, <br /> Omaha, NE 68154</p>
          </div>
          <div className="info">
            <p>10802 Farnam Drive, <br /> Omaha, NE 68154</p>
            {/* <span>T : +1-202-555-0184</span>
            <span>E : hello@cryptoz.com</span> */}
          </div>
          <div className="social-icons flex gap-2">
            {socialIcons.map((icon, index) => {
              return (
                <div className="icon" key={index}>
                  {icon}
                </div>
              );
            })}
          </div>
        </div>
        <div className=" flex column gap-1">
          <div className="title">
            <h3>Company</h3>
          </div>
          <ul className="flex column gap-half">
            {companyLinks.map((link) => {
              return <li key={link}>{link}</li>;
            })}
          </ul>
        </div>
        <div className=" flex column gap-1">
          <div className="title">
            <h3>Learn</h3>
          </div>
          <ul className="flex column gap-half">
            {LearnLinks.map((link) => {
              return <li key={link}>{link}</li>;
            })}
          </ul>
        </div>
        <div className=" flex column gap-1">
          <div className="title">
            <h3>Company</h3>
          </div>
          <ul className="flex column gap-half">
            {companyLinks.map((link) => {
              return <li key={link}>{link}</li>;
            })}
          </ul>
        </div>
        {/* <div className="col mbe">
          <div className="image">
            <img src={mbe} alt="mbe" />
          </div>
        </div> */}
      </div>
      <div className="lower-footer flex a-center j-between gap">
        <div className="col1">
          <span>&copy; One Staff Medical 2022 | All Rights Reserved.</span>
        </div>
        <div className="col2 flex a-center gap">
          <span>Privacy Policy</span>
          <span>Terms & Conditions</span>
          <span className="cards">
            <img src={tjc} alt="tjc" />
          </span>
          <span className="cards">
            <img src={mbe} alt="mbe" />
          </span>
        </div>
      </div>
    </Foot>
  );
}

const Foot = styled.footer`
  padding: 0rem 5rem;
  padding-bottom: 3rem;
  position: relative;
  .upper-footer {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    .social-icons {
      margin-top: 2rem;
      svg {
        font-size: 2rem;
      }
    }
    .mbe {
      position: absolute;
      right: 0rem;
      top: -23rem;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    padding: 1rem 2rem;
    .social-icons {
      display: none;
      flex-direction: row;
    }
    .upper-footer {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
    .mbe {
      display: none;
    }
    .cards {
      img {
        width: 80vw;
      }
    }
  }
`;