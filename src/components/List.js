import React from "react";
import { Image } from "@chakra-ui/react";
import "./style.css";

const List = ({title, imgUrl, channelName,setVideoId,id,splay,playstate}) => {
    const check = (e) => {
        console.log(e.target.style);
        e.target.parentElement.parentElement.style.boxShadow = "2px 2px 3px cyan";
        e.target.textContent === "Play" ? e.target.textContent = "Pause" : e.target.textContent = "Play";
        setVideoId(id);
        splay(!playstate);
    }
    return (
        <div className="listHolder">
                <div className="imgHolder"><Image src={imgUrl} alt={title} /></div>
            <div className="title">
                {title}
                <br />
                {`Channel: ${channelName}`}
                </div>
            <div className="playBtnHolder"><button id={id} onClick={(e) => {
                check(e);
                }}>Play</button></div>
        </div>
    );
};

export default List;


//<Icon as={playstate ? BsPlay : BsPause} w={10} h={10}/>