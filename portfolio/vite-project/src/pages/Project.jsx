import React from "react";
import work from "./resources/work.json"
import ProjectDetail from "../components/ProjectDetail";


function Project(){
    return(<main className="d-flex flex-wrap">
    {work.map((project,key) => <ProjectDetail project={project} key={key} />)}
    </main>)
}

export default Project