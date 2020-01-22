import React, { useState } from 'react';
import './App.css';

import MemberForm from "./Components/MemberForm"

function App() {

  const [forms, setForms] = useState([]);

  const addMember = memberInfo => {

    const newMember = {
      name: memberInfo.name,
      email: memberInfo.email,
      role: memberInfo.role
    }
  }

  const teamRoster = [...forms, newMember];

  setForms(teamRoster);


  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <MemberForm />
    </div>
  );
}

export default App;
