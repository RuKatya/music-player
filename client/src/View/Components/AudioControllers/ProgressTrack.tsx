import React from 'react'

const ProgressTrack = ({ audio, trackProgress, audioDuration, setTrackProgress }: any) => {
    const handleScrubMusic = (event: any) => {
        audio.currentTime = event.target.value;
        setTrackProgress(audio.currentTime);
    }
    return (
        <div>
            <input type="range" value={trackProgress} step="0.5" min="0" max={audioDuration} onChange={handleScrubMusic} />
        </div>
    )
}

export default ProgressTrack
