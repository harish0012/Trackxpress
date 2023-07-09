
import React, { useEffect, useState } from "react";
import axiosinstance from "./axiosinstance";
import view from './view.module.css'

const View=()=>{
    let[customerdata,setcustomerdata]=useState([])

    useEffect(()=>{
        let fetchdata=async ()=>{
            let {data}=await axiosinstance.get("/posts")
            setcustomerdata(data)
        }
        fetchdata()
    },[])

    let handledelete=async(id)=>{
       await axiosinstance.delete(`/posts/${id}`)
       window.location.assign('/home')
    }

    return(
        <div id={view.v1}>
            {customerdata.map((i,index)=>{
                return(
                <ul key={index} id={view.u}>
                    <li id={view.v3}>{i.id}--{i.customername}</li>
                    <li id={view.v4} onClick={()=>{
                        alert("Open in the map interface")
                    }}>{i.location}</li>
                    <li id={view.v5}><button onClick={()=>{
                        handledelete(i.id)
                    }}>Delete</button></li>
                </ul>
                )
            })}
        </div>
    )
}
export default View