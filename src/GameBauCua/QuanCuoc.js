import React from 'react'
import { useDispatch } from 'react-redux';
import { useSpring,animated } from 'react-spring';


export default function QuanCuoc(props) {

  const dispatch=useDispatch();
  //animation button + -
  const propsUseSpringInCrease= useSpring(() => {
    return {
        to: { scale: 1 },
        from: {scale: 0.85},
        reset:false    }
})
const propsUseSpringDeCrease= useSpring(() => {
  return {
      to: { scale: 1 },
      from: { scale: 0.85 },
      reset: false
  }
})

  const {quanCuoc}=props;
  return (
     <div className='w3-animate-zoom'>
       <img className='mt-3' src={props.quanCuoc.hinhAnh} style={{width:'70%'}}  alt='baucua'/>
       <div className='bg-success text-center mt-1'  style={{width:'70%',borderRadius:'10px'}}>
              <animated.button style={{transform:propsUseSpringInCrease[0].scale.to(scale=>`scale(${scale})`)}} onClick={()=>{
               propsUseSpringInCrease[1]({reset:true})
              
              
                dispatch({
                  type:'DAT_CUOC_BAU_CUA',
                  quanCuoc,
                  tangGiam:true
              })}} className='btn btn-danger mt-1 mb-1 mr-1 py-2'><i className='fa fa-plus'></i></animated.button>

              <span  style={{color:'yellow',fontSize:'25px'}}>{props.quanCuoc.diemCuoc}</span>

              <animated.button style={{transform:propsUseSpringDeCrease[0].scale.to(scale=>`scale(${scale})`)}} onClick={()=>{
               propsUseSpringDeCrease[1]({reset:true})
              
                dispatch({
                  type:'DAT_CUOC_BAU_CUA',
                  quanCuoc,
                  tangGiam:false
              })}} className='btn btn-danger mt-1 mb-1 ml-1 py-2'><i className='fa fa-minus'></i></animated.button>
       </div>
       </div>
  )
}
