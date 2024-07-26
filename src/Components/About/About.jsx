// eslint-disable-next-line no-unused-vars
import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'

import about_pic from "../../assets/about1.png"



const About = () => {
  return (
    <>
      <div id='about' className='about'>
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

      </div>


    </>

  )
}

export default About
