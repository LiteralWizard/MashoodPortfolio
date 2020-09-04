import React from 'react';
// import styles from './App.css';

import BottomWatermark from './BottomWatermark'
// import BGVideo from './BGVideo'

import FallWell from './Projects/FallWellDark.jpg'
import FallMan from './Projects/FallMan.png'
import Stairs from './Projects/StairsCycles.jpg'
import PatR from './Assets/Pattern-Randomized.svg'

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
        justifyContent: 'center'}}><span>|  |  |</span></div>

      <Parallax 
        bgImage = {Stairs}
        blur = {{}}
        strength = {-300}
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
            fontWeight: '200',
            fontSize: '2em',
          }}>
            <span>Computer Scientist</span><br/><br/>
            <span>Designer</span><br/><br/>
            <span>3D Artist</span>
          </div>
        </div>
      )}>
      </Parallax>

      <div style = {{zIndex: '2'}}>
        <BottomWatermark/>
      </div>

    </div>
  );
}

export default App;
