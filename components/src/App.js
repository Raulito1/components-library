import React from 'react';
import Button from './Button';

function App() {
    return (
    <div>
        <div>
            <Button success rounded outline> Click me!</Button>
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
