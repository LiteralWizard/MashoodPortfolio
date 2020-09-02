import React from 'react'

function BottomWatermark() {
    return (
        <div>
            <div style = {{
                position: 'fixed',
                width: 'auto',
                bottom: '5px',
                left: '10px'
            }}>
                <span style = {{fontSize: '1em', color: 'white'}}>
                Made Using
                <b> React.JS</b>
                </span>
            </div>

            <div style = {{
                position: 'fixed',
                width: 'auto',
                bottom: '5px',
                right: '10px'
            }}>
                <span style = {{fontSize: '1em', color: 'white'}}>
                © Literal
                <b>Wizard</b>
                </span>
            </div>
        </div>
    );
}

export default BottomWatermark;