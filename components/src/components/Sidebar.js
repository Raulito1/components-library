import Link from './Link';

function Sidebar() {
    const links = [
        { path: '/', label: 'Accordian' },
        { path: '/dropdown', label: 'Dropdown' },
        { path: '/button', label: 'Button' }
    ]

    const renderedLinks = links.map((link) => {
        return (
            <Link key={link.label} to={link.path}>{link.label}</Link>
        )
    });

    return (
        <div className='sticky top-0 overflow-y-scroll flex flex-col'>
            {renderedLinks}
        </div>
    )
}

export default Sidebar;

