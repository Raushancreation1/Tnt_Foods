import React from 'react'


const IconBtn = ({
    text,
    onclick,
    children,
    disabled,
    outline = false,
    customClasses,
    type,
}) => {

    return (
        <button
            disabled={disabled}
            onClick={onclick}
            className={`flex items-center ${outline ? "border border-neonorange-900 bg-transparent" : "bg-neonorange-900"
                } cursor-pointer gap-x-2 rounded-md py-2 px-5 font-semibold text-richblack-900 ${customClasses}`}
            type={type}
        >
            {children ? (
                <>
                    <span className={`${outline && "text-neonorange-900"}`}>{text}</span>
                    {children}
                </>
            ) : (
                text
            )}
        </button>
    )
}

export default IconBtn