import { nanoid } from 'nanoid'

function TechStackCard({ projects, handleClickBack, id }) {



    return (

        <section className="grid mt-10  sm:grid-cols-1md:grid-cols-2 lg:grid-cols-3 gap-10" id='Projects'>


            {projects.map((item) => (
                id === item.id ? (
                    <div className=" m-8  rounded overflow-hidden shadow-xl bg-white hover:bg-slate-50 active:bg-slate-100 focus:outline-none focus:ring focus:ring-violet-300" key={item.id}>
                        <div className="px-6 py-4  h-76">
                            <div className=" text-center font-bold text-xl mb-2 min-h-full">{item.title}</div>

                            {item.techStack.map((stack) => {
                                return <ul className=" m-3">
                                    <li key={nanoid()}>{stack}</li>

                                </ul>

                            })}
                            <div className="flex justify-end">
                                <button className=" bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  ml-2 mb-0" ><a href={item.links[0]} target="_blank">Go to Project</a></button>
                                <button className=" bg-blue-500 mb-0 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4 " onClick={() => { handleClickBack(item.id) }} >Info</button>
                            </div>
                        </div>
                    </div>
                ) : (<div className=" m-8  rounded overflow-hidden shadow-xl bg-white hover:bg-slate-50 active:bg-slate-100 focus:outline-none focus:ring focus:ring-violet-300" key={item.id}>
                    <div className="px-6 py-4 h-76 ">
                        <div className=" text-center font-bold text-xl mb-2">{item.title}</div>
                        <img className="h-28 mx-auto " src={`../${item.img}`}></img>
                        <p className="text-gray-700 text-left mt-3" > - {item.description}</p>
                        <p className="text-gray-700 text-left"> - {item.type}</p>
                        <div className="flex justify-end	">
                            <button className=" bg-blue-500 mt-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  ml-2 mb-0" ><a href={item.links[0]} target="_blank">Go to Project</a></button>
                            <button className=" bg-blue-500 mt-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4" onClick={() => { handleClickBack(item.id) }} >Tech Stack</button>
                        </div>
                    </div>
                </div>)
            ))}



        </section>

    )
}


export default TechStackCard