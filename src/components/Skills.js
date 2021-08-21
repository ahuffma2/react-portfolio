import React from 'react';
import { skills } from "../info";

export default function Skills() {
    return (

        <section>
          <div className="container p-5 mx-auto">
            <div className="text-center">

              <h1 className="sm:text-4xl text-3xl font-large m-5">
                Languages And Technologies
              </h1>

              <p className="text-base leading-relaxed xl:w-2/4 mx-auto">
              From self-taught hobby programmer, to college graduate in computer game development, to full stack web developer, I've acquired many useful skills. 
              </p>

            </div>

            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto ">

              {
              skills.map(( skill ) => (

                <div key={skill} className="p-2 sm:w-1/2 w-full">
                  <div className="items-center bg-gray-700 rounded flex p-4">

                    <span className="font-medium text-center">
                      {skill}
                    </span>

                  </div>
                </div>
              ))
              }
            </div>
          </div>
        </section>
      );
}