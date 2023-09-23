function AboutMe(){
    return (
 
        <section id ="about-me"className="bg-white ">
    <div className="grid max-w-screen-2xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Elle Carney</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Hello, I'm Elle, a junior web developer on a journey fueled by the excitement of a career change into the dynamic world of technology. My professional background, which began in the retail industry, has equipped me with a unique set of skills and insights that I now bring to the field of web development.My transition into web development has been incredibly rewarding. </p>
        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
        During my time in the retail sector, I gained essential skills such as understanding customer needs, effective communication, problem-solving, and consistently meeting targets. Working within diverse teams taught me the value of teamwork and the strength that comes from collective effort.
        </p>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex rounded-lg ">
            <img src="../img/me3.png" alt="A photo of me next to the northcoders sign" className="rounded-lg "/>
        </div>                
    </div>
</section>

    )
}

export default AboutMe



// {projects.map(({title, description, img, techStack, links, index})=>{
//     <div key = {index}className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
//          <a href="#">
//          <img className="rounded-t-md" src={`../${img}`} alt=''/>
//      </a>
//      <div className="p-5">
//             <a href="#">
//                 <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">{title}</h5>
//             </a>
//             <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">{description}</p>
//             <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//                 go to website
//                 <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
//             </a>
//         </div>
//      </div>
//     })}