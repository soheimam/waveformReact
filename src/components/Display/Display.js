
import React,{useState} from 'react';
import './Display.css';
import frame from './frame.png';

function Github() {
    const [state, setstate] = useState(0)

    return (
        <main className='Display'>
            <div className='ImageSection'>
                <img src={frame}></img>

                <div className='Info'>
            <h1> Project title</h1>
                <h3>Project req: Chrome only/ Microphone on</h3>

            </div>
            </div>
            
            
        </main>
    )
}

export default Github
