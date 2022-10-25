import React from 'react';
import TopBar from "./menu/top.bar";
import styled from "styled-components";
import {useMenu} from "../context/menuContext";

interface LayoutProps {
    children: React.ReactNode;
}

const BlurWrapper = styled.div`
  transition: filter 0.5s ease-in-out;
`;

const ChildrenWrapper = styled.div`
  max-width: 80%;
  margin: 6rem auto;

  @media (min-width: 640px) {
    max-width: 75%;
  }

  @media (min-width: 1024px) {
    filter: blur(0px) !important;
    margin: 8.5rem auto;
  }
`;

const Layout = ({children}: LayoutProps) => {
    const {isOpen} = useMenu();

    return (
        <div>
            <TopBar/>
            <BlurWrapper style={isOpen ? {filter: "blur(10px)"} : {filter: "blur(0px)"}}>
                <ChildrenWrapper>
                    {children}
                </ChildrenWrapper>
            </BlurWrapper>
        </div>
    );
};

export default Layout;
