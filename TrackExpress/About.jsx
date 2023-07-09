import React from 'react'

export const About = () => {
  return (
    <div>
        <center>
        <h1 style={{fontSize:"60px"}}>TrackXpress</h1>
        <img src="https://media.istockphoto.com/id/849921508/vector/express-delivery-icon-concept-truck-with-stop-watch-icon-for-service-order-fast-free-and.jpg?s=612x612&w=0&k=20&c=HqxEhRqWAHW1_1iZPqumhAD1471RLH1b-B0XtQQ3gKc=" height="400px" alt="" />
        </center>
        <button style={{marginLeft:"50%",height:"40px",width:"80px"}}onClick={()=>{
            window.location.assign('/home')
        }}>Back</button>
    </div>
  )
}
