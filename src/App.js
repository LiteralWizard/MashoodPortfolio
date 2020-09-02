import React from 'react';
//import styles from './App.css';

import BottomWatermark from './BottomWatermark'
import BGVideo from './BGVideo'

function App() {
  return (
    <div>
      <div style = {{zIndex: '-1'}}>
        <BGVideo/>
      </div>

      <div style = {{
        display: 'grid',
        placeItems: 'center',
        height: '100vh',
        color: 'white',
        fontFamily: 'Oswald',
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
          <span style = {{fontWeight: '200', fontSize: '5em'}}>Hello There</span>
          <span style = {{fontWeight: '400', fontSize: '2.1em'}}>I'm Mashood Ur Rehman</span>
        </div>
      </div>

      <div style = {{zIndex: '2'}}>
        <BottomWatermark/>
      </div>

    </div>
  );
}

export default App;
