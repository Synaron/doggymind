import React from 'react'
import PawIcon from './PawIcon';

function HeadingIcon() {
  return (
    <div>
        <div style={{ position: 'relative', overflow: 'hidden', height: '100vh' }}>
            <PawIcon />
        </div>
        <div>
            <h1>Abschnitt Heading</h1>
        </div>
        <div style={{ position: 'relative', overflow: 'hidden', height: '100vh' }}>
            <PawIcon />
        </div>
    </div>
  )
}

export default HeadingIcon