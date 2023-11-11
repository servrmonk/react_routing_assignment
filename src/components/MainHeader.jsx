import React from 'react'
import { NavLink} from 'react-router-dom'
import classes from './MainHeader.module.css'



export default function MainHeader() {
  return (
    <>
    <header className={classes.header}>
    
    <nav>
    <ul>
        <li>
        {/* whenever we click on "a" link it refresh it send the whole network request by using link we can prevent  
             <a href='/welcome'>Welcome</a>  */}
            {/* <Link to='/welcome'>Welcome</Link>  */}
            <NavLink activeClassName={classes.active} to='/welcome'>Welcome</NavLink> 
            
        </li>
        <li>
            <NavLink activeClassName={classes.active} to='/products'>Products</NavLink>
        </li>
    </ul>
      
    </nav>
    </header>
    </>
  )
}
