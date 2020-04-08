
import React,{useState} from 'react';
import './Github.css';
// import logo from './logo.svg';

function Github() {
    const [state, setstate] = useState(0)

    return (
        <aside className='Github'>
       
        <h1>Fair Use Act Disclaimer</h1>
        <p>Copyright Disclaimer under section 107 of the Copyright Act of 1976, allowance is made for “fair use” 
            for purposes such as criticism, comment, news reporting, teaching, scholarship, 
            education and research. Fair use is a use permitted by 
            copyright statute that might otherwise be infringing.</p>
            
        </aside>
    )
}

export default Github
