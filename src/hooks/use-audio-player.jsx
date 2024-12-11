import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react"

export function useAudioPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [currentTrack, setCurrentTrack] = useState(null);
    const audioRef = useRef(new Audio());
    
    useEffect(() => {
        const audio =audioRef.current;
        const updateCurrentTime = () => setCurrentTime(audio.currentTime);
        const updateDuration = () => setDuration(audio.duration);

        audio.addEventListener("timeupdate", updateCurrentTime);
        audio.addEventListener("loadedmetadata", updateDuration);

        return () => {
            audio.removeEventListener("timeupdate", updateCurrentTime);
            audio.removeEventListener("loadedmetadata", updateDuration);
 
        }
    }, [])

    useEffect(() => {
        if (currentTrack) {
            audioRef.current.src =currentTrack;
            play();
        }
    }, [currentTrack]);

    const play = () => {
       audioRef.current.play();
        setIsPlaying(true);
    }

    const pause = () => {
        audioRef.current.pause();
        setIsPlaying(false);
    }

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const second = Math.floor(seconds % 60);
        return `${minutes}:${second < 10 ? "0" : ""}${second}`;
    }

    return {
        //des informations sur le lecteur audio et des outils pour piloter la lecture
        isPlaying,
        currentTime,
        currentFormatedTime : formatTime(currentTime),
        duration,
        durationFormated : formatTime(duration),
        play,
        pause,
        currentTrack,
        setCurrentTrack,
    }
}