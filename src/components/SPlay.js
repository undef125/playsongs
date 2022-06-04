import React from "react";
import "./style.css";
// const axios = require('axios');
import axios from "axios";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { Skeleton, Stack } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import List from "./List";
import YouTube from "react-youtube";
let cElement = null;

const SandPlay = () => {
    const [isLoading, setisLoading] = React.useState(false);
    const [play, setPlay] = React.useState(true);
    const [videoId, setvideoId] = React.useState("");
    const [search, setSearch] = React.useState("");
    const [searchResult, setSearchResult] = React.useState([]);
    const searchSong = async () => {
        setSearchResult([]);
        setisLoading(true);
        let result = await axios.get(
            `https://www.googleapis.com/youtube/v3/search?key=AIzaSyBzAcfYGSkWSKiT-RRtjVykAHd3ziz2el0&maxResults=15&part=snippet&q=${search}`
        );
        setSearchResult(result.data.items);
        if (searchResult) setisLoading(false);
    };

    const onready = (e) => {
        cElement = e;
    };
    React.useEffect(() => {
        if (cElement) {
          play
            ? cElement.target.pauseVideo()
            : cElement.target.playVideo();
        }
        
      }, [play]);

    return (
        <div>
            <div className="searchBar">
                <InputGroup>
                    <Input
                        type="text"
                        placeholder="Search For Songs"
                        color="white"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") searchSong();
                        }}
                    />
                    <InputRightElement
                        pointerEvents="cursor"
                        children={
                            <SearchIcon
                                color="gray.300"
                                onClick={() => searchSong()}
                            />
                        }
                    />
                </InputGroup>
            </div>
            <div className="searchResults">
                {isLoading ? (
                    <Stack>
                        <Skeleton height="6rem" width="95%" />
                        <Skeleton height="6rem" width="95%" />
                        <Skeleton height="6rem" width="95%" />
                        <Skeleton height="6rem" width="95%" />
                    </Stack>
                ) : (
                    searchResult?.map((result) => {
                        return (
                            <List
                                title={result.snippet.title}
                                imgUrl={result.snippet.thumbnails.medium.url}
                                channelName={result.snippet.channelTitle}
                                setVideoId={setvideoId}
                                id={result.id.videoId}
                                splay={setPlay}
                                playstate={play}
                                evnt={cElement}
                            />
                        );
                    })
                )}
                <div className="videoHidden">
                    <YouTube
                        videoId={videoId}
                        onReady={onready}
                        opts={{
                            height: "0",
                            width: "0",
                            playerVars: {
                                autoplay: 1,
                                origin: "https://localhost:3000/",
                            },
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default SandPlay;
