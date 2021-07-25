import React, { Component } from 'react'
import classes from "./StudentsList.module.css"
import axios from "axios"
export class StudentsList extends Component {
    state={
        feedbacks:[]
    }
    getFeedbacksHandler=()=>{
        axios.get("https://studentsfeedback-7b627-default-rtdb.firebaseio.com/studentsFeedback.json")
    .then(response=>{
       
       const data=response.data
        const updatedfeedacks=[]
        for(let key in data){
            updatedfeedacks.push({id:key,
            name:data[key].name,
            email:data[key].email,
            topic:data[key].topic, 
        feedback:data[key].feedback})
        }
      this.setState({feedbacks:updatedfeedacks})
    })
    }
    render() {
     const feedbacks=this.state.feedbacks.map(fb=>{
         return(<div>
             <p>{fb.name}</p>
             <p>{fb.email}</p>
             <p>{fb.topic}</p>
             <p>{fb.feedback}</p>
         </div>)
     })
        return (
            <React.Fragment>
                <div className={classes.button}>
                <button onClick={this.getFeedbacksHandler} >FETCH FEEDBACKS</button>
                </div>
              
                <div className={classes.Feedbacks}>
                {feedbacks}
                </div>
           
            </React.Fragment> )
         
    }
}

export default StudentsList
