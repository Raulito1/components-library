import React from 'react';
import Button from './Button';

function App() {
    return (
    <div>
        <div>
            <Button success primary> Click me!</Button>
        </div>
        <div>
            <Button>Help Me!</Button>
        </div>
        <div>
            <Button>Stop!</Button>
        </div>
        <div>
            <Button>Clear!</Button>
        </div>
        <div>
            <Button>New Order!</Button>
        </div>
    </div>
    );
}

export default App;
