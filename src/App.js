import React from 'react';
// import styles from './App.css';

import BottomWatermark from './BottomWatermark'
// import BGVideo from './BGVideo'

import FallWell from './Projects/Compressed/FallWellDark.jpg'
import FallMan from './Projects/Compressed/FallMan.png'
import Stairs from './Projects/Compressed/StairsCycles.jpg'
import PatR from './Assets/Pattern-Randomized.svg'

import Assimilate from './Projects/AssimilateFWM.png'
import Room from './Projects/RoomCWM.png'
import Road from './Projects/RoadWM.png'

import { Parallax } from 'react-parallax'
import {Helmet} from "react-helmet"

function App() {
  return (
    <div style = {{backgroundImage: 'url(' + PatR + ')', backgroundAttachment: 'fixed'}}>

      <Helmet>
          <meta charSet="utf-8" />
          <title>Mashood Ur Rehman Portfolio</title>
      </Helmet>

      {/* <div style = {{zIndex: '-1'}}>
        <BGVideo/>
      </div> */}

      {/* <div style = {{width: '100%', display: 'flex', justifyContent: 'center'}}>
        <img src = {FallMan} alt = '' style = {{
          zIndex: '2',
          position: 'fixed',
          height: '30% ',
          bottom: '5%',
        }}/>
      </div> */}

      <Parallax
          blur = {{min: -1, max: 5}}
          bgImage = {FallWell}
          bgImageAlt = ''
          strength = {500}
          style = {{boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>

        <div style = {{
          display: 'grid',
          placeItems: 'center',
          height: '100vh',
          color: 'white',
          textShadow: '2px 2px 5px #000',
          zIndex: '0',
        }}>
          <div style = {{
            display: "flex",
            flexDirection: 'column',
            alignItems: "center",
            width: "30%",
            minWidth: '400px',
            textAlign: "center",
          }}>
            <span style = {{fontFamily: 'Oswald', fontWeight: '200', fontSize: '5em'}}>Hello There</span><br/>
            <span style = {{fontWeight: '400', fontSize: '1.6em'}}>I'm Mashood Ur Rehman</span>
          </div>
        </div>

      </Parallax>

      <div style = {{
        color: 'white',
        fontWeight: '300',
        fontSize: '2em',
        display: 'flex',
        justifyContent: 'center'}}><span>&lt;  /  &gt;</span></div>

      <Parallax 
        bgImage = {Stairs}
        blur = {{min: -1, max: 8}}
        strength = {-400}
        style = {{boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}
        renderLayer = {percentage => (
        <div style = {{width: '100%', display: 'flex', justifyContent: 'center'}}>
          <img src = {FallMan} alt = '' style = {{
            zIndex: '2',
            position: 'fixed',
            height: '30% ',
            bottom: '5%',
            transform: `rotate(${percentage * 20}deg)`,
            opacity: `${1 - percentage * 2}`,
          }}/>

          <div style = {{
            paddingTop: '20vh',
            paddingBottom: '20vh',
            zIndex: '0',
            textAlign: 'center',
            textShadow: '2px 2px 5px #000',
            color: 'white',
            fontFamily: 'Oswald',
            fontWeight: '200',
            fontSize: '2em',
          }}>
            <span style = {{fontFamily: 'Manrope', fontWeight: '600'}}>I AM A</span><br/><br/>
            <span>Computer Scientist</span><br/>
            <span>Graphic Designer</span><br/>
            <span>3D Artist</span>
          </div>
        </div>
      )}>
      </Parallax>

      <div style = {{
        color: 'white',
        fontWeight: '300',
        fontSize: '2em',
        display: 'flex',
        justifyContent: 'center'}}><span>&lt;  /  &gt;</span></div>

      <div style = {{padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>

        <h1 style = {{color: 'white', fontFamily: 'Oswald', fontWeight: '400', fontSize: '3em'}}>Art Projects</h1>

        {/* ########################## NEW IMAGE ########################## */}

        <div style = {{display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap'}}>
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
            <span>The Android App being showcased is called Pakalo and is an AI Cooking Assistant. 
              The main feature of this app is to guide a user step by step throughout a recipe at their own pace via a chatbot the the user can talk to. 
              The app also contains thousands of recipes that a user can cook.</span><br/>
          </div>
        </div>

        {/* ########################## NEW IMAGE ########################## */}

        <div style = {{padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap'}}>
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
            Sit and Marvel (The Room)</span><br/><br/>
            <span>You know something incredible lies at the end of the road, but when does it end?</span><br/>
          </div>

          <img src = {Room} alt = '' style = {{
            width: '30%',
            minWidth: '300px',
            borderRadius: '30px',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
          }}/>
        </div>

        {/* ########################## NEW IMAGE ########################## */}

        <div style = {{display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap'}}>
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
              <span>I would rather just sit and marvel at what I could achieve but never will.</span><br/>
          </div>
        </div>

      </div>

      <div style = {{zIndex: '2'}}>
        <BottomWatermark/>
      </div>

    </div>
  );
}

export default App;
