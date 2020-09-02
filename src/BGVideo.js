import React from 'react'

import FallingWhere from './Projects/Falling.mp4'

export default function BGVideo() {
    return (
        <div>
            <video autoPlay = 'autoplay' loop = 'loop' muted style = {{
                position: 'absolute',
                width: '100%',
                left: '50%',
                right: '50%',
                height: '100%',
                objectFit: 'cover',
                transform: 'translate(-50%, 0%)',
                zIndex: '-1',
                filter: 'brightness(50%)'
                }}>
                <source src = {FallingWhere} type = 'video/mp4'/>
            </video>
        </div>
    )
}
