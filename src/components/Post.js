
import React from 'react';
import './Post.css';


function Post({ profilePick, profilePost, profileName, TotalLikes, message }) {
    return (
        <div className='post'>
            <div className="post__header">
                <img src={`${profilePick}.jfif`} alt="" />
                <div className="post__info">
                    <span style={{ fontSize: '15px', fontWeight: "600" }}>{profileName}</span>
                </div>
            </div>
            <div className="post__mid">
                <img src={profilePost} alt="" />
            </div>
            <div className="post__bottom">
                <div className="media-btn">
                    <div className="bottom__option btn--1">
                        <img src="/images/heart-50.png" alt="" />
                    </div>
                    <div className="bottom__option btn--2">
                        <img src="/images/comment.png" alt="" />
                    </div>
                    <div className="bottom__option btn--3">
                        <img src="/images/send.png" alt="" />
                    </div>
                </div>
                <div className="comment-box">
                    <div className='like-number'>{TotalLikes}</div>
                    <div className='name-profile'>{profileName} <span>{message}...</span></div>
                </div>

            </div>
        </div>
    )
}

export default Post