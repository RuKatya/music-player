import { useEffect, useRef, useState } from 'react'
import { Music } from '../../data/data'
import Controllers from '../Components/AudioControllers/Controllers';
import ProgressTrack from '../Components/AudioControllers/ProgressTrack';
import Volume from '../Components/AudioControllers/Volume';
import MusicSpeed from '../Components/AudioControllers/MusicSpeed';

/*
    download the created file?
    save
    record?
*/

interface AudioElProps {
    song: Music
}

const AudioEl = ({ song }: AudioElProps) => {
    const audioRef = useRef(new Audio(song.audio));
    const [trackProgress, setTrackProgress] = useState<number>(0);
    const [audioDuration, setAudioDuration] = useState<number>(0)
    const [isPlaying, setIsPlaying] = useState<boolean>(false)

    useEffect(() => {
        audioRef.current.addEventListener('loadedmetadata', (e: any) => {
            setAudioDuration(e.target.duration)
        })
    }, [audioRef])

    return (
        <div className={`audioEl ${isPlaying ? "playingSong" : null}`}>
            <ProgressTrack
                audio={audioRef.current}
                trackProgress={trackProgress}
                audioDuration={audioDuration}
                setTrackProgress={setTrackProgress}
            />
            <Controllers
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                audio={audioRef.current}
                setTrackProgress={setTrackProgress}
                setAudioDuration={setAudioDuration}
            />
            <Volume audio={audioRef.current} />
            <MusicSpeed audio={audioRef.current} />
        </div >
    )
}

export default AudioEl