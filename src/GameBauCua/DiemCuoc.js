import React from 'react'
import {useSelector,useDispatch} from 'react-redux';


export default function DiemCuoc() {
  const dispatch=useDispatch();
  const tongTien=useSelector(state => state.GameBauCuaReducer.tongTien)
  return (
    <div className='text-center '>
      <h3 className='display-4 pt-2 mt-0' style={{color:'green'}}> Game Bầu Cua</h3>
      {/* <p style={{fontSize:'20px'}}>Còn thở là con gỡ Oh.Yeah!!</p> */}
      <div className='text-center mt-4'>
        <span style={{fontSize:'20px',borderRadius:'8px'}} className='p-3 text-white bg-danger'>Tiền thưởng: <span className='text-warning'> {tongTien.toLocaleString()}$</span></span>
      </div>
      <div className='text-center mt-4 '>
        <button onClick={()=>{dispatch({
            type:'CHOI_LAI'
        })}}  style={{fontSize:'15px',border:'none',borderRadius:'4px'}} className='p-2 text-white bg-success '>Chơi lại</button>
      </div>
    </div>
  )
}
