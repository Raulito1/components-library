import { useState } from 'react';

// components
import Dropdown from "./components/Dropdown";

function App() {
    // this is an example of a controlled component
    // the component does not manage its own state
    // the parent component manages the state and passes it down as props
    // const [selection, setSelection] = useState(null);
    const [selection1, setSelection1] = useState(null);
    const [selection2, setSelection2] = useState(null);

    const onSelectedChange1 = (option) => {
        setSelection1(option);
    };

    const onSelectedChange2 = (option) => {
        setSelection2(option);
    };

    const options = [
        { label: "The Color Red", value: "red" },
        { label: "The Color Green", value: "green" },
        { label: "A Shade of Blue", value: "blue" },
    ]
    return (
        <div className='flex'>
            <Dropdown options={options} selection={selection1} onSelect={onSelectedChange1}/>
            <Dropdown options={options} selection={selection2} onSelect={onSelectedChange2}/>
        </div>
    );
}

export default App;
