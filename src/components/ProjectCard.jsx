function ProjectCard({projects, handleClick}){
  
    return (

        <section className="grid px-10 mt-10 md:grid-cols-2 lg:grid-cols-3 gap-10" id='Projects'>


            {projects.map((item) => (

                <div className=" m-8  rounded overflow-hidden shadow-xl bg-white hover:bg-slate-50 active:bg-slate-100 focus:outline-none focus:ring focus:ring-violet-300" key={item.id}>
                    <div className="px-6 py-4 h-76">
                        <div className=" text-center font-bold text-xl mb-2">{item.title}</div>
                        <img className="h-28 mx-auto " src={`../${item.img}`} alt={`${item.title} screenshot`}></img>
                        <p className="text-gray-700 text-left mt-3 dark:bg-slate-800 dark:text-white" > - {item.description}</p>
                        <p className="text-gray-700 text-left dark:bg-slate-800 dark:text-white"> - {item.type}</p>
                        <div className="flex justify-end	dark:bg-slate-800 dark:text-white">
                            <button className=" bg-blue-500 mt-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-14 ml-2 mb-0" ><a href={item.links[0]} target="_blank">Go to Project</a></button>
                            <button className=" bg-blue-500 mt-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4 " onClick={() => { handleClick(item.id) }} >Tech Stack</button>
                        </div>
                    </div>
                </div>

            ))}



        </section>)
}

export default ProjectCard