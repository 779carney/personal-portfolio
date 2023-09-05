function NavBar(){
    return (
        <div class="shadow bg-white">
        <div class="h-16 mx-auto px-5 flex items-center justify-between">
            <a class="text-2xl hover:text-cyan-500 transition-colors cursor-pointer">Logo</a>
            
            <ul class="flex items-center gap-5">
              <li><a class="hover:text-cyan-500 transition-colors" href=""></a>Projects</li>
              <li><a class="hover:text-cyan-500 transition-colors" href="">Contact Me</a></li>
              <li><a class="hover:text-cyan-500 transition-colors" href="">Linked in</a></li>
              <li><a class="hover:text-cyan-500 transition-colors" href="">GitHub</a></li>
            </ul>
        </div>
      </div>
    )
}

export default NavBar