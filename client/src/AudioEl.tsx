import { useRef, useState } from 'react'
import { Music } from './data/data'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import StopCircleOutlinedIcon from '@mui/icons-material/StopCircleOutlined';

interface AudioElProps {
    song: Music
}

const AudioEl = ({ song }: AudioElProps) => {
    const [isPlaing, setIsPlaying] = useState<boolean>(false)
    const audioRef = useRef(new Audio(song.audio));

    const handlePlayMusic = () => {
        audioRef.current.play()
        setIsPlaying(true)
    }

    const handleStopMusic = () => {
        audioRef.current.pause()
        audioRef.current.currentTime = 0;
        audioRef.current.style.backgroundColor = "yellow"
        setIsPlaying(false)
    }

    const handlePauseMusic = () => {
        audioRef.current.pause()
        setIsPlaying(false)
    }

    /*
        repeat
        download the created file?
        save
        timeline
        record?
        add headers to the item
        music speed
        src of the music in alt
        desaing
        
    */
    return (
        <div className={`audioEl ${isPlaing ? "playingSong" : null}`}>
            {isPlaing ? <PauseCircleOutlineIcon onClick={handlePauseMusic}/> : <PlayCircleOutlineIcon onClick={handlePlayMusic}/>}
            <StopCircleOutlinedIcon onClick={handleStopMusic}/>
        </div >
    )
}

export default AudioEl