import React from 'react'

import  {portfolios} from '../utils/portfolios'

const Portfolio = () => {

  return (
    <section id='portafolio' className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-full">
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <h2 className='text-4xl font-bold inline border-b-4'>Portafolio</h2>
                {/* <p className='py-6'>Alguno de mis trabajos</p> */}
            </div>
         
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-8'>
            {portfolios.map(({id,src,code,demo,title,main,tech,description}) =>(
                    <article key={id} className='flex flex-col items-center  justify-around  gap-5 shadow-md shadow-gray-600 rounded-lg overflow-hidden hover:shadow-gray-300 '>
                            <a href={demo} target="_blank" rel='noreferrer' className='h-full w-full'>
                                <img src={src}
                                 alt="project"
                                 className='rounded-t-md duration-200 hover:scale-110'
                                  />
                            </a>
                    
                            <div className='flex gap-3'>
                                <div className=''>
                                    <div className='flex flex-col gap-3 text-center py-0 px-4 max-w-screen-lg'>
                                        <h4 className='text-4xl font-semibold shadow-md'>{title}</h4>
                                        <h5 className='text-cyan-400'>Framework: {main}</h5>
                                        <h6 className='text-gray-500'>Tecnologías: {tech}</h6>
                                        <p className='font-semibold'>{description}</p>
                                    </div>
                                    <div className='flex justify-center items-center gap-4 px-4 pb-4 mt-auto text-center'>
                                        <a href={demo} target="_blank" rel="noreferrer" className='w-1/2 px-5 py-3 m-4 font-semibold rounded-md bg-white text-gray-900 duration-300 hover:bg-gray-500 hover:text-white'>
                                        Demo</a>
                                        <a href={code} target="_blank" rel="noreferrer" className='w-1/2 px-5 py-3 m-4 font-semibold rounded-md bg-gray-500 duration-300 hover:bg-white hover:text-gray-900'>Code</a>
                                    </div>
                                </div>
                            </div>
                    </article>
        
            ))}
              
            </div>
        </div>
    </section>
  )
}

export default Portfolio;