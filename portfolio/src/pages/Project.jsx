import React from "react";
import work from "./resources/work.json"
import ProjectDetail from "../components/ProjectDetail";

function Project(){
    return(<>
    {work.map((project,key) => <ProjectDetail project={project} key={key} />)}
    </>)
}

export default Project