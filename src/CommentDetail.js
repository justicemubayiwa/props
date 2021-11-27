import React from 'react'
import faker from 'faker'

function CommentDetail(props) {
    return (
        <div className="comment">
            <a className="avatar" href="/">
                <img alt="avatar" src={props.image} />
            </a>
            <div className="content">
                <a className="author" href ="/">
                    {props.author}
                </a>
            <div className="metadata">
                <span className="date">
                {props.timeAgo}
                </span>
            </div>
            <div className="text">
                {props.text}
            </div>
        </div>
      </div>
    )
}

export default CommentDetail
