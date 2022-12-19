import './App.css';
import React from 'react';
import Birthday from './components/Birthday';
import UserForm from './components/UserForm';
import MyNewComponent from './components/MyNewComponent';
import styles from './Mycomponent.module.css';


function App() {
  return (
    <div className="App">
        <Birthday 
        name ={"Bert, Kenny"}
        age = {23}
        color = {"Red"}
        />
        <Birthday 
        name ={"Tomlinson, Gina"}
        age = {35}
        color = {"Brown"}
        />
        <Birthday 
        name ={"Anthony, Dylan"}
        age = {30}
        color = {"Purple"}
        />
      < UserForm />
      <div>
      <MyNewComponent header={ "Header Prop" }>
            <h1 className={styles.h1}>These are children</h1>
            <p>This is a child</p>
            <p>This is another child</p>
            <p>This is even another child</p>
        </MyNewComponent>  
      </div>
    </div>
    
  );
}

export default App;