//import react and reactDOM
import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

// create react component
// const App = function(){
//   return <div>Hi there!</div>
// }
const App = () => {
  return (
    <div className="ui container comments" >
      <br/>
      <ApprovalCard>
          <CommentDetail
          avatarPic={faker.image.avatar()}
          author="Cap"
          commentDate="4/5/19"
          comment="hail hydra"
          />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
            avatarPic={faker.image.avatar()}
            author="Thor"
            commentDate="4/5/19"
            comment="BEER!!"
          />
        </ApprovalCard>
    </div>
  )
}

//take the react component and show it on the screen
ReactDOM.render( <App />, document.querySelector('#root') )
