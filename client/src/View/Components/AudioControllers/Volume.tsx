import { useState } from 'react'
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';

const Volume = ({ audio }: any) => {
    const [audioVolume, setAudioVolume] = useState<number>(1)
    const [isMuted, setIsMuted] = useState<boolean>(false)

    const handleVolumeMusic = (event: any) => {
        if (audio.muted === true) return audio.muted = false
        audio.volume = event.target.value;
        setAudioVolume(audio.volume);
        setIsMuted(false)
    }

    const handleMuteMusic = () => {
        setIsMuted(!isMuted)
        if (audio.muted === true) {
            setAudioVolume(1);
            return audio.muted = false
        }
        audio.muted = true
        setAudioVolume(0);
    }

    return (
        <div className='audio-volume'>
            <VolumeOffIcon onClick={handleMuteMusic} sx={{ color: isMuted ? "white" : "grey" }} />
            <VolumeDownIcon sx={{ color: "grey" }} />
            <input type="range" value={audioVolume} step="0.001" min="0" max="1" onChange={handleVolumeMusic} />
            <VolumeUpIcon sx={{ color: "grey" }} />
        </div>
    )
}

export default Volume
