import React, {useState} from 'react';
import './App.css';
import CommitmentsMilestones from './components/CommitmentsMilestones.js'; 

function App() {
  return (
    <div className="App bg-primary">
      <div className="container">
        <CommitmentsMilestones />
      </div>
    </div>
  );
}

export default App;
