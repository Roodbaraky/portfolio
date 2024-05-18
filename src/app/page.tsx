"use client"
import { useEffect } from 'react'
import { themeChange } from 'theme-change'


export default function Home() {
  useEffect(() => {
    themeChange(false)
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Theme Selectors:</h1>
        <button data-set-theme="" data-act-class="ACTIVECLASS" className='btn rounded-full '>Default</button>
        <button data-set-theme="cupcake" data-act-class="ACTIVECLASS" className='btn rounded-full '>Light</button>
        <button data-set-theme="dark" data-act-class="ACTIVECLASS" className='btn rounded-full '>Dark</button>
        <button data-set-theme="valentine" data-act-class="ACTIVECLASS" className='btn rounded-full '>Kawaii</button>
        <section className='w-80vw h-80vh'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, aut incidunt accusamus, consequatur cumque totam sed ipsam doloremque itaque unde ipsa eos corporis cum laboriosam molestias, ad explicabo nemo ullam.</p>
        </section>
      </div>
    </main>
  );
}
