import React, { useState } from 'react'
import { ProductDropDown } from './NavItem'
import {Link} from 'react-router-dom'
import './Dropdown.css'

const Dropdown = () => {
    let[dropdown,setDropDown]=useState(false)
  return (
    <div>
    <ul className={dropdown? 'product-submenu-clicked':'product-submenu'} onClick={()=>{setDropDown(!dropdown)}}>
   {
    ProductDropDown.map((item)=>{
return <li key={item.id}>
        <Link to={item.path} className={item.cName} onClick={()=>{
            setDropDown(false)
        }}>{item.title}</Link>
     </li>
    })
   }
    </ul>
    </div>
  )
}

export default Dropdown