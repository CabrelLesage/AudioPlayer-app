import AudioList from "./components/audio-list"
import { MusicPlayer } from "./components/music-player"
import { AudioProvider } from "./context/audio-context"

function App() {
   return (
    <AudioProvider>
      <h1>Music Player</h1>
        <MusicPlayer />
        <AudioList />
    </AudioProvider>
  )
}

export default App
