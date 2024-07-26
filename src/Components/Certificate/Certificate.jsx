/* eslint-disable no-unused-vars */
import React from 'react'
import theme_pattern from '../../assets/theme_pattern.svg'
import './Certificate.css'
import certificate from '../data/certificate'
const Certificate = () => {
    return (
        <div id='certificate' className='mywork'>
            <div className="title-box">
                <h1>Certificate</h1>
                <img src={theme_pattern} alt="" />
            </div>

            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-4 lg:py-10 mx-auto">

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certificate.map((data, index) => {

                        return <a key={index} className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-neutral-700 dark:hover:border-transparent dark:hover:shadow-black/40" href={data.redirect_url}>
                            <div className="aspect-w-16 aspect-h-11">
                                <img className="w-full object-cover rounded-xl" src={data.image_url} alt="Image Description" />
                            </div>
                            <div className="my-6">
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">
                                    {data.id}
                                </h3>
                                {/* <p className="mt-5 text-gray-600 dark:text-neutral-400">
                                    {data.description}
                                </p> */}
                            </div>
                        </a>
                    })}
                </div>

            </div>

        </div>
    )
}

export default Certificate