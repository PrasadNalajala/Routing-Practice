// Write your JS code here
import './index.css'

import {Link} from 'react-router-dom'

const Header = () => (
  <ul className="nav">
    <li>
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="navImg"
      />
      <p>Wave</p>
    </li>
    <div className="nav-items">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </div>
  </ul>
)

export default Header
