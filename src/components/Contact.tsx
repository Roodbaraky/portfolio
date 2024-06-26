import React from 'react'
import { BsChatText, BsGithub, BsLinkedin, BsTelephoneFill, BsWhatsapp } from 'react-icons/bs'

export default function Contact() {
  return (
    <section id="contact-section" className="flex flex-col items-center my-8">
        <div className="w-[80%] max-w-2xl p-6 bg-base-100 rounded-xl shadow-lg">
          <form
            action="https://formspree.io/f/mrgndnnj"
            method="POST"
            className="flex flex-col space-y-4"
          >
            <label className="input input-bordered flex items-center gap-2">
              Name
              <input
                type="text"
                required
                className="grow overflow-hidden placeholder:italic placeholder:opacity-60"
                placeholder="Joe Bloggs"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Email
              <input
                type="text"
                required
                className="grow  overflow-hidden text-ellipsis placeholder:italic placeholder:opacity-60"
                placeholder="BigShotTechRecruiter@site.com"
              />
            </label>
            <div>
              <label
                htmlFor="message"
                className="text-lg font-medium hidden"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder="I want to offer you a wonderful job..."
                className="placeholder:italic placeholder:opacity-60 resize-none w-full bg-base-100 px-4 py-2 border border-[var(--fallback-bc,oklch(var(--bc)/0.2))] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="mt-6 text-center">
          <p className="text-lg">Or reach out via:</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a
              href="https://github.com/Roodbaraky"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:scale-125 transition-all delay-100 ease-in-out text-primary hover:text-primary-dark "
            >
              <BsGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/koorosh-roodbaraky/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:scale-125 transition-all delay-100 ease-in-out text-primary hover:text-primary-dark "
            >
              <BsLinkedin />
            </a>
            <a
              href="https://wa.me/+447513420494?"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:scale-125 transition-all delay-100 ease-in-out text-primary hover:text-primary-dark "
            >
              <BsWhatsapp />
            </a>
            <a
              href="tel:+447513420494"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:scale-125 transition-all delay-100 ease-in-out text-primary hover:text-primary-dark "
            >
              <BsTelephoneFill />
            </a>
            <a
              href="sms:+447513420494"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:scale-125 transition-all delay-100 ease-in-out text-primary hover:text-primary-dark "
            >
              <BsChatText />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center text-xs italic mt-3">
          <p>kooroshr@hotmail.com</p>
          <p>07513420494</p>
        </div>
      </section>
  )
}
