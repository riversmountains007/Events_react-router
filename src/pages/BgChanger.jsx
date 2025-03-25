import React, { useRef, useState } from 'react'

function BgChanger() {

    const [color,setColor] = useState('black')
    const bgRef = useRef()
    console.log(bgRef.current);

    const changeBg = (color) => {
        bgRef.current.style.backgroundColor = color
    }
    

  return (
      <div style={{minHeight:'100vh'}} ref={bgRef}>
          <h2>BgChanger</h2>
          <button onClick={()=>changeBg('red')}>Red</button>
          <button onClick={()=>changeBg('green')} >Green</button>
          <button onClick={()=>changeBg('blue')}>Blue</button>
          <button onClick={()=>changeBg('grey')}>Grey</button>
      </div>
  )
}

export default BgChanger