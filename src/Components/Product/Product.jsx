/* eslint-disable no-unused-vars */
import React from 'react'
import './Product.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import project from '../data/project'
import arrow_icon from '../../assets/arrow_icon.svg'

const Product = () => {
  return (
    <div id='work' className='mywork'>
      <div className="title-box">
        <h1>FL Studio 21 Projects</h1>
        <img src={theme_pattern} alt="" />
      </div>


      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-4 lg:py-10 mx-auto">

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {project.map((data, index) => {

            return <a key={index} className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-neutral-700 dark:hover:border-transparent dark:hover:shadow-black/40" href={data.redirect_url}>
              <div className="aspect-w-16 aspect-h-11">
                <img className="w-full object-cover rounded-xl" src={data.image_url} alt="Image Description" />
              </div>
              <div className="my-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">
                  {data.name}
                </h3>
                <span className="text-2xl text-white">
                  <span>$15.00</span>
                </span>
                <p className="mt-5 text-gray-600 dark:text-neutral-400">
                  {data.description}
                </p>
              </div>
              <div className='items-center'>
              <button type="button" className="text-white bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center bg-red-600	bg-red-600 ">
                <svg className="w-3.5 h-3.5 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                  <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                </svg>
                Buy now
              </button>

              </div>
              
            </a>
          })}
        </div>

      </div>

      {/* <div className="mywork-showmore">
        <a href=''>Show More</a>
        <img src={arrow_icon} alt="" />
      </div> */}
    </div>
  )
}

export default Product
