import React, {useState} from 'react';
import './App.css';
import agape from './images/agape.jpg'
import eros from './images/eros.jpg'
import ludus from './images/ludus.jpg'
import mania from './images/mania.jpg'
import philautia from './images/philautia.jpg'
import philia from './images/philia.jpg'
import pragma from './images/pragma.jpg'
import storge from './images/storge.jpg'

const loves = [agape, eros, ludus, mania, philautia, philia, pragma, storge];

function App() {

    const [love, setLove] = useState(undefined)

  return (
    <div>
        <h1>I Love You</h1>
        <h2>The 8 Types of Love in Ancient Greece {love === undefined && <><br/><br/> Click to learn more about each one</>}</h2>
        {love !== undefined &&
            <div className="img-of-love">
                <img src={love}/>
            </div>
        }
        <div className="all-the-love">
            <div className="love" style={{background: '#ff9292'}} onClick={() => setLove(loves[0])}>Agape</div>
            <div className="love" style={{background: '#ffb4b4'}} onClick={() => setLove(loves[1])}>Eros</div>
            <div className="love" style={{background: '#ffdcdc'}} onClick={() => setLove(loves[2])}>Ludus</div>
            <div className="love" style={{background: '#ffe8e8'}} onClick={() => setLove(loves[3])}>Mania</div>
            <div className="love" style={{background: '#ff9292'}} onClick={() => setLove(loves[4])}>Philautia</div>
            <div className="love" style={{background: '#ffb4b4'}} onClick={() => setLove(loves[5])}>Philia</div>
            <div className="love" style={{background: '#ffdcdc'}} onClick={() => setLove(loves[6])}>Pragma</div>
            <div className="love" style={{background: '#ffe8e8'}} onClick={() => setLove(loves[7])}>Storge</div>
        </div>
        <footer>Thank you to Derek Campbell for the Inspiration for Coding with Love</footer>
    </div>
  );
}

export default App;
