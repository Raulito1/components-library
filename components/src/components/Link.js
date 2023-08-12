import useNavigation from '../hooks/use-navigation';
import classNames from 'classnames';

function Link({ to, children }) {
    const { navigate } = useNavigation();
    const classes = classNames('text-blue-500');

    const handleClick = (event) => {
        console.log(to)
        if (event.metaKey || event.ctrlKey) {
            return;
        }

        event.preventDefault();
        navigate(to); 
    };

    return <a className={classes} href={to} onClick={handleClick}>{children}</a>
}

export default Link;