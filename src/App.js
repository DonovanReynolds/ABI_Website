import './App.css';
import pigeon from "./BirdBackground.jpg";
import { useState } from 'react';
import dandc from "./divideAndConquer.pdf";
import DCRevision from "./DCRevision.pdf"
import half_report from "./60-Page-Report.pdf"
import final_report from "./BIRDS_Final_Report.pdf"
import page_8_doc from "./SD2_G12_8-page_conferencepaper.pdf"
import finalSlides from "./Final_PresentationSlides.pdf"
import final120Page from "./FinalFinalReport.pdf"
import midCDR from "./Midterm_CDR.pdf"




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
          B.I.R.D.S.
          </h1>
          <h1 className='Page-Sponsor'>
            Sponsored by Justin Phelps
          </h1>
          <br></br><br></br><br></br>
          <p className='Page-intro'>
          For decades, governments and societies around the world have attempted to discourage the act of littering. Some have implemented educational programs to educate the public and others enforce it by law and threat of force. In the United States, public programs to incentivize proper waste disposal have mostly worked, at least for younger generations. However, a non-negligible amount of trash is still generated in public spaces, whether due to inconvenience or neglect.  All current solutions for public clean up involve extensive energy cost. Whether using volunteers, convict labor, or salaried street cleaners, they all require active effort to keep streets clean. 
          <br></br><br></br>The B.I.R.D.S. project will be a device that can be used to train birds to pick up trash. Birds are very smart creatures and there have been many occasions where they have been trained with enough consistency. Since birds have such free access to many locations, they would be great candidates to picking up different bits of trash. The birds will bring in trash and be rewarded as long as they bring the right things in. This is a classical conditioning for birds to show them that depositing trash to the B.I.R.D.S. is beneficial for them. 

          <br></br><br></br>This will be a great project to take on as this could very heavily benefit areas that are littered with trash around the world. Along with trash pickup there are many different fields of expertise that can come together in this project. This makes it the perfect opportunity to learn more about our respective fields of Photonics Science and Engineering, Electrical Engineering, and Computer Engineering. This also helps us learn to learn more about finding the experts and getting help from all different fields to come together. 
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
        <div className = 'Reviewer-Title'>Reviewers</div>
        <div className = 'Reviewers-List'>
          Justin Phelps<br></br>
          Zakhia Abichar<br></br>
          Bahaa Saleh<br></br>
          Reza Abdolvand
        </div>
        <div className = 'demo-title'>Parts and Demo</div>
        <div className='paper-container'>
          
          <a className = 'divide' target='_blank' href = "https://youtu.be/L8qgK5_zG4o">Senior Design 1 Parts<br></br>& <br></br>Demo Explanation </a>
          
          <a className = 'midterm-demo' target='_blank' href = {page_8_doc} >8 Page Paper</a>
          <a className = 'divide' target='_blank' href = "https://www.youtube.com/watch?v=T2Pxi1Ozvas" >Final Demo</a>
          <a className = 'divide' target='_blank' href = "https://www.youtube.com/watch?v=z14HredlDTw" >Final Presentation</a>
          
          
        </div>

        <div className = 'Reviewer-Title'>Papers</div>
        <div className='paper-container'>
      <a className = 'divide' target='_blank' href = {dandc}>Divide and Conquer </a>
      <a className = 'divide' target='_blank' href = {DCRevision}>Divide and Conquer Revision </a>
      <a className = 'divide' target='_blank' href = {half_report}>60 Page Report </a>
      <a className = 'divide' target='_blank' href = {final_report}>Final Report </a>

      <a className = 'divide' target='_blank' href = {finalSlides}>Final Presentation Slides </a>
      <a className = 'divide' target='_blank' href = {midCDR}>Midterm CDR</a>
      <a className = 'divide' target='_blank' href = {final120Page}>Final Report </a>
      
        </div>
        
        </div>
      </header>
    </div>

  );
}

export default App;
