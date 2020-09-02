import React from 'react'

import FallingWhere from './Projects/FallingOP.webm'

export default function BGVideo() {
    return (
        <div>
            <video preload = 'auto' autoPlay = 'autoplay' loop = 'loop' muted style = {{
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
                <source src = {FallingWhere} type = 'video/webm'/>
            </video>
        </div>
    )
}
