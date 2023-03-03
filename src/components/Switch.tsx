import React, { useState } from 'react'
import switchBack from '../assets/bottom/switchBack.svg'
import switchFront from '../assets/bottom/switchFront.svg'

export const Switch = () => {

  const [toggle,setToggle] = useState(false)  

  return (
    <div className='switch' onClick={()=>setToggle(!toggle)}>
        <img src={switchBack} style={{opacity:`${toggle?0.5:1}`}}/>
        <img src={switchFront} style={{marginLeft:`${toggle?'-50%':'50%'}`,opacity:`${toggle?0.5:1}`}} />
    </div>
  )
}
