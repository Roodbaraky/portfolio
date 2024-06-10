import Image from 'next/image'
import React from 'react'

export default function ProjectsContainer() {
  return (
    <section id="projects-section" className="flex flex-col items-center">
    <div className="projects-container w-[80%] flex flex-col lg:flex-row gap-8 mt-6">
      <article className=" hover:scale-110 transition-all delay-150 ease-in-out relative overflow-hidden rounded-lg shadow  hover:shadow-xl hover:drop-shadow-xlmx-4 ">
        <Image
          alt=""
          src={"/assets/api-proj.png"}
          className="absolute inset-0 h-full w-full object-cover"
          width={600}
          height={600}
        />

        <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
          <div className="p-4 sm:p-6">
            <time
              dateTime="2022-10-10"
              className="block text-xs text-white/90"
            >
              {" "}
              15th April 2024{" "}
            </time>

            <a href="https://nc-news-solo-kr.onrender.com/api">
              <h3 className="mt-0.5 text-lg text-white">NC News API</h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
              The Northcoders News (NC News) API is a RESTful back-end
              interface built to power a reddit-like news app: NC News. The
              API is built using the Express.js and Node.js frameworks and
              is powered by a PostgreSQL database in conjunction with
              ElephantSQL and Render for live hosting.
            </p>
          </div>
        </div>
      </article>

      <article className=" hover:scale-110 transition-all delay-150 ease-in-out relative overflow-hidden rounded-lg shadow  hover:shadow-xl hover:drop-shadow-xlmx-4">
        <Image
          alt=""
          src={"/assets/app-proj.png"}
          className="absolute inset-0 h-full w-full object-cover"
          width={600}
          height={600}
        />

        <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
          <div className="p-4 sm:p-6">
            <time
              dateTime="2022-10-10"
              className="block text-xs text-white/90"
            >
              {" "}
              3rd May 2024{" "}
            </time>

            <a href="https://nc-news-kroo.netlify.app/">
              <h3 className="mt-0.5 text-lg text-white">NC News</h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
              Northcoders News (NC News) app is a front-end web app built
              using the NC-News API I built previously. It is a reddit-like
              news app which aggregates articles and allows users to cast
              votes and make comments on articles. NC News is built using
              Vite + React and styled using Tailwind CSS and hosted on
              Netlify.
            </p>
          </div>
        </div>
      </article>

      <article className=" hover:scale-110 transition-all delay-150 ease-in-out relative overflow-hidden rounded-lg shadow  hover:shadow-xl hover:drop-shadow-xlmx-4">
        <Image
          alt=""
          src={"/assets/app2-proj.png"}
          className="absolute inset-0 h-full w-full object-cover"
          width={600}
          height={600}
        />

        <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
          <div className="p-4 sm:p-6">
            <time
              dateTime="2022-10-10"
              className="block text-xs text-white/90"
            >
              {" "}
              Coming Soon...{" "}
            </time>

            <a href="#">
              <h3 className="mt-0.5 text-lg text-white">SkillFlash</h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
              SkillFlash is a full-stack project written in Typescript
              utilsing the React Native framework. Its backend is powered by
              MongoDB and Express. SkillFlash is an AI-powered flash cards
              app which aims to help users prepare for interviews for tech
              roles, intepretting keywords from job descriptions in prompts
              to generate bespoke revision material.
            </p>
          </div>
        </div>
      </article>
    </div>
  </section>
  )
}
