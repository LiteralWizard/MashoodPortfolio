import React from 'react'

import FallingWhere from './Projects/Falling.mp4'

export default function BGVideo() {
    return (
        <div>
            <video preload = 'auto' autoPlay = 'autoplay' loop = 'loop' muted style = {{
                position: 'fixed',
                width: '100%',
                left: '50%',
                right: '50%',
                height: '100%',
                objectFit: 'cover',
                zIndex: '-1',
                transform: 'translate(-50%, 0%)',
                filter: 'brightness(50%)'
            }}>
                <source src = {FallingWhere} type = 'video/mp4'/>
            </video>
        </div>
    )
}
