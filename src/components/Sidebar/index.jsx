import './index.scss'
import { Link, NavLink } from 'react-router-dom';
import logoDZ from '../../assets/images/DZ-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
const Sidebar = () => (

<div className="nav-bar">
  <Link className='logo' to='/'>
    <img src={logoDZ} alt="logo" />
  </Link>

  <nav>
    <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color='#215e53'/>
    </NavLink>
    <NavLink exact="true" activeclassname="active" className="about-link"to="/about">
        <FontAwesomeIcon icon={faUser} color='#215e53'/>
    </NavLink>
    <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
        <FontAwesomeIcon icon={faEnvelope} color='#215e53'/>
    </NavLink>
  </nav>
  <ul>
      <li>
          <a target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/dian-zahid-358b2b28b/">
              <FontAwesomeIcon icon={faLinkedin} color='#215e53'/>
          </a>
      </li>
      <li>
      <a target='_blank' rel='noreferrer' href="https://github.com/dianzahid">
          <FontAwesomeIcon icon={faGithub} color='#215e53'/>
      </a>
      </li>

  </ul>
</div>


)

export default Sidebar;