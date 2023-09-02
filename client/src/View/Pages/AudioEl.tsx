import { useRef, useState } from 'react'
import { Music } from '../../data/data'
import Controllers from '../Components/AudioControllers/Controllers';
import ProgressTrack from '../Components/AudioControllers/ProgressTrack';

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
            <ProgressTrack
                audio={audioRef.current}
                trackProgress={trackProgress}
                audioDuration={audioDuration}
                setTrackProgress={setTrackProgress}
            />
            {/* <input type="range" value={trackProgress} step="0.5" min="0" max={audioDuration} onChange={handleScrubMusic} /> */}
            <input type="range" value={audioVolume} step="0.001" min="0" max="1" onChange={handleVolumeMusic} />
            <input type="range" value={audioSpeed} step="0.25" min="0" max="4" onChange={handleSpeedMusic} />
        </div >
    )
}

export default AudioEl