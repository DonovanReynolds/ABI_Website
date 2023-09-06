import './App.css';
import pigeon from "./BirdBackground.jpg"

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <img src = {pigeon} className='Pigeon-picture'></img>

        <div>
          <h1 className='Page-title'>
            Pigeon Legion
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
            <div>Rodrigo Guerra: TBA@ucf.edu</div>
            <div></div><div></div>
            <div>Photonics</div>
            <div>Photonics</div>
            <div>Aiden Nipper: TBA@ucf.edu</div>
            <div>Will DiSalvo: TBA@ucf.edu</div>
          </div>
        </div>
      </header>
    </div>

  );
}

export default App;
