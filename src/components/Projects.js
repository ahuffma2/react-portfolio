import React from 'react';
import { projects } from "../info.js";

function Projects() {
    return(
    <section id="projects" className="text-gray-300 bg-gray-900">

      <div className="container p-5 mx-auto text-center">

        <div className="flex flex-col w-full mb-20">

          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          
          <p className="lg:w-2/3 mx-auto">
            Take a look at some of the Projects I've been making! I love working on a team and growing not only my own skills, but helping others grow in their passions as well!
          </p>
        </div>

        <div className="flex flex-wrap">

          {projects.map(
              (project) => (

                <a href={project.link}
                key={project.image}
                className=" w-100 p-5">
                    
              <div className="flex relative">

                <img
                  className="object-cover absolute w-full h-full "
                  src={project.image}/>

                    {/* Makes it so that when you hover over it, this div becomes visible */}
                <div className="opacity-0 hover:opacity-100 p-5 relative w-full bg-gray-800  border-2 border-green-500">
                    
                  <h1 className="text-lg mb-3">
                    {project.title}
                  </h1>

                  <h2 className="tracking-widest text-sm text-red-400 title-font font-large ">
                    {project.subtitle}
                  </h2>

                  <p>{project.description}</p>
                </div>

              </div>
            </a>   
          ))}
        </div>
      </div>
    </section>
)}

export default Projects;