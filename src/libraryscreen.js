import React,{useState,useEffect} from "react";
import APIKit from "./musicdetail";

export default function Library() {
const [playlists,setPlaylists]=useState(null);

useEffect(() =>{
    APIKit.get("me/playlists").then (function  (response){
        setPlaylists(response.data.items);
        console.log(response.data);

    });
}, []);
    return (
 <div className="screen-container">
{playlists?.map((playlist) =>(

    <div>{playlist.name}</div>
))}
    </div>

    );
}