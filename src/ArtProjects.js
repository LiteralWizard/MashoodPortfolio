import React from 'react'

import ReactPlayer from 'react-player/youtube'

import Assimilate from './Projects/AssimilateFWM.png'
import Room from './Projects/RoomCWM.png'
import Road from './Projects/RoadWM.png'
import StairsC from './Projects/StairsCycles.png'

import Lonely from './Projects/Lonely.png'
import FallingU from './Projects/FallingUnderwater.png'
import PixelR from './Projects/PixelRoom.png'
import UP from './Projects/UP1.png'

export default function ArtProjects() {
    return (
      <div style = {{padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>

        <h1 style = {{color: 'white', fontFamily: 'Oswald', fontWeight: '400', fontSize: '3em'}}>Art Projects</h1>

        {/* ########################## NEW IMAGE ########################## */}

        <div style = {{padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap'}}>
          <div style = {{
            padding: '20px',
            maxWidth: '300px',
            textAlign: 'right',
            textShadow: '2px 2px 5px #000',
            color: 'white',
            fontWeight: '200',
            fontSize: '1rem',
          }}>
            <span style = {{fontFamily: 'Oswald', fontWeight: '400', fontSize: '1.3rem'}}>
              Falling Where?</span><br/><br/>
              <span>You're falling? Where did you jump from? Or did you jump at all?</span><br/><br/>
              <span>There's a pit below, and it glows ominously. 
                You have someone watching over you, they surround you, protect you.</span><br/><br/>
            <span style = {{fontWeight: '400'}}>Software Used:</span><span> Blender, Premiere Pro CC</span>
          </div>
          <ReactPlayer url = 'https://www.youtube.com/watch?v=rHhMBzQvY3U' width = '30%' style = {{
            minWidth: '300px',
            borderRadius: '30px',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
          }}/>
        </div>

        {/* ########################## NEW IMAGE ########################## */}

        <div style = {{padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap'}}>
          <ReactPlayer url = 'https://www.youtube.com/watch?v=KWfUav10d78' width = '30%' style = {{
            minWidth: '300px',
            borderRadius: '30px',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
          }}/>
          <div style = {{
            padding: '20px',
            maxWidth: '300px',
            textAlign: 'left',
            textShadow: '2px 2px 5px #000',
            color: 'white',
            fontWeight: '200',
            fontSize: '1rem',
          }}>
            <span style = {{fontFamily: 'Oswald', fontWeight: '400', fontSize: '1.3rem'}}>
              Saint Pepsi - Better (3D Visualization)</span><br/><br/>
              <span>A 3D visualization of Saint Pepsi's Better from his album Hit Vibes that I made using Blender 3D and some post processing.</span><br/><br/>
              <span>Saint Pepsi released Hit Vibes in 2013 and I stumbled upon it when I had my vaporwave craze in 2016. 
                Ever since this album has been one of my all time favourites, with Better being one my favourite songs in the album.</span><br/><br/>
            <span style = {{fontWeight: '400'}}>Software Used:</span><span> Blender, Premiere Pro CC</span>
          </div>
        </div>

        {/* ########################## NEW IMAGE ########################## */}

        <div style = {{padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap'}}>
          <img src = {Assimilate} alt = '' style = {{
            width: '30%',
            minWidth: '300px',
            borderRadius: '30px',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
          }}/>
          <div style = {{
            padding: '20px',
            maxWidth: '300px',
            textAlign: 'left',
            textShadow: '2px 2px 5px #000',
            color: 'white',
            fontWeight: '200',
            fontSize: '1rem',
          }}>
            <span style = {{fontFamily: 'Oswald', fontWeight: '400', fontSize: '1.3rem'}}>
              Neon Assimilation</span><br/><br/>
            <span>Mid 20th Century European shop's attempt to assimilate with the neon future.</span><br/>
            <span>The neon sign displays a quote I like from Apex Legends' character Revenant. 
              I always wanted to make dioramas, but they aren't as available where I live.</span><br/><br/>
            <span style = {{fontWeight: '400'}}>Software Used:</span><span> Blender</span>
          </div>
        </div>

        {/* ########################## NEW IMAGE ########################## */}

        <div style = {{padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap'}}>
          <div style = {{
            padding: '20px',
            maxWidth: '300px',
            textAlign: 'right',
            textShadow: '2px 2px 5px #000',
            color: 'white',
            fontWeight: '200',
            fontSize: '1rem',
          }}>
            <span style = {{fontFamily: 'Oswald', fontWeight: '400', fontSize: '1.3rem'}}>
            Sit and Marvel (The Room)</span><br/><br/>
            <span>You know something incredible lies at the end of the road, but when does it end?</span><br/><br/>
            <span style = {{fontWeight: '400'}}>Software Used:</span><span> Blender</span>
          </div>

          <img src = {Room} alt = '' style = {{
            width: '30%',
            minWidth: '300px',
            borderRadius: '30px',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
          }}/>
        </div>

        {/* ########################## NEW IMAGE ########################## */}

        <div style = {{padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap'}}>
          <img src = {Road} alt = '' style = {{
            width: '30%',
            minWidth: '300px',
            borderRadius: '30px',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
          }}/>
          <div style = {{
            padding: '20px',
            maxWidth: '300px',
            textAlign: 'left',
            textShadow: '2px 2px 5px #000',
            color: 'white',
            fontWeight: '200',
            fontSize: '1rem',
          }}>
            <span style = {{fontFamily: 'Oswald', fontWeight: '400', fontSize: '1.3rem'}}>
              Sit and Marvel (The Road)</span><br/><br/>
              <span>I would rather just sit and marvel at what I could achieve but never will.</span><br/><br/>
            <span style = {{fontWeight: '400'}}>Software Used:</span><span> Blender</span>
          </div>
        </div>

        {/* ########################## NEW IMAGE ########################## */}

        <div style = {{padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap'}}>
          <div style = {{
            padding: '20px',
            maxWidth: '300px',
            textAlign: 'right',
            textShadow: '2px 2px 5px #000',
            color: 'white',
            fontWeight: '200',
            fontSize: '1rem',
          }}>
            <span style = {{fontFamily: 'Oswald', fontWeight: '400', fontSize: '1.3rem'}}>
              Stairway to Ominous Peace</span><br/><br/>
              <span>Portal into tranquility in the middle of a void.</span><br/><br/>
            <span style = {{fontWeight: '400'}}>Software Used:</span><span> Blender</span>
          </div>
          <img src = {StairsC} alt = '' style = {{
            width: '30%',
            minWidth: '300px',
            borderRadius: '30px',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
          }}/>
        </div>

        {/* ########################## NEW IMAGE ########################## */}

        <div style = {{padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap'}}>
          <img src = {Lonely} alt = '' style = {{
            width: '30%',
            minWidth: '300px',
            borderRadius: '30px',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
          }}/>
          <div style = {{
            padding: '20px',
            maxWidth: '300px',
            textAlign: 'left',
            textShadow: '2px 2px 5px #000',
            color: 'white',
            fontWeight: '200',
            fontSize: '1rem',
          }}>
            <span style = {{fontFamily: 'Oswald', fontWeight: '400', fontSize: '1.3rem'}}>
              Lonely</span><br/><br/>
            <span>A fake album cover art inspired by one of the pivotal lines in Blade Runner 2049.</span><br/><br/>
            <span style = {{fontWeight: '400'}}>Software Used:</span><span> Photoshop CC</span>
          </div>
        </div>

        {/* ########################## NEW IMAGE ########################## */}

        <div style = {{padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap'}}>
          <div style = {{
            padding: '20px',
            maxWidth: '300px',
            textAlign: 'right',
            textShadow: '2px 2px 5px #000',
            color: 'white',
            fontWeight: '200',
            fontSize: '1rem',
          }}>
            <span style = {{fontFamily: 'Oswald', fontWeight: '400', fontSize: '1.3rem'}}>
            Falling Underwater</span><br/><br/>
            <span>Sinking body counting down to keep itself sane. Inspired by the scene in You Were Never Really Here.</span><br/><br/>
            <span style = {{fontWeight: '400'}}>Software Used:</span><span> Photoshop CC</span>
          </div>

          <img src = {FallingU} alt = '' style = {{
            width: '30%',
            minWidth: '300px',
            borderRadius: '30px',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
          }}/>
        </div>

        {/* ########################## NEW IMAGE ########################## */}

        <div style = {{padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap'}}>
          <img src = {PixelR} alt = '' style = {{
            width: '30%',
            minWidth: '300px',
            borderRadius: '30px',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
          }}/>
          <div style = {{
            padding: '20px',
            maxWidth: '300px',
            textAlign: 'left',
            textShadow: '2px 2px 5px #000',
            color: 'white',
            fontWeight: '200',
            fontSize: '1rem',
          }}>
            <span style = {{fontFamily: 'Oswald', fontWeight: '400', fontSize: '1.3rem'}}>
              Khwab Room</span><br/><br/>
              <span>Pixel art developed for the main room in Khwab, a game made for GMTK Game Jam 2020 in 48 hours.</span><br/><br/>
            <span style = {{fontWeight: '400'}}>Software Used:</span><span> Photoshop CC</span>
          </div>
        </div>

        {/* ########################## NEW IMAGE ########################## */}

        <div style = {{padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap'}}>
          <div style = {{
            padding: '20px',
            maxWidth: '300px',
            textAlign: 'right',
            textShadow: '2px 2px 5px #000',
            color: 'white',
            fontWeight: '200',
            fontSize: '1rem',
          }}>
            <span style = {{fontFamily: 'Oswald', fontWeight: '400', fontSize: '1.3rem'}}>
              Unknown Signals</span><br/><br/>
              <span>A collection of generated illustrations inspired by the radio waves from a pulsar, 
                which also inspired Joy Division's Unknown Pleasure album art.</span><br/><br/>
            <span style = {{fontWeight: '400'}}>Software Used:</span><span> Processing 3.4 Java</span>
          </div>
          <img src = {UP} alt = '' style = {{
            width: '30%',
            minWidth: '300px',
            borderRadius: '30px',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
          }}/>
        </div>

      </div>
    )
}
