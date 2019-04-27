import React from 'react'


const ApprovalCard = (props) => {
  //props.children below is the react component itself.
  // console.log(props.children);
  return(
    <div className="ui card">
      <div className="content">
        {props.children}
      </div>
      <div className="extra content">
        <div className="ui two buttons">
          <div className="ui basic green button">Approve</div>
          <div className="ui basic red button">Reject</div>
        </div>
      </div>
    </div>
  )
}




export default ApprovalCard;
