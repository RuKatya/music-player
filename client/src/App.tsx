import { useEffect } from 'react'
import Alex_Kizenkov from "./music/Alex_Kizenkov.mp3"

function App() {
  const audio = new Audio(Alex_Kizenkov)

  // const convertToBase64 = (audioFile: any) => {
  //   const reader = new FileReader()
  //   reader.readAsArrayBuffer(audioFile)
  //   // reader.readAsDataURL(audioFile)
  //   reader.onload = () => {
  //     console.log(reader.result)
  //   }

  //   reader.onerror = error => {
  //     console.log(error)
  //   }
  // }

  // useEffect(() => {
  //   convertToBase64(Alex_Kizenkov)
  // }, [])
  // const aaa = Buffer.

  // console.log(aaa)
  const handlePlayMusic = () => {
    audio.play()
  }

  const handleStopMusic = () => {
    audio.pause()
    audio.currentTime = 0;
  }
  const handlePauseMusic = () => {
    audio.pause()
  }

  return (
    <div className="App">
      <button onClick={handlePlayMusic}>Play</button>
      <button onClick={handleStopMusic}>Stpp</button>
      <button onClick={handlePauseMusic}>Pause</button>
    </div>
  );
}

export default App;
