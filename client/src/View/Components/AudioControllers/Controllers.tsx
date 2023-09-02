import { useState } from 'react'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import StopCircleOutlinedIcon from '@mui/icons-material/StopCircleOutlined';
import ReplayOutlinedIcon from '@mui/icons-material/ReplayOutlined';

const Controllers = ({ isPlaying, setIsPlaying, audio, setTrackProgress, setAudioDuration }: any) => {
    const [isRepeat, setIsRepeat] = useState<boolean>(false)

    const startTimer = () => {
        setInterval(() => {
            if (audio.ended) {
                handleStopMusic()
            } else {
                setTrackProgress(audio.currentTime)
            }
        }, 1000)
    }

    const handlePlayMusic = () => {
        audio.play()
        setIsPlaying(true)
        setTrackProgress(audio.currentTime)
        setAudioDuration(audio.duration)
        startTimer()
    }

    const handleStopMusic = () => {
        audio.pause()
        audio.currentTime = 0;
        audio.loop = false
        setIsPlaying(false)
        setTrackProgress(0)
        setIsRepeat(false)
    }

    const handlePauseMusic = () => {
        audio.pause()
        setIsPlaying(false)
        setTrackProgress(audio.currentTime)
    }

    const handleRepeatMusic = () => {
        setIsRepeat(!isRepeat)
        if (audio.loop === true) return audio.loop = false
        audio.loop = true
    }

    return (
        <div className='audio-controllers'>
            {isPlaying ?
                <PauseCircleOutlineIcon onClick={handlePauseMusic} sx={{ fontSize: 50 }} /> :
                <PlayCircleOutlineIcon onClick={handlePlayMusic} sx={{ fontSize: 50 }} />}
            <StopCircleOutlinedIcon onClick={handleStopMusic} sx={{ fontSize: 50 }} />
            <ReplayOutlinedIcon
                onClick={handleRepeatMusic}
                className={`${isRepeat ? "isRepeat" : null}`}
                sx={{ fontSize: 50 }}
            />
        </div>
    )
}

export default Controllers
