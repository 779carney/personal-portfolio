import projects from "../data/projects"
import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import TechStackCard from "./TechStackCard";
function Projects() {
    const [id, setId] = useState();
    const [techClicked, setTechClicked] = useState(false)


    function handleClick(id) {
        setTechClicked(true)
        setId(id)
        

    }


    function handleClickBack(id) {
        setTechClicked(false)
        setId(id)
        
    }
    useEffect(() => {
        
    }, [techClicked])
   

    if (!techClicked) {
        return (
            <ProjectCard projects={projects} handleClick={handleClick}/>
        )

    }
    else {
        return (
<TechStackCard projects={projects} id={id} handleClickBack={handleClickBack}/>
        )

    }
}

export default Projects




