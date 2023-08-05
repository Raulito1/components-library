import classNames from "classnames";

function Panel({ children, className, ...restProps }) {
    const classes = classNames(
        'border rounded p-3 shadow bg-white w-full',
        className
    );

    return (
        <div className={classes} {...restProps}>
            {children}
        </div>
    ); 
}

export default Panel;
