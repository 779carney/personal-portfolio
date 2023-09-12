import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons';

function Footer(){
    return (
        <>
        <footer className="bg-white dark:bg-gray-900 mt-10">
            <div className="container px-6 py-8 mx-auto">
                <div className="flex flex-col items-center text-center">
                    <a href="#">
                        <img className="w-auto h-20" src="../img/logo.png" alt=""/>
                    </a>
        
                    <p className="max-w-md mx-auto mt-4 text-gray-500 dark:text-gray-400">Thank you for visiting my page.</p>
        
                 
                </div>
        
                <hr className="my-10 border-gray-200 dark:border-gray-700" />
        
                <div className="flex flex-col items-center sm:flex-row sm:justify-between">
                    <p className="text-sm text-gray-500">© Copyright 2023. All Rights Reserved.</p>
        
                    <div className="flex mt-3 -mx-2 sm:mt-0">
                        <a href="about-me" className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-cyan-500 transition-colors dark:hover:text-gray-300 mt-2 " aria-label="Reddit"> Home </a>
                        <a className="hover:text-cyan-500 transition-colors ml-6 mr-6" href="https://www.linkedin.com/in/elle-mae-carney-300264260/" target='blank'> <FontAwesomeIcon icon={faLinkedin} size='2xl'/></a>
              <a className="hover:text-cyan-500 transition-colors" href="https://github.com/779carney" target='blank'><FontAwesomeIcon icon={faSquareGithub}size='2xl' /></a>

                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer