import React from 'react'
import './SideNavBar.css'

const SideNavBar = (props) => {
  return(
    <div className="sideNav" >
      {props.children}
    </div>
  )
}
export default SideNavBar