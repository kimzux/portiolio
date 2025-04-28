import React from "react";
import projectOne from "../assets/portfolio/projectOne.jpg";
import projectTwo from "../assets/portfolio/projectTwo.jpg";
import projectThree from "../assets/portfolio/hazuin.png";
import projectFour from "../assets/portfolio/projectFour.png";
const Project = () => {
  const projects = [
    {
      id: 1,
      src: projectOne,
      demo: "https://zulfa-rajabu-todo.netlify.app/",
      code: "https://github.com/kimzux/todo-list",
    },
    {
      id: 2,
      src: projectTwo,
      demo: "https://zulfa-rajabu.netlify.app/",
      code: "https://github.com/kimzux/mini-project",
    },
    {
      id: 3,
      src: projectThree,
      demo: "http://training.thinkmate.co.tz/",
      code: "https://github.com/kimzux/training-managemnet-system",
    },
    {
      id: 4,
      src: projectFour,
      demo: "https://simple-webpage-iota.vercel.app/",
      code: "https://github.com/kimzux/simple-webpage",
    },
    {
      id: 5,
      src: projectThree,
      demo: "https://680f67dc214da5879f83a80d--hazuin.netlify.app/",
      code: "https://github.com/kimzux/hazuin-website,",
    },
    {
      id: 6,
      src: projectThree,
      demo: "http://training.thinkmate.co.tz/",
      code: "https://github.com/kimzux/training-managemnet-system",
    },
  ];

  return (
    <div
      name="project"
      className="w-full h-full bg-gradient-to-b  via-white from-pincolor-100 to-pincolor-900 pt-16 pb-16 lg:pt-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8 xl:px-2 mb-8 text-center lg:mb-16">
          <p className="text-4xl font-bold inline border-b-4 border-purple ">
            Projects
          </p>{" "}
          <br />
          <br />
          <p className="xl:max-w-2xl px-4 mx-auto text-lg text-gray-800 sm:px-10 md:text-xl md:max-w-3xl md:px-0">
            Here you will find some of the personal projects that I created from
            scratch based on my current skillset. Click on the live link to find
            out more about each project.
          </p>
        </div>
        <div className="container mx-auto max-w-7xl flex flex-col space-y-12 px-4 sm:px-10 lg:flex-row lg:space-y-0 lg:space-x-16 xl:flex-row xl:space-y-0 xl:space-x-16 2xl:flex-row 2lx:space-y-0 2lx:space-x-16">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 xl:grid-cols-3 2xl:grid-cols-3 lg:grid-cols-3">
            {projects.map(({ id, src, demo, code }) => (
              <div
                key={id}
                className="shadow-md shadow-pincolor-200 rounded:lg"
              >
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center">
                  <a
                    href={demo}
                    className="w-1/2 px-6 m-4 duration-200 hover:scale-105"
                  >
                    Demo
                  </a>
                  <a
                    href={code}
                    className="w-1/2 px-6 m-4 duration-200 hover:scale-105"
                  >
                    Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
