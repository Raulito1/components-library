import { useState, useEffect, useRef } from 'react';

import Panel from './Panel';

import { BiChevronUp } from "react-icons/bi";
import { BiChevronDown } from "react-icons/bi";

function Dropdown({ options, selection, onSelect }) {
    const [selected, setSelected] = useState(false);
    const divRef = useRef();

    useEffect(() => {
        // event handler for clicks anywhere on the page
        const onBodyClick = (event) => {
            if (!divRef.current.contains(event.target)) {
                setSelected(false);
            }
        }

        // add event listener to the body element to listen for clicks anywhere on the page (capture: true)
        document.body.addEventListener('click', onBodyClick, { capture: true });

        // cleanup function to remove the event listener
        return () => {
            document.body.removeEventListener('click', onBodyClick, { capture: true });
        }
    }, []);

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
        <div ref={divRef} className='w-48 relative'>
            <Panel className='flex justify-between items-center cursor-pointer' onClick={onSelectedChange}>
                {selection?.label || 'Select ...'}{icon}
            </Panel>
            {selected && <Panel className='absolute top-full'>{renderedOptions}</Panel>}
        </div>
    );
}

export default Dropdown;
