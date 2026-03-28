"use client";
import styled from "styled-components";
import {Artdisplay} from "@/app/artinterface/artdisplay";

/*Styling for the individual pictures*/
const ArtContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border: 2px solid black;
    margin: 15px;
    width: 300px;
    height: 400px;
    text-align: center;
    background-color: floralwhite;
    color: black;
    
    
    .artpic {
        width: 100%;
        height: 200px;
        border-radius: 10px;
    }
    
    .arttitle {
        font-size: calc(15px + 2.5px);
        font-weight: bold;
        margin: 15px;
    }
    
    .artp {
        font-size: calc(15px + 2.5px);
        color: black;
        margin: 15px;
    }
`;


export default function ArtCard(props: Artdisplay) {
    return (
        <ArtContainer>
            <h2 className = "arttitle">{props.title}</h2>
            <img className= "artpic" src={props.primaryimageurl || " "} alt={"No Image"} />
            <p className = "artp">{props.dated}</p>
        </ArtContainer>
    );
}