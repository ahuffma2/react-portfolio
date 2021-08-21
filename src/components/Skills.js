import React from 'react';
import { skills } from "../info.js";

export default function Skills() {
    return (
        <div>
          <div className="container px-5 py-10 mx-auto">
            <div className="text-center mb-10">
              {/* <ChipIcon className="w-10 inline-block mb-4" /> */}

              <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                Languages &amp; Tech
              </h1>

              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                 From self-taught hobby programmer, to college graduate in computer game development, to full stack web developer, I've acquired many useful skills. 
              </p>

            </div>

            <div className="flex flex-around lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
              {
              skills.map(
                  (skill) => 
                  (<div key={skill} className="p-2 sm:w-1/2 w-full">
                    <div className="bg-gray-700 rounded flex p-4 h-full items-center">
                        <span className="title-font font-large text-white">
                            {skill}
                    </span>

                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      );
}