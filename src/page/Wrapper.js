import React from 'react';

function Wapper({ children}) {
    const style = {
        border: '2px soid black',
        padding: '16px',
    };
    return (
        <div style={style}>
            {children}
        </div>
    )
    
}

export default Wapper;