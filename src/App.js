import './App.css';
import pigeon from "./BirdBackground.jpg";
import { useState } from 'react';
import dandc from "./divideAndConquer.pdf";
import DCRevision from "./DCRevision.pdf"




function App() {
  return (
    <div className="App">      
      <header className="App-header">
        <img src = {pigeon} className='Pigeon-picture'></img>

        <div>
          <h1 className='Page-title'>
            Bird Initiated Rubbish Disposal System
          </h1>
          <h1 className='Page-title'>
          B.I.R.D.S
          </h1>
          <p className='Page-intro'>
            Intro will go here!
          </p>
        </div>
        <div>
        <div className='people-container'>
            <div>Computer Engineering</div>
            <div>Electrical Engineering</div>
            <div>Donovan Reynolds: do106772@ucf.edu</div>
            <div>Rodrigo Guerra: ro344440@ucf.edu</div>
            <div></div><div></div>
            <div>Photonics</div>
            <div>Photonics</div>
            <div>Aiden Nipper: ai880754@ucf.edu</div>
            <div>Will DiSalvo: wi226232@ucf.edu</div>
          </div>
        <div className='paper-container'>
      <a className = 'divide' target='_blank' href = {dandc}>Divide and Conquer </a>
      <a className = 'divide' target='_blank' href = {DCRevision}>Divide and Conquer Revision </a>
        </div>
        </div>
      </header>
    </div>

  );
}

export default App;
