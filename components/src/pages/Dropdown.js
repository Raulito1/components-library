import { useState } from 'react';

function Dropdown({ options, selection, onSelect }) {
    const [selected, setSelected] = useState(false);

    const onSelectedChange = () => {
        setSelected(!selected);
    };

    const onOptionSelected = (option) => {
        setSelected(false);
        onSelect(option);
    };

    const renderedOptions = options.map((option) => {
        return (
            <div onClick={() => onOptionSelected(option)} key={option.value}>
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
        <div>
            <div onClick={onSelectedChange}>{selection?.label || 'Select ...'}</div>
            {selected && <div>{renderedOptions}</div>}
        </div>
    );
}

export default Dropdown;
