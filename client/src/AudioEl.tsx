import { useRef, useState } from 'react'
import { Music } from './data/data'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import StopCircleOutlinedIcon from '@mui/icons-material/StopCircleOutlined';
import ReplayOutlinedIcon from '@mui/icons-material/ReplayOutlined';
import Controllers from './AudioControllers/Controllers';

/*
    download the created file?
    save
    record?
    add headers to the item
    src of the music in alt
    дезаин
*/

interface AudioElProps {
    song: Music
}

const AudioEl = ({ song }: AudioElProps) => {
    const audioRef = useRef(new Audio(song.audio));
    const [trackProgress, setTrackProgress] = useState<number>(0);
    const [audioDuration, setAudioDuration] = useState<number>(0)
    const [audioSpeed, setAudioSpeed] = useState<number>(1)
    const [audioVolume, setAudioVolume] = useState<number>(1)
    const [isPlaying, setIsPlaying] = useState<boolean>(false)

    // const handlePlayMusic = () => {
    //     audioRef.current.play()
    //     setIsPlaying(true)
    //     setTrackProgress(audioRef.current.currentTime)
    //     setAudioDuration(audioRef.current.duration)
    //     startTimer()
    // }

    // const handleStopMusic = () => {
    //     audioRef.current.pause()
    //     audioRef.current.currentTime = 0;
    //     audioRef.current.loop = false
    //     setIsPlaying(false)
    //     setTrackProgress(0)
    // }

    // const handlePauseMusic = () => {
    //     audioRef.current.pause()
    //     setIsPlaying(false)
    //     setTrackProgress(audioRef.current.currentTime)
    // }



    // const handleRepeatMusic = () => {
    //     if (audioRef.current.loop === true) return audioRef.current.loop = false
    //     audioRef.current.loop = true
    // }

    const handleScrubMusic = (event: any) => {
        audioRef.current.currentTime = event.target.value;
        setTrackProgress(audioRef.current.currentTime);
    }

    const handleVolumeMusic = (event: any) => {
        audioRef.current.volume = event.target.value;
        setAudioVolume(audioRef.current.volume);
    }

    const handleSpeedMusic = (event: any) => {
        audioRef.current.playbackRate = event.target.value;
        setAudioSpeed(audioRef.current.playbackRate)
    }

    return (
        <div className={`audioEl ${isPlaying ? "playingSong" : null}`}>
            <Controllers
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                audio={audioRef.current}
                setTrackProgress={setTrackProgress}
                setAudioDuration={setAudioDuration}
            />
            <input type="range" value={trackProgress} step="0.5" min="0" max={audioDuration} onChange={handleScrubMusic} />
            <input type="range" value={audioVolume} step="0.001" min="0" max="1" onChange={handleVolumeMusic} />
            <input type="range" value={audioSpeed} step="0.25" min="0" max="4" onChange={handleSpeedMusic} />
        </div >
    )
}

export default AudioEl