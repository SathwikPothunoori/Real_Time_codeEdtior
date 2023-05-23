/* eslint-disable react-hooks/rules-of-hooks */
import React ,{useState}from 'react'
import {v4} from 'uuid';
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';
const home = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [roomId , setRoomId] =  useState("")
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [userName , setUsername]=  useState('')
    const navigate = useNavigate()
    const createNewRoom=(e)=>{
        e.preventDefault()
        const id =v4();
        setRoomId(id)
        toast.success('Created a new room!')
    }
    const joinRoom =() =>{
        if(!roomId || !userName){
            toast.error('Username and roomId are required!!')
            return;
        }

        //redirect
        navigate(`editor/${roomId}` , {
            state:{
                userName
            }
        })

    };
    const handleInputEnter =(e) =>{
        if(e.code === "Enter"){
            joinRoom()
        }
    }

  return (
    <div className='homePageContainer'>
        <div className='formContainer'>
            <img src="/logo1.png" alt="coding-fingers-logo" className='logoMain' />
            <h4 className='mainLabel'>Paste the RoomId here</h4>
            <div className='inputs'>
            <input 
                type="text" 
                name="roomId" 
                className='ipnutBox' 
                placeholder='RoomID' 
                value={roomId} 
                onChange={(e)=> setRoomId(e.target.value)}
                onKeyUp={handleInputEnter}

            />
            <input 
                type="text" 
                name="userName" 
                className='ipnutBox' 
                placeholder='UserName' 
                value={userName} 
                onChange={(e)=> setUsername(e.target.value)}
                onKeyUp={handleInputEnter}
            />

            <button onClick={joinRoom} className='btn joinRoom'>Join</button>

            <span className='createRoom'>
                If you don't have an invite then create &nbsp;
                <a onClick={createNewRoom} className='createNewRoom'>new room</a>
             </span>
        </div>
        </div>

        <footer>
            <h4> Build with💚by <a href="https://github.com/SathwikPothunoori/Real_Time_codeEdtior">SathwikPothunoori</a></h4>

        </footer>
    </div>

  )
}

export default home