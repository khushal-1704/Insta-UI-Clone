import React from 'react'
import './Body.css'
import Feed from './Feed'
import Head from './Head'
import Widgets from './Widgets'

function Body() {
    return (
        <div className='content-body'>
            <div className="content-top">
                <Head />
            </div>

            <div className="content-bottom">
                <Feed />
                <Widgets />
            </div>
        </div>
    )
}

export default Body;
