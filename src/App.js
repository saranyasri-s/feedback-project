
import React from 'react';
import classes from './App.module.css';
import StudentsList from './components/StudentsList/StudentsList';
import StudentForm from './components/StudentForm/StudentForm';
function App() {
  return (<React.Fragment >
     <div className={classes.App}>
     <h3 className={classes.heading}>Hello students...Kindly fill this feedback form</h3>
     <StudentForm></StudentForm>
     </div>
     <StudentsList></StudentsList>
    </React.Fragment>
  );
}

export default App;
