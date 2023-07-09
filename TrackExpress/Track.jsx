import React from 'react'

export const Track = () => {
  return (
    <div style={{display:'grid',height:"700px"}}>
        <button style={{fontSize:"40px"}}>Start</button>
        <button style={{fontSize:"40px"}}>Stop</button>
        <button style={{fontSize:"40px"}}onClick={()=>{
            window.location.assign('/home')
        }}>Back</button>
    </div>
  )
}
