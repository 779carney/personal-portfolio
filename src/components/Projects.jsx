import projects from "../data/projects"
function Projects() {
    console.log(projects);
    return (
        <section className="grid px-10 mt-10 md:grid-cols-2 lg:grid-cols-3 gap-10" id='Projects'>


            {projects.map((item) => (
                <div className=" m-8  rounded overflow-hidden shadow-xl bg-slate-200"  key={item.id}>
                    <div className="px-6 py-4">
                        <div className=" text-center font-bold text-xl mb-2">{item.title}</div>
                        <img className="h-28 mx-auto " src={`../${item.img}`}></img>
                        <p className="text-gray-700 text-left mt-3 dark:bg-slate-800 dark:text-white" > - {item.description}</p>
                        <p className="text-gray-700 text-left dark:bg-slate-800 dark:text-white"> - {item.type}</p>
                        <div className="flex justify-end	dark:bg-slate-800 dark:text-white">
                            <button className=" bg-blue-500 mt-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">More Info</button>
                        </div>
                    </div>
                </div>
            ))}



        </section>

    )
}

export default Projects

// <div className="flex max-h-4">

// {projects.map(({title, description, img, techStack, links, index})=>{

// <div key = {index}className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
//  <a href="#">
//  <img className="rounded-t-md" src={`../${img}`} alt=''/>
// </a>
// <div className="p-5">
//     <a href="#">
//         <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">{title}</h5>
//     </a>
//     <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">{description}</p>
//     <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//         go to website
//         <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
//     </a>
// </div>
// </div>
// })}

// </div>




{/* <div className="max-w-sm mx-auto mt-1 ">
    
    
<div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
     <a href="#">
     <img className="rounded-t-md" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt=""/>
 </a>


   
    <div className="p-5">
        <a href="#">
            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </a>
    </div>
</div>

</div> */}




// {projects.map((item) => (
//     <div className=" m-8  rounded overflow-hidden shadow-lg" key={item.id}>
//       <div className="px-6 py-4">
//         <div className=" text-center font-bold text-xl mb-2">{item.title}</div>
//         <img  className="h-28 mx-auto " src={`../${item.img}`}></img>
//         <p className="text-gray-700 text-left mt-3 dark:bg-slate-800 dark:text-white" > - {item.description}</p>
//         <p className="text-gray-700 text-left dark:bg-slate-800 dark:text-white"> - {item.type}</p>
//         <div className="flex justify-end	dark:bg-slate-800 dark:text-white">
//         <button className=" bg-blue-500 mt-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">More Info</button>
//         </div>
//       </div>
//     </div>
//   ))}



