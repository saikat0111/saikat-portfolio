/* eslint-disable no-unused-vars */
import React from 'react'
import './Project.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import project from '../data/project'
import arrow_icon  from '../../assets/arrow_icon.svg'

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
      <div className="title-box">
        <h1>Projects</h1>
        <img src={theme_pattern} alt="" />
      </div>


<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-4 lg:py-10 mx-auto">

<div  className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {project.map((data,index)=>{
          
         return <a key={index} className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-neutral-700 dark:hover:border-transparent dark:hover:shadow-black/40" href= {data.redirect_url}>
          <div className="aspect-w-16 aspect-h-11">
            <img className="w-full object-cover rounded-xl" src={data.image_url} alt="Image Description"/>
          </div>
          <div className="my-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">
            {data.name}
            </h3>
            <p className="mt-5 text-gray-600 dark:text-neutral-400">
             {data.description}
            </p>
          </div>
        </a>
        })}
 </div>
   
   

  
  {/* <div className="mt-12 text-center">
    <a className="py-3 px-4 inline-flex items-center gap-x-1 text-sm font-medium rounded-full border border-gray-200 bg-white text-blue-600 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-blue-500 dark:hover:bg-neutral-800" href="#">
      Read more
      <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
    </a>
  </div> */}

</div>

     
      <div className="mywork-showmore">
        <a href='https://github.com/dibakarbera01'>Show More</a>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  )
}

export default MyWork
