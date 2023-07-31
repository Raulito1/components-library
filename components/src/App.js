import React from 'react';
import Button from './Button';

import { GoCopilot } from "react-icons/go";

function App() {
    const handleClick = () => {
        console.log("Clicked!");
    }
    
    return (
        <div>
            <div>
                <Button secondary outline onClick={handleClick}>
                    <GoCopilot/> Click me!
                </Button>
            </div>
            <div>
                <Button danger outline>Help Me!</Button>
            </div>
            <div>
                <Button warning>Stop!</Button>
            </div>
            <div>
                <Button secondary outline>Clear!</Button>
            </div>
            <div>
                <Button primary rounded>New Order!</Button>
            </div>
        </div>
    );
}

export default App;
