import { Outlet, Link } from "react-router-dom"
import './Layout.css'

function Layout(){
    return (
        <main className="container">
          <nav className="sidebar">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
    
          <Outlet className="main-body"/>
        </main>
      )
}

export default Layout