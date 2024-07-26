// eslint-disable-next-line no-unused-vars
import React from 'react'




const Hero = () => {

  return (
    <div id='home' className='hero'>
     <div className="relative overflow-hidden">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="max-w-2xl text-center mx-auto">
            <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl dark:text-white">Saikat Ray <span className="text-blue-600">Music</span></h1>
            <p className="mt-3 text-lg text-gray-800 dark:text-neutral-400">Welcome to our online e-commerce store! </p>
          </div>

          <div className="mt-10 relative max-w-5xl mx-auto">
            <div className="w-full object-cover h-96 sm:h-[480px] bg-[url('https://lh3.googleusercontent.com/PDGDbjPwEOEJqCAmkLuss-cKghxoLB2bHCc1E6mea1A11xcaeEkmFjp1BGrwD4HJ01lJRTcaoHimCwdQCQoUpoA=w16383')] bg-no-repeat bg-center bg-cover rounded-xl"></div>

            <div className="absolute inset-0 size-full">
              <div className="flex flex-col justify-center items-center size-full">
                <a className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="https://youtu.be/XHphAzz8eyg?si=U1ypiMqNydgDjyxB">
                  <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3" /></svg>
                  Play the overview
                </a>
              </div>
            </div>

            <div className="absolute bottom-12 -start-20 -z-[1] size-48 bg-gradient-to-b from-orange-500 to-white p-px rounded-lg dark:to-neutral-900">
              <div className="bg-white size-48 rounded-lg dark:bg-neutral-900"></div>
            </div>

            <div className="absolute -top-12 -end-20 -z-[1] size-48 bg-gradient-to-t from-blue-600 to-cyan-400 p-px rounded-full">
              <div className="bg-white size-48 rounded-full dark:bg-neutral-900"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
