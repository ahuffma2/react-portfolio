import React from 'react';

export default function About() {
    return(
        <section id="about-me">

        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            
            <div className="lg:flex-grow md:w-1/2 lg:pr-12 md:pr-15 flex flex-col md:items-start md:text-left mb-10 md:mb-0 items-center text-center">
              
                <h1 className=" sm:text-4xl text-3xl mb-5 font-LARGE text-white"> What's Up! I'm Austin Huffman </h1>
                
                <p className="mb-8 leading-relaxed">
                I got my start at the wee age of 15 (Back in 2012) creating educational Unity Games for my high-school homework assignments. Why make a powerpoint when I could make a game? I then decided to take my passion to college and get my Bachelors in Computer Game Development and Design. This program was Computer Science focused and I got my Minor in CS, as well as a focus on Software Engineering. I am currently attending a Georgia Institute of Technology bootcamp and working with two other extremely talented engineers to create our own Web App E-Commerce Bulletin to show off the skills I acquired in the camp but as this is still a work in progress you'll have to stay tuned. I am looking to jump start my career get my foot in the door with my first CS job. This is my passion. I want to create and make applications that improve peoples lives. And mostly, I'm a problem solver always looking to learn, improve, and grow
                </p>
            </div>
        </div>

        <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Contact Me!
            </a>

          </div>
        </section>
        
    )
}