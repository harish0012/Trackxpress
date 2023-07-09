import React from 'react'
import welcome from './welcome.module.css'
export const Welcome = () => {
  return (
    <div id={welcome.w1}>
    <div id={welcome.w2}>
        <h1 id={welcome.w3}>Welcome to TrackXpress</h1>
        <div id={welcome.w4}>Your last mile is our first mile....It’s on time or it’s on us___ <br />
        Don’t worry, our team of ninjas will go out fighting to deliver your package on time.... 
        A reliable, easy courier experience is what you need to excel in today’s marketplace.</div>
        <button id={welcome.w5} onClick={()=>{
            window.location.assign('/signup')
        }}>Register</button>
    </div>
    </div>
  )
}
