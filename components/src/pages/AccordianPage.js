import Accordion from '../components/Accordion';

function AccordionPage() {
    const reactItems = [
        {
            id: 0,
            label: 'What is React?',
            content: 'React is a front end javascript framework'
        },
        {
            id: 1,
            label: 'Why use React?',
            content: 'React is a favorite JS library among engineers'
        },
        {
            id: 2,
            label: 'How do you use React?',
            content: 'You use React by creating components'
        }
    ];

    const angularItems = [
        {
            id: 0,
            label: 'What is Angular?',
            content: 'Angular is a platform and framework for building client-side applications with HTML and TypeScript.'
        },
        {
            id: 1,
            label: 'Why use Angular?',
            content: 'Angular is powerful, scalable, and has powerful CLI and rich ecosystem.'
        },
        {
            id: 2,
            label: 'How do you use Angular?',
            content: 'You use Angular by creating modules and components, and using directives and services.'
        }
    ];

    return (
        <div>
            <div className="mb-4">
                <Accordion items={reactItems}/>
            </div>
            <div>
                <Accordion items={angularItems}/>
            </div>
        </div>
    );
}

export default AccordionPage;
