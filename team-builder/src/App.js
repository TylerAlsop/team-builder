import React, { useState } from 'react';
import './App.css';

import MemberForm from "./Components/MemberForm";

function App() {

  const [forms, setForms] = useState([]);

  // const addMember = memberInfo => {

  //   const newMember = {
  //     name: memberInfo.name,
  //     email: memberInfo.email,
  //     role: memberInfo.role
  //   }
  // }

  // const teamRoster = [...forms, newMember];

  // setForms(teamRoster);


  return (
    <div className="App">
      <header className="App-header">
        <MemberForm />
      </header>
      
    </div>
  )
};

export default App;
