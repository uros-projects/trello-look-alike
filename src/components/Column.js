import React from 'react'

const Column = ({ isHovering, children }) => {
    const className = isHovering ? ' highlight-region' : '';

    return (
        <div className={`col${className}`}>
            {children}            
        </div>
    )
}

export default Column
