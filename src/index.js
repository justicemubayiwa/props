import React from 'react'
import ReactDOM from 'react-dom'
import CommentDetail from './CommentDetail'

function App() {
  return (
    <div className="ui container comments">
      <CommentDetail author="Sam"/>
      <CommentDetail author="Alex"/>
      <CommentDetail author="James"/>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'));