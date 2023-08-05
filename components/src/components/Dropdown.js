import { useState } from 'react';

import { BiChevronUp } from "react-icons/bi";
import { BiChevronDown } from "react-icons/bi";

function Dropdown({ options, selection, onSelect }) {
    const [selected, setSelected] = useState(false);

    const icon = <span className='text-3xl'>{selected ? <BiChevronDown/> : <BiChevronUp/>}</span>;

    const onSelectedChange = () => {
        setSelected(!selected);
    };

    const onOptionSelected = (option) => {
        setSelected(false);
        onSelect(option);
    };

    const renderedOptions = options.map((option) => {
        return (
            <div className='hover:bg-sky-100 rounded cursor-pointer p-1' onClick={() => onOptionSelected(option)} key={option.value}>
                {option.label}
            </div>
        )
    })

    // default content for the dropdown
    // but if there is a selection, then use that
    // let content = 'Select ...'
    // if (selection) {
    //     content = selection.label;
    // }

    return (
        <div className='w-48 relative'>
            <div className='flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full' onClick={onSelectedChange}>{selection?.label || 'Select ...'}{icon}</div>
            {selected && <div className='absolute top-full border rounded p-3 shadow bg-white w-full'>{renderedOptions}</div>}
        </div>
    );
}

export default Dropdown;
