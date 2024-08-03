/* eslint-disable no-unused-vars */
import React from 'react'
import './Product.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import product from '../data/product'
import arrow_icon from '../../assets/arrow_icon.svg'
import freeimage1 from "../../assets/freeproduct1.png"
import freeimage2 from "../../assets/freeproduct2.png"
import freeimage3 from "../../assets/freeproduct3.png"

const Product = () => {
  return (
    <>
      <div id='work' className='mywork'>
        <div className="title-box">
          <h1>FL Studio 21 Projects</h1>
          <img src={theme_pattern} alt="" />
        </div>
        {/* </div> */}


        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-4 lg:py-10 mx-auto">

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.map((data, index) => {

              return <a key={index} className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-neutral-700 dark:hover:border-transparent dark:hover:shadow-black/40" href={data.redirect_url}>
                <div className="aspect-w-16 aspect-h-11">
                  <img className="w-full object-cover rounded-xl" src={data.image_url} alt="Image Description" />
                </div>
                <div className="my-6">
                  <h3 className="text-xl font-semibold text-white-800 dark:text-neutral-300 dark:group-hover:text-white">
                    {data.name}
                  </h3>
                  <span className="text-2xl text-white">
                    <span>{data.price}</span>
                  </span>
                  <p className="mt-5 text-gray-200 dark:text-neutral-200">
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

        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
            <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-red-500">FREE DOWNLOAD</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            
            <a className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg focus:outline-none focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl p-5 dark:border-neutral-700 dark:hover:border-transparent dark:hover:shadow-black/40 dark:focus:border-transparent dark:focus:shadow-black/40" href="https://drive.google.com/file/d/1VZj3ogwUy7yOWHeNkONxCU1eM1iAXCn1/view">
              <div className="aspect-w-16 aspect-h-11">
                <img className="w-full object-cover rounded-xl" src={freeimage1} alt="Blog Image" />
              </div>
              <div className="my-6">
                <h3 className="text-xl font-semibold text-red-500">
                  FREE DOWNLOAD
                </h3>
              </div>
              <div className="mt-12 text-center">
                <a className="py-3 px-4 inline-flex items-center gap-x-1 text-sm font-medium rounded-full border border-gray-200 bg-white text-blue-600 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-blue-500 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="https://drive.google.com/file/d/1VZj3ogwUy7yOWHeNkONxCU1eM1iAXCn1/view">
                  Click Here
                  <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                </a>
              </div>
            </a>

            <a className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg focus:outline-none focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl p-5 dark:border-neutral-700 dark:hover:border-transparent dark:hover:shadow-black/40 dark:focus:border-transparent dark:focus:shadow-black/40" href="https://drive.google.com/file/d/14dU6oRUkhWF0Ca9kIyoT7fWaKxtoNvZP/view">
              <div className="aspect-w-16 aspect-h-11">
                <img className="w-full object-cover rounded-xl" src={freeimage2} alt="Blog Image" />
              </div>
              <div className="my-6">
                <h3 className="text-xl font-semibold text-red-500">
                  FREE DOWNLOAD
                </h3>
              </div>
              <div className="mt-12 text-center">
                <a className="py-3 px-4 inline-flex items-center gap-x-1 text-sm font-medium rounded-full border border-gray-200 bg-white text-blue-600 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-blue-500 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="https://drive.google.com/file/d/14dU6oRUkhWF0Ca9kIyoT7fWaKxtoNvZP/view">
                  Click Here
                  <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                </a>
              </div>
            </a>

            <a className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg focus:outline-none focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl p-5 dark:border-neutral-700 dark:hover:border-transparent dark:hover:shadow-black/40 dark:focus:border-transparent dark:focus:shadow-black/40" href="https://drive.google.com/file/d/1qJG3XdupL2tmadmW68X40NW9zG7RT8la/view">
              <div className="aspect-w-16 aspect-h-11">
                <img className="w-full object-cover rounded-xl" src={freeimage3} alt="Blog Image" />
              </div>
              <div className="my-6">
                <h3 className="text-xl font-semibold text-red-500">
                  FREE DOWNLOAD
                </h3>
              </div>
              <div className="mt-12 text-center">
                <a className="py-3 px-4 inline-flex items-center gap-x-1 text-sm font-medium rounded-full border border-gray-200 bg-white text-blue-600 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-blue-500 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="https://drive.google.com/file/d/1qJG3XdupL2tmadmW68X40NW9zG7RT8la/view">
                  Click Here
                  <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                </a>
              </div>
            </a>



          </div>

        </div>

      </div>

    </>

  )
}

export default Product
