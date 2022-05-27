import React from 'react'
import { useSpring,animated } from 'react-spring'

export default function XucXac(props) {
  
  const[propsDice,set]=useSpring(()=>{
    return {
      to:{
        xyz:[720,720,720]
      },
      from:{
        xyz:[0,0,0]
      },
      config:{duration:1500},
      reset:false

    }
  })
  set({reset:true})

  return (
    <>
        <div className='scene ml-5'  >
              <animated.div style={{transform:propsDice.xyz.to((x,y,z)=>`translateZ(-25px) rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`)}} className='cube'>
                    <div className='cube__face front'>
                         <img  src={props.xucXacItem.hinhAnh} style={{  width:'100%' }} />
                    </div>
                    <div className='cube__face back'>
                         <img  src='./img/bau.png' style={{ width:'100%'}} />
                    </div>
                    <div className='cube__face left'>
                         <img  src='./img/ga.png' style={{ width:'100%'}} />
                    </div>
                    <div className='cube__face right'>
                         <img  src='./img/ca.png' style={{ width:'100%'}} />
                    </div>
                    <div className='cube__face top'>
                         <img  src='./img/tom.png' style={{ width:'100%'}} />
                    </div>
                    <div className='cube__face bottom'>
                         <img  src='./img/nai.png' style={{ width:'100%'}} />
                    </div>
            </animated.div>
        </div>
      
    </>
  )
}
