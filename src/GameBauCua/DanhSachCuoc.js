import React from 'react'
import QuanCuoc from './QuanCuoc'
import {useSelector} from 'react-redux'


export default function DanhSachCuoc(props) {

  const danhSachCuoc=useSelector(state=>state.GameBauCuaReducer.danhSachCuoc) ;
  const renderDanhSachCuoc =()=>{
      return danhSachCuoc.map((item,index)=>{
        return  <div className='col-4' key={index}>
                   <QuanCuoc quanCuoc={item}/>
                </div>
      })
  }
  return (
    <div className='row mt-4 ml-3'>
        {renderDanhSachCuoc()}
    </div>
  )
}
