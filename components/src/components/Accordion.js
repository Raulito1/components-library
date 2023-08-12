import { useState } from 'react';

import { BiChevronUp } from "react-icons/bi";
import { BiChevronDown } from "react-icons/bi";

function Accordion({ items }) {
    const [expandedIndex, setExpandedIndex] = useState(-1);
    const handleItemClick = (index) => {
        if (index === expandedIndex) {
            setExpandedIndex(-1);
        } else {
            setExpandedIndex(index);
        }
    };
    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expandedIndex;
        const icon = <span className='text-3xl'>{isExpanded ? <BiChevronUp/> : <BiChevronDown/>}</span>;
        
        return (
            <div key={item.id}>
                <div className='flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer' onClick={() => handleItemClick(index)}>
                    {item.label}
                    {icon} 
                </div>
                {isExpanded && <div className='border-b p-5'>{item.content}</div>}
            </div>
        );
    });


    return (
        <div className='border-x border-t rounded'>
            {renderedItems}
        </div>
    );
}

export default Accordion;