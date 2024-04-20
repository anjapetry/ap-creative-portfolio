import React from "react";
import clsx from "clsx";

type BoundedProps = {
    as?: React.ElementType;
    className?: string;
    children: React.ReactNode;
};

const Bounded = React.forwardRef<HTMLDivElement, BoundedProps>(
    ({ as: Comp = "selection", className, children, ...restProps }, ref) => {
        return (
            <Comp
                ref={ref}
                className={"px-4 py-10 sm:px-6  md:py-14 lg:py-16"}
                {...restProps}
            >
                <div className='mx-auto max-w-7xl w-full'>{children}</div>
            </Comp>
        );
    }
);

Bounded.displayName = "Bounded";

export default Bounded;
