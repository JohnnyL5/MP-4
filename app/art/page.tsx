"use client";
import useSWR from "swr";
import styled from "styled-components";
import ArtCard from "@/app/components/artcard";
import {Artdisplay} from "@/app/artinterface/artdisplay";

/*Styling for the display page*/
const ArtMainBody = styled.main`
    width: 100%;
    min-height: 100vh;
    margin: 0 auto;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    #PageTitle {
        text-align: center;
        font-size: calc(20px + 3px);
        font-weight: bold;
    }
    
    #GridContainer{
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        background-color: white;
    }
`;


/*Fetching Data with handling erros*/
const fetcher = (url: string) =>
    fetch(url).then((res) => res.json());

export default function ArtPage() {

    const { data, error } = useSWR("/api", fetcher);

    if (error) return <div>Failed to load Content</div>;
    if (!data) return <div>Still Loading...</div>;

    const artworks = data?.records || [];

    /*Rendering the individual art cards*/
    return (
        <ArtMainBody>
            <h1 id = "PageTitle">Harvard Art Gallery</h1>
            <div id = "GridContainer">{
                artworks.map((art: Artdisplay, i: number) => (
                    <ArtCard key={i} id={art.id} title={art.title} dated={art.dated} primaryimageurl={art.primaryimageurl}/>
                ))
            }
            </div>
        </ArtMainBody>
    );
}