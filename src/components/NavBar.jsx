import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons';
function NavBar(){
    return (
        <div className="shadow bg-white">
        <div className="h-16 mx-auto px-5 flex items-center justify-between">
             <a className="text-2xl hover:text-cyan-500 transition-colors cursor-pointer "><img src='../img/logo.png' className='h-16' alt='logo'/></a> 
           
            <ul className="flex items-center gap-5">
              <li><a className="hover:text-cyan-500 transition-colors" href="#contact-me">Contact Me</a></li>
              <li><a className="hover:text-cyan-500 transition-colors" href="https://www.linkedin.com/in/elle-mae-carney-300264260/" target='blank'> <FontAwesomeIcon icon={faLinkedin} size='2xl'/></a></li>
              <li><a className="hover:text-cyan-500 transition-colors" href="https://github.com/779carney" target='blank'><FontAwesomeIcon icon={faSquareGithub}size='2xl' /></a></li>
            </ul>
        </div>
      </div>
    )
}

export default NavBar