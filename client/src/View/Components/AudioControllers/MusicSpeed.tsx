import { useState } from 'react'
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';

const MusicSpeed = ({ audio }: any) => {
    const [audioSpeed, setAudioSpeed] = useState<number>(1)

    const handleSpeedMusic = (event: any) => {
        audio.playbackRate = event.target.value;
        setAudioSpeed(audio.playbackRate)
    }



    return (
        <div className='audio-speed'>
            <SlowMotionVideoIcon sx={{ color: "grey" }} />
            <input type="range" value={audioSpeed} step="0.25" min="0.25" max="2" onChange={handleSpeedMusic} />
            <div style={{ color: "grey" }}>x{audioSpeed}</div>
        </div>
    )
}

export default MusicSpeed
