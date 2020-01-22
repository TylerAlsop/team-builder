import React, { useState } from 'react';
import './App.css';

import MemberForm from "./Components/MemberForm";
import TeamList from "./Components/TeamList";

function App() {

  const [forms, setForms] = useState([]);

  const addMember = memberInfo => {

    const newMember = {
      name: memberInfo.name,
      email: memberInfo.email,
      role: memberInfo.role
    };
  };

  const teamList = [...forms, newMember];

  setForms(teamList);

  console.log("Forms", forms)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Team List</h1>
        <MemberForm addMember={addMember}/>
      </header>
      
    </div>
  )
};

export default App;
