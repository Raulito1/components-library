import { useState } from 'react';

// components
import Dropdown from "./pages/Dropdown";

function App() {
    const [selection, setSelection] = useState(null);

    const onSelectedChange = (option) => {
        setSelection(option);
    };

    const options = [
        { label: "The Color Red", value: "red" },
        { label: "The Color Green", value: "green" },
        { label: "A Shade of Blue", value: "blue" },
    ]
    return <Dropdown options={options} selection={selection} onSelect={onSelectedChange}/>
}

export default App;
