"use client"
import { use, useEffect, useState } from 'react'
import { themeChange } from 'theme-change'
import { BsFillMoonStarsFill, BsBrightnessHighFill, BsEmojiKissFill, BsSlashCircle, BsList, BsGithub, BsLinkedin, BsFileEarmarkArrowDown, BsNodePlusFill, BsWhatsapp, BsPhone, BsTelephone, BsTelephoneFill, BsTextCenter, BsChatText } from 'react-icons/bs'
import { DiCss3, DiHtml5, DiJsBadge, DiMongodb, DiPostgresql, DiPython, DiReact } from 'react-icons/di'
import { RiNextjsFill, RiNodejsFill, RiTailwindCssFill } from 'react-icons/ri'
import { SiExpress, SiJest, SiTypescript } from 'react-icons/si'




export default function Home() {
  const [btn, setBtn] = useState('btn-')
  const [bgcolor, setBgcolor] = useState('bg-transparent')
  const [shadow, setShadow] = useState('shadow')
  const [hamburger, setHamburger] = useState('hamburger-icon')



  useEffect(() => {
    themeChange(false)
  }, []);

  const [scrollPosition, setScrollPosition] = useState(0);
  const [prevScrollPosition, setPrevScrollPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setPrevScrollPosition(scrollPosition)
      setScrollPosition(window.scrollY);
    };
    if (scrollPosition < 120) {

      setBtn('btn-ghost')
      setBgcolor('bg-transparent')
      setShadow('')

      setHamburger('hamburger-icon')
    }
    if (scrollPosition > 300) {
      setBtn('btn-primary')

      setHamburger('hamburger-icon-alt')
    }
    if (scrollPosition / prevScrollPosition > 1 && scrollPosition > 300) {
      setShadow('shadow-xs')
      setBgcolor('bg-base-100')
    }
    if (scrollPosition / prevScrollPosition < 1) {
      // setBgcolor('bg-transparent')
      // setShadow('')

    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };


  }, [scrollPosition, prevScrollPosition])

  const handleTouchOn = () => {

  }


  return (

    <main onTouchStart={handleTouchOn} className='px-2 mx-auto w-full'>

      <section className='w-100vw h-80vh'>
        <nav className={`top-0 left-0 mt-0 fixed flex justify-between items-center align-middle p-2 mb-12 w-full ${bgcolor} rounded-xl z-40  hover:opacity-100 transition-all delay-350 ease-in-out ${shadow}`} >

          <div className={`group dropdown dropdown-hover place-self-start pr-8 pb-3`}>
            <div tabIndex={0} className={`btn ${btn} text-primary dropdown dropdown-bottom flex w-fit aspect-square rounded-full self-start`} role='button'>
              <svg className='scale-[220%]' id={`${hamburger}`} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>

            </div>

            <ul tabIndex={0} className='mt-1 bg-primary text-accent-content dropdown-content delay-150 menu p-2 shadow  rounded-box w-52 border-dotted'>
              <li><a href='#about'>About</a></li>
              <li><a href='#skills'>Skills</a></li>
              <li><a href='#projects'>Projects</a></li>
              <li><a href='#contact'>Contact</a></li>
              <li><a href='https://github.com/Roodbaraky' target='_blank'><BsGithub />GitHub</a></li>
              <li><a href='https://www.linkedin.com/in/koorosh-roodbaraky/' target='_blank'><BsLinkedin />LinkedIn</a></li>
              <li><a href='https://drive.google.com/uc?export=download&id=1RqxkZrhN6kk0z222h4z_en7t7fUtLueh' target='_blank'><BsFileEarmarkArrowDown />Download CV</a></li>

              <div className='sm:hidden flex flex-wrap justify-evenly'>
                <button data-set-theme="cupcake" data-act-class="ACTIVECLASS" className='btn btn-sm rounded-full btn-primary'><BsBrightnessHighFill /></button>
                <button data-set-theme="dark" data-act-class="ACTIVECLASS" className='btn btn-sm rounded-full btn-primary '><BsFillMoonStarsFill /></button>
                <button data-set-theme="valentine" data-act-class="ACTIVECLASS" className='btn btn-sm rounded-full btn-primary '><BsEmojiKissFill /></button>
              </div>

            </ul>

          </div>


          <div className='hidden sm:flex flex-nowrap'>
            <button data-set-theme="" data-act-class="ACTIVECLASS" className={`${btn} rounded-full btn`}><BsSlashCircle /></button>
            <button data-set-theme="cupcake" data-act-class="ACTIVECLASS" className={`${btn} rounded-full btn`} ><BsBrightnessHighFill /></button>
            <button data-set-theme="dark" data-act-class="ACTIVECLASS" className={`${btn} rounded-full btn`}><BsFillMoonStarsFill /></button>
            <button data-set-theme="valentine" data-act-class="ACTIVECLASS" className={`${btn} rounded-full btn`} ><BsEmojiKissFill /></button>
          </div>
        </nav>
      </section>
      <a id='about' className='absolute -top-24'></a>
      <section id='about-section' className='mt-32 mx-auto self-center flex flex-col'>
        <div className='lg:self-start'>
          <h1 className=" text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-9xl text-center lg:text-left mb-4 lg:ml-8 font-sans">
            Hi, I&apos;m <strong className="font-semibold">Koo</strong>
          </h1>


        </div>
        <div>
          <div id='about-content' className='mx-auto w-full flex flex-col self-center lg:flex-row lg:justify-evenly md:justify-evenly md:gap-8'>

            <div className=' aspect-square lg:w-full self-center lg:items-start bg-gradient-to-b from-current rounded-full max-w-[500px]'>
              <img src={"/assets/claypp2-removebg.png"} className='aspect-square w-full self-center lg:items-start lg:w-full max-w-[500px]' alt="" />
            </div>
            <article className="flex flex-col items-center self-center lg:items-start w-fit">
              <h2 className="mb-2 text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-center lg:text-left font-sans">
                Software Developer
              </h2>

              <div className="max-w-prose text-center lg:text-left space-y-3 lg:space-y-4">
                <p className="text-2xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl ">
                  I <u>love</u> solving problems.
                </p>
                <p className="text-lg lg:text-xl">
                  <em>P.S. I&apos;m really good at it</em>
                </p>
                <p className="text-2xl lg:text-3xl">
                  I am eager to work on new projects, across a broad array of tech.
                </p>
                <p className="text-3xl lg:text-4xl pb-4">
                  Let&apos;s build something awesome!
                </p>
                <div className='flex flex-col gap-5 justify-center lg:flex-row lg:py-4 lg:justify-end'>
                  <div className='flex gap-5 self-center'>
                    <a className='btn btn-warning rounded-full' href='https://www.linkedin.com/in/koorosh-roodbaraky/'><BsLinkedin />LinkedIn</a>
                    <a className='btn btn-warning rounded-full' href='https://github.com/Roodbaraky'><BsGithub />GitHub</a>
                  </div>
                  <div className='w-fit self-center'><a className='btn btn-outline btn-warning rounded-full w-48 mx-auto lg:mx-0 lg:w-fit flex-nowrap text-nowrap' href='https://drive.google.com/uc?export=download&id=1_7lyU59cjVRbFqhz1jL21Za0zbSwuNKG' target='_blank'><BsFileEarmarkArrowDown />Download my CV</a></div>
                </div>
              </div>
            </article>



          </div>
          <div className='text-center mt-6'>
            <div tabIndex={0} className="collapse mx-auto w-5/6 text-center">
              <div className="collapse-title text-xl font-medium self-center mx-auto text-center">
                <p className='font-light btn btn-outline btn-primary opacity-5 hover:opacity-100 text-center rounded-full shadow-lg'>(Read more)</p>
              </div>
              <div className="collapse-content text-justify ">
                <p tabIndex={0} className='text-2xl lg:text-3xl mb-4 text-center '>
                  Well spotted.
                </p>
                <p tabIndex={0} className=' md:text-lg lg:text-xl'>
                  I have been fascinated with computers for essentially as long as I&apos;ve been able to walk and talk. <em className='text-sm'>- Thanks Dad, for letting me take your machines to bits.</em>
                </p>
                <p tabIndex={0} className=' md:text-lg lg:text-xl'>
                  What I love about working in this field now, is the constantly growing and changing technological landscape and having the means to take concepts from mere ideas, to fully fledged apps.
                </p>
                <p tabIndex={0} className=' md:text-lg lg:text-xl my-4'>
                  <em> Also, it&apos;s <strong>really</strong> satisfying to solve problems - did I say that already?</em>
                </p>
                <p tabIndex={0} className=' md:text-lg lg:text-xl'>
                  When I&apos;m not busy getting square-eyes, though, I like to unwind with meditation and yoga <em className='text-sm'>- don&apos;t even get me started on saunas!</em>
                </p>
                <p tabIndex={0} className=' md:text-lg lg:text-xl'>
                  But equally, I adore <em><strong>all things techno</strong></em>, and I DJ a little bit on the side. If you saw me at the rave... <em>no you didn&apos;t</em>.
                </p>
                <p tabIndex={0} className='text-lg md:text-xl lg:text-2xl my-4 text-center'>
                  Thanks for reading, I&apos;m touched ♥
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <span className="mt-1 flex items-center mx-14">
        <span className="h-px flex-1 bg-primary opacity-65"></span>
        <span className="text-2xl italic font-mono shrink-0 px-6">Skills</span>
        <span className="h-px flex-1 bg-primary opacity-65"></span>
      </span>
      <a id='skills' className='relative -top-24'></a>
      <section id=''>

        <a id='' className='absolute -top-24'></a>
        <section id='skills-container' className="rounded-xl flex items-center w-full">
          <div className="w-full px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8 flex flex-col items-center">
            <div id='skills-content' className='flex flex-col sm:grid grid-cols-3 gap-4 mb-8'>
              <div>
                <h3 className='text-2xl my-2 font-semibold'>Web & Mobile Dev</h3>
                <ul>
                  <li className='py-1 text-left'>
                    <p className='font-semibold'>Frontend:</p> Building sleek UIs with <a className='italic'>HTML</a>, <a className='italic'>CSS</a>, <a className='italic'>JavaScript</a>, and modern frameworks like <a className='italic'>React</a>.
                  </li>
                  <li className='py-1 text-left'>
                    <p className='font-semibold'>Backend:</p> Creating robust servers with <a className='italic'>Node.js</a> and <a className='italic'>Express</a>. Desiging and building RESTful APIs with <a className='italic'>PostgreSQL</a> and <a className='italic'>MongoDB</a> .
                  </li>
                  <li className='py-1 text-left'>
                    <p className='font-semibold'>Mobile:</p> Developing apps with <a className='italic'>React Native</a> and <a className='italic'>Flutter</a>. Basic porting to <a className='italic'>iOS</a> (Swift) and <a className='italic'>Android</a> (Android Studio) .
                  </li>
                  <li className='py-1 text-left'>
                    <p className='font-semibold'>Design:</p> Crafting user-friendly interfaces with <a className='italic'>Figma</a> and <a className='italic'>Dribble</a>.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className='text-2xl my-2 font-semibold'>Data & Testing</h3>
                <ul>
                  <li className='py-1 text-left'>
                    <p className='font-semibold'>Databases:</p> Managing data with <a className='italic'>MongoDB</a> and <a className='italic'>PostgreSQL</a>. Experience with <a className='italic'>Supabase</a>.
                  </li>
                  <li className='py-1 text-left'>
                    <p className='font-semibold'>Testing:</p> Stictly adhering to Test Driven Development (TDD) using <a className='italic'>Jest</a> and <a className='italic'>Cypress</a>.
                  </li>
                  <li className='py-1 text-left'>
                    <p className='font-semibold'>CI/CD:</p> Following Agile continuous development principles and setting up CI/CD pipelines with tools such as <a className='italic'>GitHub Actions</a>.
                  </li>
                  <li className='py-1 text-left'>
                    <p className='font-semibold'>AI:</p> Integrating AI features using <a className='italic'>CohereAI</a>, <a className='italic'>TensorFlow.js</a> and <a className='italic'>Python</a>.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className='text-2xl my-2 font-semibold'>Project Management</h3>
                <ul>
                  <li className='py-1 text-left'>
                    <p className='font-semibold'>Agile:</p> Practicing <a className='italic'>Scrum</a> and <a className='italic'>Kanban</a> using <a className='italic'>Trello</a>, and <a className='italic'>Miro</a>.
                  </li>
                  <li className='py-1 text-left'>
                    <p className='font-semibold'>Collaboration:</p> Experienced with pair programming and using team communication platforms such as <a className='italic'>Slack</a>, <a className='italic'>Zoom</a>, and <a className='italic'>Microsoft Teams</a>.
                  </li>
                  <li className='py-1 text-left'>
                    <p className='font-semibold'>Leadership:</p> Leading daily standups and managing interpersonal relationships to ensure strong culture and high quality output on group projects.
                  </li>
                </ul>
              </div>
            </div>




            <div id='icons-container' className="mt-4 flex flex-wrap place-items-center place-content-evenly gap-3 sm:w-[60%]">
              <div className="flex flex-col items-center  gap-4">
                <span className="shrink-0 rounded-lg bg-neutral text-primary opacity-40 hover:opacity-70 transition-all delay-100 ease-in-out hover:scale-125  p-4 my-2">
                  <DiHtml5 className='hover:scale-150 transition-transform ease-in-out text-4xl' />
                </span>
              </div>

              <div className="flex flex-col items-center  gap-4">
                <span className="shrink-0 rounded-lg bg-neutral text-primary opacity-40 hover:opacity-70 transition-all delay-100 ease-in-out hover:scale-125 p-4 my-2">
                  <DiCss3 className='hover:scale-150 transition-transform ease-in-out text-4xl' />
                </span>
              </div>
              <div className="flex flex-col items-center  gap-4">
                <span className="shrink-0 rounded-lg bg-neutral text-primary opacity-40 hover:opacity-70 transition-all delay-100 ease-in-out hover:scale-125 p-4 my-2">
                  <DiJsBadge className='hover:scale-150 transition-transform ease-in-out text-4xl' />
                </span>
              </div>
              <div className="flex flex-col items-center  gap-4">
                <span className="shrink-0 rounded-lg bg-neutral text-primary opacity-40 hover:opacity-70 transition-all delay-100 ease-in-out hover:scale-125 p-4 my-2">
                  <RiNodejsFill className='hover:scale-150 transition-transform ease-in-out text-4xl' />
                </span>
              </div>
              <div className="flex flex-col items-center  gap-4">
                <span className="shrink-0 rounded-lg bg-neutral text-primary opacity-40 hover:opacity-70 transition-all delay-100 ease-in-out hover:scale-125 p-4 my-2">
                  <SiJest className='hover:scale-150 transition-transform ease-in-out text-4xl' />
                </span>
              </div>
              <div className="flex flex-col items-center  gap-4">
                <span className="shrink-0 rounded-lg bg-neutral text-primary opacity-40 hover:opacity-70 transition-all delay-100 ease-in-out hover:scale-125 p-4 my-2">
                  <DiPostgresql className='hover:scale-150 transition-transform ease-in-out text-4xl' />
                </span>
              </div>
              <div className="flex flex-col items-center  gap-4">
                <span className="shrink-0 rounded-lg bg-neutral text-primary opacity-40 hover:opacity-70 transition-all delay-100 ease-in-out hover:scale-125 p-4 my-2">
                  <DiReact className='hover:scale-150 transition-transform ease-in-out text-4xl' />
                </span>

              </div>
              <div className="flex flex-col items-center  gap-4">
                <span className="shrink-0 rounded-lg bg-neutral text-primary opacity-40 hover:opacity-70 transition-all delay-100 ease-in-out hover:scale-125 p-4 my-2">
                  <SiExpress className='hover:scale-150 transition-transform ease-in-out text-4xl' />
                </span>
              </div>
              <div className="flex flex-col items-center  gap-4">
                <span className="shrink-0 rounded-lg bg-neutral text-primary opacity-40 hover:opacity-70 transition-all delay-100 ease-in-out hover:scale-125 p-4 my-2">
                  <SiTypescript className='hover:scale-150 transition-transform ease-in-out text-4xl' />
                </span>
              </div>

              <div className="flex flex-col items-center  gap-4">
                <span className="shrink-0 rounded-lg bg-neutral text-primary opacity-40 hover:opacity-70 transition-all delay-100 ease-in-out hover:scale-125 p-4 my-2">
                  <DiMongodb className='hover:scale-150 transition-transform ease-in-out text-4xl' />
                </span>
              </div>

              <div className="flex flex-col items-center  gap-4">
                <span className="shrink-0 rounded-lg bg-neutral text-primary opacity-40 hover:opacity-70 transition-all delay-100 ease-in-out hover:scale-125 p-4 my-2">
                  <RiTailwindCssFill className='hover:scale-150 transition-transform ease-in-out text-4xl' />
                </span>
              </div>


              <div className="flex flex-col items-center  gap-4">
                <span className="shrink-0 rounded-lg bg-neutral text-primary opacity-40 hover:opacity-70 transition-all delay-100 ease-in-out hover:scale-125 p-4 my-2">
                  <RiNextjsFill className='hover:scale-150 transition-transform ease-in-out text-4xl' />
                </span>
              </div>

              <div className="flex flex-col items-center  gap-4">
                <span className="shrink-0 rounded-lg bg-neutral text-primary opacity-40 hover:opacity-70 transition-all delay-100 ease-in-out hover:scale-125 p-4 my-2">
                  <DiPython className='hover:scale-150 transition-transform ease-in-out text-4xl' />
                </span>

              </div>




            </div>
          </div>
        </section>
      </section>
      <span className="mt-8 flex items-center mx-14">
        <span className="h-px flex-1 bg-primary opacity-65"></span>
        <span className="text-2xl italic font-mono shrink-0 px-4">Projects</span>
        <span className="h-px flex-1 bg-primary opacity-65"></span>
      </span>
      <a id='projects' className='relative -top-24'></a>
      <section id='projects-section' className='flex flex-col items-center'>

        <div className='projects-container w-[80%] flex flex-col lg:flex-row gap-8 mt-6'>
          <article className=" hover:scale-110 transition-all delay-150 ease-in-out relative overflow-hidden rounded-lg shadow  hover:shadow-xl hover:drop-shadow-xlmx-4 ">
            <img
              alt=""
              src={"/assets/api-proj.png"}
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
              <div className="p-4 sm:p-6">
                <time dateTime="2022-10-10" className="block text-xs text-white/90"> 15th April 2024 </time>

                <a href="https://nc-news-solo-kr.onrender.com/api">
                  <h3 className="mt-0.5 text-lg text-white">NC News API</h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                  The Northcoders News (NC News) API is a RESTful back-end interface built to power a reddit-like news app: NC News. The API is built using the Express.js and Node.js frameworks and is powered by a PostgreSQL database in conjunction with ElephantSQL and Render for live hosting.
                </p>
              </div>
            </div>
          </article>

          <article className=" hover:scale-110 transition-all delay-150 ease-in-out relative overflow-hidden rounded-lg shadow  hover:shadow-xl hover:drop-shadow-xlmx-4">
            <img
              alt=""
              src={"/assets/app-proj.png"}
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
              <div className="p-4 sm:p-6">
                <time dateTime="2022-10-10" className="block text-xs text-white/90"> 3rd May 2024 </time>

                <a href="https://nc-news-kroo.netlify.app/">
                  <h3 className="mt-0.5 text-lg text-white">NC News</h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                  Northcoders News (NC News) app is a front-end web app built using the NC-News API I built previously. It is a reddit-like news app which aggregates articles and allows users to cast votes and make comments on articles. NC News is built using Vite + React and styled using Tailwind CSS and hosted on Netlify.
                </p>
              </div>
            </div>
          </article>

          <article className=" hover:scale-110 transition-all delay-150 ease-in-out relative overflow-hidden rounded-lg shadow  hover:shadow-xl hover:drop-shadow-xlmx-4">
            <img
              alt=""
              src={"/assets/app2-proj.png"}
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
              <div className="p-4 sm:p-6">
                <time dateTime="2022-10-10" className="block text-xs text-white/90"> Coming Soon... </time>

                <a href="#">
                  <h3 className="mt-0.5 text-lg text-white">SkillFlash</h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                  SkillFlash is a full-stack project written in Typescript utilsing the React Native framework. Its backend is powered by MongoDB and Express. SkillFlash is an AI-powered flash cards app which aims to help users prepare for interviews for tech roles, intepretting keywords from job descriptions in prompts to generate bespoke revision material.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>
      <span className="mt-14 flex items-center mx-14">
        <span className="h-px flex-1 bg-primary opacity-65"></span>
        <span className="text-2xl italic font-mono shrink-0 px-6">Contact</span>
        <span className="h-px flex-1 bg-primary opacity-65"></span>
      </span>
      <a id='contact' className='relative -top-24'></a>
      <section id='contact-section' className='flex flex-col items-center my-8'>
        <div className='w-[80%] max-w-2xl p-6 bg-base-100 rounded-xl shadow-lg'>

          <form action="https://formspree.io/f/mrgndnnj" method="POST" className='flex flex-col space-y-4'>
            <label className="input input-bordered flex items-center gap-2">
              Name
              <input type="text" required className="grow overflow-hidden placeholder:italic placeholder:opacity-60" placeholder="Joe Bloggs" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Email
              <input type="text" required className="grow  overflow-hidden placeholder:italic placeholder:opacity-60" placeholder="BigShotTechRecruiter@site.com" />
            </label>
            <div>
              <label htmlFor="message" className='block text-lg font-medium hidden'>Message</label>
              <textarea id="message" name="message" rows={4} required placeholder='I want to offer you a wonderful job...' className='placeholder:italic placeholder:opacity-60 resize-none w-full bg-base-100 px-4 py-2 border border-[var(--fallback-bc,oklch(var(--bc)/0.2))] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary'></textarea>
            </div>
            <button type="submit" className='px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors'>Send Message</button>
          </form>
        </div>
        <div className='mt-6 text-center'>
          <p className='text-lg'>Or reach out via:</p>
          <div className='flex justify-center space-x-4 mt-2'>
            <a href='https://github.com/Roodbaraky' target='_blank' rel='noopener noreferrer' className='text-2xl hover:scale-125 transition-all delay-100 ease-in-out text-primary hover:text-primary-dark '><BsGithub /></a>
            <a href='https://www.linkedin.com/in/koorosh-roodbaraky/' target='_blank' rel='noopener noreferrer' className='text-2xl hover:scale-125 transition-all delay-100 ease-in-out text-primary hover:text-primary-dark '><BsLinkedin /></a>
            <a href='https://wa.me/+447513420494?' target='_blank' rel='noopener noreferrer' className='text-2xl hover:scale-125 transition-all delay-100 ease-in-out text-primary hover:text-primary-dark '><BsWhatsapp /></a>
            <a href="tel:+447513420494" target='_blank' rel='noopener noreferrer' className='text-2xl hover:scale-125 transition-all delay-100 ease-in-out text-primary hover:text-primary-dark '><BsTelephoneFill /></a>
            <a href="sms:+447513420494" target='_blank' rel='noopener noreferrer' className='text-2xl hover:scale-125 transition-all delay-100 ease-in-out text-primary hover:text-primary-dark '><BsChatText /></a>

          </div>
        </div>
        <div className='flex flex-col items-center text-xs italic mt-3'>
          <p>kooroshr@hotmail.com</p>
          <p>07513420494</p>
        </div>
      </section>

    </main>
  );
}
