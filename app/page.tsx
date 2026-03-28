"use client"
import Link from "next/link";
import styled from "styled-components";

const WelcomePage = styled.main`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    #HomePageHeader{
        font-size: calc(15px + 3vmin);
    }

    #HomePageHeader3{
        font-size: calc(8px + 2vmin);
    }
    
    #HomePageButton{
        font-size: calc(10px + 2vmin);
        padding: 15px 30px;
        margin-top: 1rem;
        color: black;
        border-radius: 8px;
        cursor: pointer;
    }
`;

export default function Home() {
    return (
        <WelcomePage>
            <h1 id = "HomePageHeader">Welcome to the Harvard Art Gallery</h1>
            <Link href="/art"><button id = "HomePageButton">Go to Gallery</button></Link>
            <h3 id = "HomePageHeader3">MP-4 by Johnny Li</h3>
        </WelcomePage>
    );
}