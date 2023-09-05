function NavBar(){
    return (
        <div className="shadow bg-white">
        <div className="h-16 mx-auto px-5 flex items-center justify-between">
            <a className="text-2xl hover:text-cyan-500 transition-colors cursor-pointer">Logo</a>
            
            <ul className="flex items-center gap-5">
              <li><a className="hover:text-cyan-500 transition-colors" href=""></a>Projects</li>
              <li><a className="hover:text-cyan-500 transition-colors" href="">Contact Me</a></li>
              <li><a className="hover:text-cyan-500 transition-colors" href="">Linked in</a></li>
              <li><a className="hover:text-cyan-500 transition-colors" href="">GitHub</a></li>
            </ul>
        </div>
      </div>
    )
}

export default NavBar