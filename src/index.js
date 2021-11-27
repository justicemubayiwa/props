import React from 'react'
import ReactDOM from 'react-dom'
import CommentDetail from './CommentDetail'

function App() {
  return (
    <div className="ui container comments">
      <CommentDetail author="Sam" timeAgo="Today @ 4:45PM" text="Nice Post" image="{faker.image.avatar()}" />
      <CommentDetail author="Alex" timeAgo="Today @ 2:40AM" text="Second" image="{faker.image.avatar()}" />
      <CommentDetail author="James" timeAgo="Yesterday @ 8:52PM" text="Another comment" image="{faker.image.avatar()}" />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'));