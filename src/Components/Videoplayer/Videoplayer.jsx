import React, { useRef } from 'react'
import './Videoplayer.css'
import video from '../../assets/videoComp.mp4'

const Videoplayer = ({playState, setPlayState}) => {

    const player = useRef(null);
    const closePlayer = (e)=>{
        if(e.target === player.current){
            setPlayState(false)
        }
    }
  return (
    <div className={`video-player ${playState?'':'hide'}`} ref={player} onClick={closePlayer}>
        <video src={video} autoPlay muted controls loop></video>
      
    </div>
  )
}

export default Videoplayer
