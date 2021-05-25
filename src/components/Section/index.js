import React from 'react'
import { workList } from '../../assets/data'

const Section = () => {
    return (
        <section className='min-h-screen bg-white xl:px-40 py-6 space-y-4 px-14'>
            <h3 className='text-xl font-bold'>Featured Works</h3>
            <div className='grid xl:grid-cols-2 w-full grid-cols-1 xl:gap-x-8 gap-y-10'>
                {workList.map(item => (
                    <div className='w-full space-y-6' key={item.id}>
                        <img src={item.imageURL} alt='img-works' className='rounded-md' />
                        <div className='space-y-4'>
                            <h4 className='text-2xl font-bold'>{item.title}</h4>
                            <div className='flex items-center space-x-4'>
                                <div className=' bg-blue-900 text-white text-base rounded-full py-1 px-4'>
                                    {item.release}
                                </div>
                                <p>{item.platform}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Section
