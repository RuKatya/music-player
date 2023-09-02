import React from 'react'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import StopCircleOutlinedIcon from '@mui/icons-material/StopCircleOutlined';
import ReplayOutlinedIcon from '@mui/icons-material/ReplayOutlined';

const Controllers = ({ isPlaying, setIsPlaying, audio, setTrackProgress, setAudioDuration }: any) => {
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
    }

    const handlePauseMusic = () => {
        audio.pause()
        setIsPlaying(false)
        setTrackProgress(audio.currentTime)
    }

    const handleRepeatMusic = () => {
        if (audio.loop === true) return audio.loop = false
        audio.loop = true
    }
    return (
        <div>
            {isPlaying ?
                <PauseCircleOutlineIcon onClick={handlePauseMusic} />
                :
                <PlayCircleOutlineIcon onClick={handlePlayMusic} />}
            <StopCircleOutlinedIcon onClick={handleStopMusic} />
            <ReplayOutlinedIcon onClick={handleRepeatMusic} />
        </div>
    )
}

export default Controllers
