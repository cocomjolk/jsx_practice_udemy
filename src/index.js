//import react and reactDOM
import React from 'react'
import ReactDOM from 'react-dom'
import CommentDetail from './CommentDetail'

// create react component
// const App = function(){
//   return <div>Hi there!</div>
// }
const App = () => {
  return (
    <div className="ui container comments" >
      <CommentDetail />
    </div>
  )
}

//take the react component and show it on the screen
ReactDOM.render( <App />, document.querySelector('#root') )
