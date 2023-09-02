import React, { useState } from 'react'

const Volume = ({ audio }: any) => {
    const [audioVolume, setAudioVolume] = useState<number>(1)

    const handleVolumeMusic = (event: any) => {
        audio.volume = event.target.value;
        setAudioVolume(audio.volume);
    }

    return (
        <div>
            <input type="range" value={audioVolume} step="0.001" min="0" max="1" onChange={handleVolumeMusic} />
        </div>
    )
}

export default Volume
