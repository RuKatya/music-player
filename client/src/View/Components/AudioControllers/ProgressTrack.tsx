const ProgressTrack = ({ audio, trackProgress, audioDuration, setTrackProgress, ttt }: any) => {

    const handleScrubMusic = (event: any) => {
        audio.currentTime = event.target.value;
        setTrackProgress(audio.currentTime);
    }

    return (
        <div className="audio-direction">
            <input type="range" value={trackProgress} step="0.5" min="0" max={audioDuration} onChange={handleScrubMusic} />
            <div>0:{Math.round(trackProgress)}/0:{Math.round(audioDuration)}</div>
        </div>
    )
}

export default ProgressTrack
