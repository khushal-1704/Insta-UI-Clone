import React from 'react'
import './Widgets.css'

function Widgets() {
    return (
        <div className='widgets'>
            <div className="user-img">
                <img src="/images/user/user-1.jfif" alt="" />
            </div>
            <div className="user-id">
                <h2 className='user-name'>Developer@</h2>
                <h3 className='user-subName'>developer</h3>
            </div>
            <div className="user-switch">switch</div>
        </div>
    )
}

export default Widgets
