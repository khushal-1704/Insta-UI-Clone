import React from 'react'
import Profile from './Profile/Profile'
import './Story.css'

function Story({ profilePick, name }) {
    return (
        <div className='story-container'>
            <img src={`/images/user/user-${profilePick}.jfif`} alt="" />
            <span style={{ fontSize: '15px' }}>{name}</span>
        </div>
    )
}

export default Story
