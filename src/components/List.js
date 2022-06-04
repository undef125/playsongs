import React from "react";
import { Image } from "@chakra-ui/react";
import "./style.css";

const List = ({title, imgUrl, channelName,setVideoId,id,splay,playstate}) => {
    const check = (e) => {
        let childrenArray = [...e.target.parentElement.parentElement.parentElement.children]
        for(let i=0; i<childrenArray.length; i++) {                                            //box shadow on the current playing song
            if(e.target.id === childrenArray[i].lastElementChild.lastElementChild.id) {
                childrenArray[i].style.boxShadow = "2px 2px 3px cyan";
            } else {
                childrenArray[i].style.boxShadow = "0px 0px 0px cyan";
            }
        }
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