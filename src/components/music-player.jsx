import { useAudioContext } from '../context/audio-context';
import styles from './music-player.module.css';

export function MusicPlayer() {
 //Logique méier du composant lecteur de musique...
 const { 
        isPlaying, 
        currentTime, 
        currentFormatedTime,
        duration, 
        durationFormated,
        play,
        pause,
        currentTrack, 
    } = useAudioContext();

    if(currentTrack) {
        return (
            <div className={styles.container}>
                <button 
                    className={styles.buttonPrimary}
                    onClick={isPlaying ? pause : play}
                >
                    {isPlaying ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="#2870ff"
                            style={{ width: "20px", height: "20px" }}
                        >
                            <path d="M5.75 3a.75.75 0 0 0-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 0 0 .75-.75V3.75A.75.75 0 0 0 7.25 3h-1.5ZM12.75 3a.75.75 0 0 0-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 0 0 .75-.75V3.75a.75.75 0 0 0-.75-.75h-1.5Z"></path>
                        </svg>
                    ) : (
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#2870ff"
                        style={{ width: "20px", height: "20px" }}
                        >
                            <path d="M6.3 2.84A1.5 1.5 0 0 0 4 4.11v11.78a1.5 1.5 0 0 0 2.3 1.27l9.344-5.891a1.5 1.5 0 0 0 0-2.538L6.3 2.841Z"></path>
                        </svg>   
                    )}
                </button>
                <div className={styles.timer}>
                    <span>{currentFormatedTime}</span>/<span>{durationFormated}</span>
                </div>
                <progress 
                    className={styles.progressBar} 
                    value={currentTime} 
                    max={duration} 
                />
            </div>
        );
    }
    else return null;
   
}