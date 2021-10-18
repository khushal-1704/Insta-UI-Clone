import React from 'react';
import './Feed.css'
import Post from './Post';

function Feed() {
    return (
        <div className='feed'>
            <div className="feed-post-container">

                <Post profileName='Lorem' profilePick='/images/user/user-1' profilePost='/images/post/post-1.jpg' TotalLikes='1,00,000' message='my city ❤❤' />

                <Post profileName='Lorem' profilePick='/images/user/user-2' profilePost='/images/post/post-2.jfif' TotalLikes='40,000' message='again my city' />

                <Post profileName='LOrem' profilePick='/images/user/user-3' profilePost='/images/post/post-3.jfif' TotalLikes='5,900' message='lorem epsum' />

                <Post profileName='Lorem ' profilePick='/images/post/post-4' profilePost='/images/post/post-4.jfif' TotalLikes='567' message='lorem epsum' />

                <Post profileName='Lorem' profilePick='/images/post/post-5' profilePost='/images/post/post-5.jfif' TotalLikes='1,000' message='lorem epsum' />

            </div>

        </div>
    )
}

export default Feed
