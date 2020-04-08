
import React,{useState} from 'react';
import './About.css';
// import logo from './logo.svg';

function About() {
    const [state, setstate] = useState(0)

    return (
        <aside className='About'>
            
        <h1>What is waveform?</h1>
        <p>Waveform is a look into various ways to create visulisations 
            based on audio input/output in the browser.</p>


       
        <h1>Fair Use Act Disclaimer</h1>
        <p>Copyright Disclaimer under section 107 of the Copyright Act of 1976, allowance is made for “fair use” 
            for purposes such as criticism, comment, news reporting, teaching, scholarship, 
            education and research. Fair use is a use permitted by 
            copyright statute that might otherwise be infringing.</p>
            
        </aside>
    )
}

export default About
