import React, { Component } from 'react'
import classes from "./StudentForm.module.css"
import axios from "axios"
export class StudentForm extends Component {
    state={
        studentDetails:{
            name:"sss",
            email:"ssss",
            topic:"sss",
            feedback:"sss"
        }
       
    }
    
        changeHandler=(event)=>{
           const name=event.target.name;
           const value=event.target.value;
           this.setState({studentDetails:{
               ...this.state.studentDetails,
            [name]:value
           }})
           console.log(this.state.studentDetails)
        }
        
        
        onSubmitHandler=()=>{
            const studentFeed={...this.state.studentDetails}
            console.log(studentFeed)
            
         
         axios.post("https://studentsfeedback-7b627-default-rtdb.firebaseio.com/studentsFeedback.json",studentFeed)
         .then(response=>{
console.log(response.data)
         })
        }
       
    render() {
        return (
            <React.Fragment>
<form className={classes.form}>
<label>Name:</label>
<input type="text" required name="name" onChange={this.changeHandler} value={this.state.studentDetails.name}></input>
<label>Email:</label>
<input type="email"  required  name="email"  onChange={this.changeHandler} value={this.state.studentDetails.email}></input>
<label>Topic of the class:</label>
<input type="text"  required  name="topic"  onChange={this.changeHandler} value={this.state.studentDetails.topic}></input>
<label>Feedback:</label>
<textarea  name="feedback"  required  onChange={this.changeHandler}  value={this.state.studentDetails.feedback}></textarea>
<button onClick={this.onSubmitHandler}>SUBMIT</button>
</form>
            </React.Fragment>
        )
    }
}

export default StudentForm

