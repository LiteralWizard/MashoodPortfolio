import React from 'react';
// import styles from './App.css';

import BottomWatermark from './BottomWatermark'
import ArtProjects from './ArtProjects'

import FallWell from './Projects/Compressed/FallWellDark.jpg'
import FallMan from './Projects/Compressed/FallMan.png'
import Stairs from './Projects/Compressed/StairsCycles.jpg'
import PatR from './Assets/Pattern-Randomized.svg'

import { Parallax } from 'react-parallax'
import {Helmet} from "react-helmet"
import ReactPlayer from 'react-player/youtube'

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

      {/* ########################## FYP ########################## */}

      <div style = {{padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <h1 style = {{color: 'white', fontFamily: 'Oswald', fontWeight: '400', fontSize: '3em'}}>Final Year Project</h1>
        
        <div style = {{
          padding: '20px',
          maxWidth: '400px',
          textAlign: 'center',
          textShadow: '2px 2px 5px #000',
          color: 'white',
          fontWeight: '200',
          fontSize: '1rem',
        }}>
          <span style = {{fontFamily: 'Oswald', fontWeight: '400', fontSize: '1.3rem'}}>
            Pakalo - The Artificially Intelligent Cooking Assistant</span><br/><br/>
            <span>This small feature showcase made in Blender explored my Final Year Project for my Bachelors CS degree. 
              I was responsible for development of the Chatbot and for designing the UI/Frontend of the application. The logo was also designed by me.</span><br/><br/>
            <span>The Android App being showcased is called Pakalo and is an AI Cooking Assistant. The main feature of this app is to guide a user step by step throughout a recipe at their own pace via a chatbot the the user can talk to. The app also contains thousands of recipes that a user can cook.</span><br/><br/>
          <span style = {{fontWeight: '400'}}>Software Used For Project:</span><span> Google Firestore, Rasa Framework, Android Studio, Google Cloud Services, Python</span>
          <br/><br/>
          <span style = {{fontWeight: '400'}}>Software Used For Showcase:</span><span> Blender, Premiere Pro CC</span>
        </div>
        <ReactPlayer url = 'https://youtu.be/yXp05vrQxbM' width = '40%' style = {{
          minWidth: '300px',
          borderRadius: '30px',
          boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        }}/>

      </div>

      {/* ########################## FYP ########################## */}

      <div style = {{
        color: 'white',
        fontWeight: '300',
        fontSize: '2em',
        display: 'flex',
        justifyContent: 'center'}}><span>&lt;  /  &gt;</span></div>

      <ArtProjects />

      <div style = {{zIndex: '2'}}>
        <BottomWatermark/>
      </div>

    </div>
  );
}

export default App;
