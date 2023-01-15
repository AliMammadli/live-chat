import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
    const [msg, setMsg] = useState()

    useEffect(() => {
        fetch('http://localhost:3001/api').then(res => res.json()).then(res => setMsg(res.message))
    }, [])



    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>{msg}</p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
