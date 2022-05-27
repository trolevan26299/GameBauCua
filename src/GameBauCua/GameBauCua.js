import React from 'react'
import DanhSachCuoc from './DanhSachCuoc'
import DiemCuoc from './DiemCuoc'
import XucXac from './XucXac'
import './asset/BaiTapGameBauCua.css'
import DanhSachXucXac from './DanhSachXucXac'

export default function GameBauCua() {
  return (
    <div id='BaiTapGameBauCua' className='container-fluid'>
        <DiemCuoc/>
        <div className='row'>
            <div className='col-7'>
                <DanhSachCuoc/> 
            </div>
            <div className='col-5'>
                <DanhSachXucXac/>
            </div>
        </div>
    </div>
  )
}
