import React, { useState } from 'react'
import {NavItem} from '../DropDown/NavItem'
import Dropdown from '../DropDown/Dropdown'
import {Link} from 'react-router-dom'
import './Navbar.css';
const Navbar = () => {
    const[ProductDropDown,setProductDropDown]=useState(false)
    const[userDropDown,setUserDropDown]=useState(false)

    const displayDropDown=(a)=>{
      if(a==='Product'){
      setProductDropDown(true)
    }
  
    else if(a==='user') {
      setUserDropDown(true)
      setProductDropDown(false)
    }
}
const hideDropDown=()=>{
  setProductDropDown(false)
  setUserDropDown(false)
}
  return (
    <div>
      <nav className='navBar'>
      <Link to='/' className='brand'>LOgo</Link>
       <ul className='navbar-ul'>
       {
        NavItem.map((item)=>{
            if(item.title==='Product'){
                return <li key={item.id} onMouseEnter={displayDropDown.bind(this,'Product')} onMouseLeave={hideDropDown}>
                 <Link to={item.path} className={item.cName}>{item.title}</Link>
                 {ProductDropDown ? <Dropdown/>:null}
                 {}
                </li>
            }
            else if(item.title==='Register'){
                return <li key={item.id} onMouseEnter={displayDropDown.bind(this,'user')} onMouseLeave={hideDropDown}>
                <Link to={item.path} className={item.cName}>{item.title}</Link>
                {userDropDown ? <Dropdown/>:null}
                </li>
            }
            return <li key={item.id}>
             <Link to={item.path} className={item.cName}>{item.title}</Link>
            </li>
        })
       }
       </ul>
      </nav>
    </div>
  )
}

export default Navbar