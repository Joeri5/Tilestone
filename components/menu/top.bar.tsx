import React, {useState} from 'react';
import styled from "styled-components";
import Link from "next/link";
import {MenuItems} from "../../data/menu";
import {Cross as Hamburger} from 'hamburger-react'
import {useMenu} from "../../context/menuContext";
import {useRouter} from "next/router";

const Top = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  width: 100vw;
  -webkit-box-shadow: 0 20px 13px rgb(0 0 0 / 0.04);
  -moz-box-shadow: 0 20px 13px rgb(0 0 0 / 0.04);
  box-shadow: 0 20px 13px rgb(0 0 0 / 0.04);
  background: white;

  @media (min-width: 1024px) {
    -webkit-box-shadow: 0 0 0 rgb(0 0 0 / 0.04);
    -moz-box-shadow: 0 0 0 rgb(0 0 0 / 0.04);
    box-shadow: 0 0 0 rgb(0 0 0 / 0.04);
  }
`;

const TopBarWrapper = styled.div`
  max-width: 80%;
  margin: 0 auto;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 1024px) {
    height: 7.5rem;
  }
`;

const LogoWrapper = styled.div`
  > a > img {
    width: 6.25rem;
  }
`;

const EndWrapperMobile = styled.div`
  @media (min-width: 1024px) {
    display: none;
  }
`;

const MobileMenuWrapper = styled.div`
  position: fixed;
  height: calc(100vh - 5rem);
  background-color: rgba(0, 0, 0, 0.5);

  @media (min-width: 1024px) {
    display: none;
  }
`;

const MobileMenuContent = styled.div`
  max-width: 80%;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  hr {
    width: 100%;
    margin: 1rem 0;
  }
`;

const MenuLinkWrapper = styled.div`
  color: white;
  font-size: 1rem;
  font-weight: 500;
  padding-bottom: 0.25rem;

  @media (min-width: 1024px) {
    color: black;
    font-weight: 400;

    :hover {
      animation: none !important;
      border: none !important;
    }
  }

  :hover {
    animation: borderBottom 0.5s ease-in-out;
    border-bottom: 2px solid white;
  }
`;

const MenuLinkActiveWrapper = styled.div`
  color: white;
  font-size: 1rem;
  font-weight: 500;
  padding-bottom: 0.25rem;
  border-bottom: 2px solid white;
  animation: borderBottom 0.5s ease-in-out normal forwards;
  width: 0;
  animation-delay: 0.5s;

  @keyframes borderBottom {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }
`;

const UserMenuItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const EndWrapper = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;

  @media (min-width: 1280px) {
    gap: 5rem;

  }
`;

const SignupButton = styled.div`
  border: 1px solid #000000;
  padding: 0.75rem 2.5rem;
  border-radius: 2rem;
  color: #000000;
  transition: all 0.5s ease-in-out;

  :hover {
    cursor: pointer;
    background: black;

    > div {
      color: white !important;
    }
  }
`;

const TopBar = () => {
    const {isOpen, setIsOpen} = useMenu();
    const router = useRouter();

    const toggleMenu = () => {
        if (isOpen) {
            setIsOpen(false);
        } else {
            setIsOpen(true);
        }
    }

    interface menuLinkProps {
        title: string;
        url: string;
    }

    const MenuLink = ({title, url}: menuLinkProps) => {
        return (
            <MenuLinkWrapper>
                <Link href={url}>
                    <a onClick={() => setIsOpen(false)}>{title}</a>
                </Link>
            </MenuLinkWrapper>
        )
    }

    const MenuLinkActive = ({title, url}: menuLinkProps) => {
        return (
            <MenuLinkActiveWrapper>
                <Link href={url}>
                    <a onClick={() => setIsOpen(false)}>{title}</a>
                </Link>
            </MenuLinkActiveWrapper>
        )
    }

    return (
        <Top>
            <TopBarWrapper>
                <LogoWrapper>
                    <Link href="/">
                        <a>
                            <img src="https://media.graphassets.com/YuPxlS1bSbiafX8R70Py" alt="logo"/>
                        </a>
                    </Link>
                </LogoWrapper>
                <EndWrapper>
                    <LinkWrapper>
                        {MenuItems.map((item, index) => (
                            <>
                                <MenuLink title={item.label} url={item.path}/>
                            </>
                        ))}
                        <MenuLink title={"Log In"} url={"/login"}/>
                        <SignupButton>
                            <MenuLink title={"Sign Up"} url={"/signup"}/>
                        </SignupButton>
                    </LinkWrapper>
                </EndWrapper>
                <EndWrapperMobile>
                    <Hamburger size={22} toggled={isOpen} duration={0.8} onToggle={toggleMenu} color={"#000"}/>
                </EndWrapperMobile>
            </TopBarWrapper>
            <MobileMenuWrapper id="mobileMenuWrapper"
                               style={isOpen ? {width: "100vw", opacity: "1", transition: "all 0.5s ease-in-out"} : {
                                   width: "0",
                                   opacity: "0",
                                   transition: "all 0.5s ease-in-out"
                               }}>
                <MobileMenuContent>
                    {MenuItems.map((item, index) => (
                        <>
                            {router.pathname === item.path ? <MenuLinkActive title={item.label} url={item.path}/> :
                                <MenuLink title={item.label} url={item.path}/>}
                        </>
                    ))}
                    <hr/>
                    <UserMenuItemsWrapper>
                        {router.pathname === "/signup" ? <MenuLinkActive title="Sign Up" url="/signup"/> :
                            <MenuLink title="Sign Up" url="/signup"/>}
                        {router.pathname === "/login" ? <MenuLinkActive title="Log In" url="/login"/> :
                            <MenuLink title="Log In" url="/login"/>}
                    </UserMenuItemsWrapper>
                </MobileMenuContent>
            </MobileMenuWrapper>
        </Top>
    );
};

export default TopBar;
