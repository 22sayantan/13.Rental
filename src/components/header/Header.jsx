import './header.scss'
import { NavLink } from 'react-router-dom'

function Header() {
    const header_list = ['about','services','liked','booked','login'];

  return (
    <>
        <nav className="header">
            <div className="left">
                <h2>Brand</h2>
            </div>

            <div className="right">
                <ul>
                    <li>
                        <NavLink to='/'>home</NavLink>
                    </li>

                    {header_list.map((e)=>{
                            return(
                                <li key={e}>
                                    <NavLink to={e}>{e}</NavLink>
                                </li>
                            )
                    })}
                </ul>
            </div>
        </nav>
      
    </>
  )
}

export default Header
