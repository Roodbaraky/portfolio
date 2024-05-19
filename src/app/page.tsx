"use client"
import { useEffect, useState } from 'react'
import { themeChange } from 'theme-change'
import { BsFillMoonStarsFill, BsBrightnessHighFill, BsEmojiKissFill, BsSlashCircle, BsList, BsGithub, BsLinkedin, BsFileEarmarkArrowDown } from 'react-icons/bs'
import { DiCss3, DiHtml5, DiJsBadge, DiMongodb, DiPostgresql, DiPython, DiReact } from 'react-icons/di'



export default function Home() {
  const [opacity, setOpacity] = useState('opacity-100')
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
      setOpacity('opacity-100')
    }
    if (scrollPosition > 120) {
      setOpacity('opacity-0')
    }
    if (scrollPosition / prevScrollPosition > 1) {
      setOpacity('opacity-0')
    }
    if (scrollPosition / prevScrollPosition < 1) {
      setOpacity('opacity-100')
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };


  }, [scrollPosition, prevScrollPosition])

  const handleTouchOn = (e) => {
    if (e.target === '<nav>')
      setOpacity('opacity-100')
  }

  return (

    <main onTouchStart={handleTouchOn} className='px-5'>

      <section className='w-100vw h-80vh'>
        <nav  className={`${opacity} top-0 left-0 mt-0 fixed flex justify-between items-center align-middle p-5 mb-12 w-full bg-base-100 rounded-xl  z-40  hover:opacity-100 transition-opacity delay-200 ease-in-out shadow-lg`} >

          <div className="group dropdown dropdown-hover place-self-start pr-8 pb-3">
            <div tabIndex={0} className='btn dropdown dropdown-bottom flex w-fit aspect-square rounded-full self-start ' role='button'>
              <svg className='scale-[220%]' id='hamburger-icon' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>

            </div>

            <ul tabIndex={0} className={`mt-1 bg-base-100 dropdown-content delay-150 menu p-2 shadow  rounded-box w-52 border-dotted`} >
              <li><a href='#about'>About</a></li>
              <li><a href='#skills'>Skills</a></li>
              <li><a href='#projects'>Projects</a></li>
              <li><a href='#contact'>Contact</a></li>

            </ul>

          </div>
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="btn m-1 text-xl rounded-xl  font-light">Koorosh Roodbaraky</div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 text-center">
              <li><a href='https://github.com/Roodbaraky' target='_blank'><BsGithub />GitHub</a></li>
              <li><a href='https://www.linkedin.com/in/koorosh-roodbaraky-0a066a109/' target='_blank'><BsLinkedin />LinkedIn</a></li>
              <li><a href='https://drive.google.com/uc?export=download&id=1_7lyU59cjVRbFqhz1jL21Za0zbSwuNKG' target='_blank'><BsFileEarmarkArrowDown />Download CV</a></li>
            </ul>
          </div>


          <div className='hidden sm:flex flex-nowrap'>
            <button data-set-theme="" data-act-class="ACTIVECLASS" className='btn rounded-full '><BsSlashCircle /></button>
            <button data-set-theme="cupcake" data-act-class="ACTIVECLASS" className='btn rounded-full '><BsBrightnessHighFill /></button>
            <button data-set-theme="dark" data-act-class="ACTIVECLASS" className='btn rounded-full '><BsFillMoonStarsFill /></button>
            <button data-set-theme="valentine" data-act-class="ACTIVECLASS" className='btn rounded-full '><BsEmojiKissFill /></button>
          </div>
        </nav>
      </section>
      <a id='about' className='absolute -top-24'></a>
      <section id='about-section' className='mt-32'>

        <div className='flex flex-col lg:flex-row'>
          <div className='aspect-square lg:w-full self-center lg:items-start bg-gradient-to-b from-current rounded-full max-w-[500px]'>
            <img src={"/assets/claypp2-removebg.png"} className='aspect-square w-96 self-center lg:items-start lg:w-full max-w-[500px]' alt="" />
            </div>
            <article className="flex flex-col items-center lg:items-start mx-5 w-full">
  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-center lg:text-left mb-2 font-bold">
    Hi, I'm <strong className="font-semibold">Koo</strong>
  </h1>

  <h2 className="mb-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center lg:text-left">
    Software Developer
  </h2>

  <div className="max-w-prose text-center lg:text-left space-y-3 lg:space-y-4">
    <p className="text-lg lg:text-xl">
      I've been fascinated with computers since I could crawl!
    </p>
    <p className="text-lg lg:text-xl">
      <em>Slightly</em> more recently, I honed my programming skills at <em className="font-semibold">Northcoders'</em> Software Development Bootcamp, diving deep into mobile and web development.
    </p>
    <p className="text-lg lg:text-xl">
      I thrive on solving problems and love tackling new projects, whether it’s front-end, back-end, or full-stack development. My years of experience in hospitality have given me a unique edge in understanding diverse needs and collaborating effectively to deliver top-notch results.
    </p>
    <p className="text-lg lg:text-xl">
      Let’s turn ideas into reality together!
    </p>
  </div>
</article>


        </div>
      </section>

      <span className="mt-8 flex items-center mx-14">
        <span className="h-px flex-1 bg-primary opacity-65"></span>
        <span className="text-2xl italic font-mono shrink-0 px-6">Skills</span>
        <span className="h-px flex-1 bg-primary opacity-65"></span>
      </span>
      <a id='skills' className='relative -top-24'></a>
      <section id=''>

        <a id='' className='absolute -top-24'></a>
        <section id='skills-container' className="rounded-xl flex items-center w-full">
          <div className=" w-full px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8 flex flex-col items-center ">
            <div id='skills-content' className='flex flex-col sm:grid grid-cols-3 mb-4'>
              <div>
                <h3 className='text-2xl my-2'>Frontend</h3>
                <p className='mr-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, ex sapiente obcaecati placeat, voluptatum illum accusantium adipisci pariatur alias error itaque quo labore autem voluptatibus a commodi, vel nihil voluptatem?</p>
              </div>
              <div>
                <h3 className='text-2xl my-2'>Backend</h3>
                <p className='mr-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat labore vel magnam molestias atque et esse distinctio deleniti! Quis optio, atque delectus expedita dicta a sint blanditiis earum fugiat eius.</p>
              </div>
              <div>
                <h3 className='text-2xl my-2'>FullStack</h3>
                <p className='mr-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In nisi voluptate obcaecati facere doloremque eligendi officiis dolorum, ratione accusantium dignissimos dicta voluptatibus enim magnam necessitatibus expedita minus hic beatae blanditiis.</p>
              </div>
            </div>
            <div id='icons-container' className="mt-4 flex flex-wrap place-items-center place-content-evenly gap-3 sm:w-[45%]">
              <div className="flex flex-col items-center  gap-4">
                <span className="shrink-0 rounded-lg bg-neutral text-primary opacity-40 hover:opacity-70 p-4 my-2">
                  <DiHtml5 className='hover:scale-125 text-4xl' />
                </span>
              </div>

              <div className="flex flex-col items-center  gap-4">
                <span className="shrink-0 rounded-lg bg-neutral text-primary opacity-40 hover:opacity-70 p-4 my-2">
                  <DiCss3 className='hover:scale-125 text-4xl' />
                </span>
              </div>
              <div className="flex flex-col items-center  gap-4">
                <span className="shrink-0 rounded-lg bg-neutral text-primary opacity-40 hover:opacity-70 p-4 my-2">
                  <DiJsBadge className='hover:scale-125 text-4xl' />
                </span>
              </div>
              <div className="flex flex-col items-center  gap-4">
                <span className="shrink-0 rounded-lg bg-neutral text-primary opacity-40 hover:opacity-70 p-4 my-2">
                  <DiReact className='hover:scale-125 text-4xl' />
                </span>

              </div>

              <div className="flex flex-col items-center  gap-4">
                <span className="shrink-0 rounded-lg bg-neutral text-primary opacity-40 hover:opacity-70 p-4 my-2">
                  <DiPython className='hover:scale-125 text-4xl' />
                </span>

              </div>
              <div className="flex flex-col items-center  gap-4">
                <span className="shrink-0 rounded-lg bg-neutral text-primary opacity-40 hover:opacity-70 p-4 my-2">
                  <DiMongodb className='hover:scale-125 text-4xl' />
                </span>
              </div>
              <div className="flex flex-col items-center  gap-4">
                <span className="shrink-0 rounded-lg bg-neutral text-primary opacity-40 hover:opacity-70 p-4 my-2">
                  <DiPostgresql className='hover:scale-125 text-4xl' />
                </span>

              </div>

              <div className="flex flex-col items-center  gap-4">
                <span className="shrink-0 rounded-lg bg-neutral text-primary opacity-40 hover:opacity-70 p-4 w-[68px] h-[68px] my-2">
                  <svg className='text-5xl scale-[140%] hover:scale-[165%]' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48">
                    <path d="M41,8H7C6.447,8,6,8.448,6,9v32c0,1.654,1.346,3,3,3h30c1.654,0,3-1.346,3-3V9C42,8.448,41.553,8,41,8z"></path><path fill="currentColor" d="M39,41H9c-1.105,0-2-0.895-2-2V7h34v32C41,40.105,40.105,41,39,41z"></path><path d="M39,42H9c-1.654,0-3-1.346-3-3V7c0-0.553,0.448-1,1-1h34c0.552,0,1,0.447,1,1v32C42,40.654,40.654,42,39,42z M8,8v31	c0,0.552,0.449,1,1,1h30c0.551,0,1-0.448,1-1V8H8z"></path><polygon points="26.837,23 15,23 15,25.72 19.246,25.72 19.246,38 22.609,38 22.609,25.72 26.837,25.72"></polygon><path d="M37.283,26.403c0,0-1.595-0.993-3.398-0.993c-1.803,0-2.452,0.8-2.452,1.655c0,2.207,6.588,1.986,6.588,6.427 c0,6.841-10.044,3.807-10.044,3.807v-3.282c0,0,1.921,1.352,4.224,1.352s2.216-1.407,2.216-1.6c0-2.041-6.529-2.041-6.529-6.565 c0-6.151,9.512-3.724,9.512-3.724L37.283,26.403z"></path>
                  </svg>
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

        <div className='projects-container w-[80%]'>
          <article className="my-5 relative overflow-hidden rounded-lg shadow transition hover:shadow-xl hover:drop-shadow-xl">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
              <div className="p-4 sm:p-6">
                <time dateTime="2022-10-10" className="block text-xs text-white/90"> 10th Oct 2022 </time>

                <a href="#">
                  <h3 className="mt-0.5 text-lg text-white">How to position your furniture for positivity</h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
                  pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                  quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius
                  atque dignissimos. Molestias explicabo corporis voluptatem?
                </p>
              </div>
            </div>
          </article>

          <article className="my-5 relative overflow-hidden rounded-lg shadow transition hover:shadow-xl hover:drop-shadow-xl">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
              <div className="p-4 sm:p-6">
                <time dateTime="2022-10-10" className="block text-xs text-white/90"> 10th Oct 2022 </time>

                <a href="#">
                  <h3 className="mt-0.5 text-lg text-white">How to position your furniture for positivity</h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
                  pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                  quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius
                  atque dignissimos. Molestias explicabo corporis voluptatem?
                </p>
              </div>
            </div>
          </article>

          <article className="my-5 relative overflow-hidden rounded-lg shadow transition hover:shadow-xl hover:drop-shadow-xl">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
              <div className="p-4 sm:p-6">
                <time dateTime="2022-10-10" className="block text-xs text-white/90"> 10th Oct 2022 </time>

                <a href="#">
                  <h3 className="mt-0.5 text-lg text-white">How to position your furniture for positivity</h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
                  pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                  quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius
                  atque dignissimos. Molestias explicabo corporis voluptatem?
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>
      <span className="mt-8 flex items-center mx-14">
        <span className="h-px flex-1 bg-primary opacity-65"></span>
        <span className="text-2xl italic font-mono shrink-0 px-6">Contact</span>
        <span className="h-px flex-1 bg-primary opacity-65"></span>
      </span>
      <a id='contact' className='relative -top-24'></a>
      <section id='contact-section'>


      </section>
    </main>
  );
}
