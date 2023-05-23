/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
 
import Client from '../components/Client'
import { useState } from 'react'
import Editor from '../components/Editor'

const editorPage = () => {
    const [clients , setClients] = useState([
        {sockedId:123 , username:"Sathwik"},
        {sockedId:124 , username:"karthi"},
        {sockedId:125 , username:"Sunil"},
        {sockedId:126 , username:"Virat"},
    ])
  return (
    <div className='mainWrap'>
        <div className='gallery'>
            <div className='galleryInner'>
                <div className='logo'>
                    <img src="/logo1.png" alt="editorLogo" className="logoImage" />
                </div>

                <h3>Connected</h3>
                <div className='listOfClients'>
                    {clients.map((client) => (
                        <Client key ={client.sockedId} username ={client.username} />
                    ))}
                </div>
            </div>
        <button className='btn copy-btn' >Copy roomID</button>
        <button className='btn leave-btn'>Leave Room</button>
        </div>
        <div className='editorWrap'>
            <Editor />
        </div>
    </div>
  )
}

export default editorPage