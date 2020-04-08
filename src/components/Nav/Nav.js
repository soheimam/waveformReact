
import React,{useState} from 'react';
import './Nav.css';
import logo from './logo.svg';

function Nav() {
    const [state, setstate] = useState(0)

    return (
        <nav className='Nav'>
            
            <a href='#'>About</a>
            <a href='#'><img src={logo}></img></a>
            <a href='#'>Waveform</a>
            
        </nav>
    )
}

export default Nav
