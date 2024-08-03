// eslint-disable-next-line no-unused-vars
import React from 'react'
import './About.css'
// import theme_pattern from '../../assets/theme_pattern.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'


import about_pic from "../../assets/about1.png"



const About = () => {
  return (
    <>
      {/* <div id='about' className='about'>
        <div className="title-box">
          <h1>About me</h1>
          <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
          <div className="about-right">
            <div className="about-para">
              <p>Welcome to our online e-commerce store! We are thrilled to have you here and offer you a wide range of high-quality products at competitive prices. Our goal is to provide you with an easy and enjoyable shopping experience from the comfort of your own home.</p>

            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
          <div>
            <img className="rounded-full w-96 h-96" src={about_pic} alt="Features Image"/>
          </div>
          <div className="mt-5 sm:mt-10 lg:mt-0">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-2 md:space-y-4">
                <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-neutral-100">
                Why Buy From Us?
                </h2>
                <p className="text-gray-500 dark:text-neutral-200">
                Jumpstart your music production with instant project file downloads. Shop securely through our encrypted payment gateway. Enjoy a satisfaction guarantee—if you&apos;re not happy, we&apos;ll make it right. Access our digital store globally with just a click.
                </p>
              </div>
              <ul className="space-y-2 sm:space-y-4">
                <li className="flex gap-x-3">
                  <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                    <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  </span>
                  <div className="grow">
                    <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-300">
                      <span className="font-bold">Instant </span> Inspiration
                    </span>
                  </div>
                </li>

                <li className="flex gap-x-3">
                  <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                    <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  </span>
                  <div className="grow">
                    <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-300">
                    Secure  <span className="font-bold">Checkout</span>
                    </span>
                  </div>
                </li>
                <li className="flex gap-x-3">
                  <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                    <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  </span>
                  <div className="grow">
                    <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-300">
                    Global Access
                    </span>
                  </div>
                </li>

                <li className="flex gap-x-3">
                  <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                    <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  </span>
                  <div className="grow">
                    <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-300">
                    Satisfaction Guarantee
                    </span>
                  </div>
                </li>
              </ul>

            </div>
          </div>

        </div>

      </div> */}

      <div className="bg-neutral-900">
        <div className="max-w-5xl px-4 xl:px-0 py-10 lg:pt-20 lg:pb-20 mx-auto">
          <div className="max-w-3xl mb-10 lg:mb-14">
            <h2 className="text-white font-semibold text-2xl md:text-4xl md:leading-tight">About Us</h2>
            <p className="mt-1 text-white">Welcome to our online e-commerce store! We are thrilled to have you here and offer you a wide range of high-quality products at competitive prices. Our goal is to provide you with an easy and enjoyable shopping experience from the comfort of your own home.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center">
            <div className="aspect-w-16 aspect-h-9 lg:aspect-none">
              <img className="w-full object-cover rounded-xl" src={about_pic} alt="Image Description" />
            </div>
            <div>
              <div className="mb-4">
                <h2 className="text-2xl font-medium  text-[#ff0]">
                Why Buy From Us?
                </h2>
              </div>
              <div className="flex gap-x-5 ms-1">

                <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                  <div className="relative z-10 size-8 flex justify-center items-center">
                    <span className="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#ff0] font-semibold text-xs uppercase rounded-full">
                      1
                    </span>
                  </div>
                </div>
                <div className="grow pt-0.5 pb-8 sm:pb-12">
                  <p className="text-sm lg:text-base text-neutral-200">
                    <span className="text-red-700 dark:text-[#ff0]">Instant Inspiration: </span>
                    Download project files instantly and jumpstart your music production with fresh ideas.
                  </p>
                </div>
              </div>
              <div className="flex gap-x-5 ms-1">

                <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                  <div className="relative z-10 size-8 flex justify-center items-center">
                    <span className="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#ff0] font-semibold text-xs uppercase rounded-full">
                      2
                    </span>
                  </div>
                </div>
                <div className="grow pt-0.5 pb-8 sm:pb-12">
                  <p className="text-sm lg:text-base text-neutral-200">
                    <span className="text-red-700 dark:text-[#ff0]">Secure Checkout: </span>
                    Shop with confidence through our encrypted payment gateway.
                  </p>
                </div>
              </div>
              <div className="flex gap-x-5 ms-1">
                <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                  <div className="relative z-10 size-8 flex justify-center items-center">
                    <span className="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#ff0] font-semibold text-xs uppercase rounded-full">
                      3
                    </span>
                  </div>
                </div>
                <div className="grow pt-0.5 pb-8 sm:pb-12">
                  <p className="text-sm md:text-base text-neutral-200">
                    <span className="text-red-700 dark:text-[#ff0]">Global Access: </span>
                    If you&apos;re not happy with your purchase, we&apos;ll make it right.

                  </p>
                </div>
              </div>
              <div className="flex gap-x-5 ms-1">

                <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                  <div className="relative z-10 size-8 flex justify-center items-center">
                    <span className="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#ff0] font-semibold text-xs uppercase rounded-full">
                      4
                    </span>
                  </div>
                </div>
                <div className="grow pt-0.5 pb-8 sm:pb-12">
                  <p className="text-sm md:text-base text-neutral-200">
                    <span className="text-red-700 dark:text-[#ff0]">Satisfaction Guarantee: </span>
                    Wherever you are, our digital store is just a click away.
                  </p>
                </div>
              </div>
              <AnchorLink  offset={50} href='#contact'>
              <div className="group inline-flex items-center gap-x-2 py-2 px-3 bg-[#ff0] font-medium text-sm text-neutral-800 rounded-full focus:outline-none" href="/contact">
             
                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path><path className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-hover:delay-100 transition" d="M14.05 2a9 9 0 0 1 8 7.94"></path><path className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition" d="M14.05 6A5 5 0 0 1 18 10"></path></svg>
                Schedule a call
                
              </div>
              </AnchorLink>
            </div>

          </div>
        </div>




      </div>


    </>

  )
}

export default About
