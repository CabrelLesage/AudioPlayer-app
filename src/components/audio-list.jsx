import { useAudioContext } from "../context/audio-context";
import styles from "./audio-list.module.css";

const tracks = [
    {
        id: 1,
        title: "Poster new song",
        src: "/audio/song-1.mp3",
        imgSrc: "/image/covers/song-1.jpg",
    },
    {
        id: 2,
        title: "Agosto Lilis",
        src: "/audio/song-2.mp3",
        imgSrc: "/image/covers/song-2.jpg",
    },
    {
        id: 3,
        title: "Music Festival",
        src: "/audio/song-3.mp3",
        imgSrc: "/image/covers/song-3.jpg",
    },
    {
        id: 4,
        title: "New Collection",
        src: "/audio/song-4.mp3",
        imgSrc: "/image/covers/song-4.jpg",
    },
    {
        id: 5,
        title: "Anzac - Forever in our Thoughts",
        src: "/audio/song-5.mp3",
        imgSrc: "/image/covers/song-5.jpg",
    },
]
const AudioList = () => {

    const { play, pause, isPlaying, currentTrack, setCurrentTrack } = useAudioContext();

    return (
        <div className={styles.container}>
            {tracks.map((track) => (
                <div 
                    key={track.id} 
                    className={`${styles.song} ${
                        currentTrack === track.src ? styles.songIsPlaying : ""
                    }`}
                >

                    <img src={track.imgSrc} alt="Song cover" width="30px" height="30px" />
                   {currentTrack === track.src ? (
                     <button 
                         className={styles.buttonPrimary}
                         onClick={isPlaying ? pause : play}
                     >
                         {isPlaying ? (
                             <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 24 24"
                                 fill="#2870ff"
                                 style={{ width: "15px", height: "15px" }}
                             >
                                 <path d="M5.75 3a.75.75 0 0 0-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 0 0 .75-.75V3.75A.75.75 0 0 0 7.25 3h-1.5ZM12.75 3a.75.75 0 0 0-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 0 0 .75-.75V3.75a.75.75 0 0 0-.75-.75h-1.5Z"></path>
                             </svg>
                         ) : (
                             <svg
                             xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 24 24"
                             fill="#2870ff"
                             style={{ width: "15px", height: "15px" }}
                             >
                                 <path d="M6.3 2.84A1.5 1.5 0 0 0 4 4.11v11.78a1.5 1.5 0 0 0 2.3 1.27l9.344-5.891a1.5 1.5 0 0 0 0-2.538L6.3 2.841Z"></path>
                             </svg>   
                         )}
                     </button>
                   ) : (
                     <button
                        className={styles.buttonPrimary}
                        onClick={() => setCurrentTrack(track.src)}
                     >
                        <svg
                             xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 24 24"
                             fill="#2870ff"
                             style={{ width: "15px", height: "15px" }}
                             >
                                 <path d="M6.3 2.84A1.5 1.5 0 0 0 4 4.11v11.78a1.5 1.5 0 0 0 2.3 1.27l9.344-5.891a1.5 1.5 0 0 0 0-2.538L6.3 2.841Z"></path>
                             </svg>  
                     </button>
                   )}
                   
                    <div 
                        className={`${styles.trackTitle} ${
                            currentTrack === track.src ? styles.titleIsPlaying : ""
                        }`}
                        onClick={() => setCurrentTrack(track.src)}
                    >
                        {track.title}
                    </div>

                    {currentTrack === track.src && (
                        <img 
                            src={`image/gifs/${
                                isPlaying ? "play-song.gif" : "mute-song.gif"
                            }`}
                            alt="Sound animate icon"
                            width={"20px"}
                            className={styles.soundIcon}

                        />
                    )}
                </div>
            ))}
        </div>
    )
}

export default AudioList;