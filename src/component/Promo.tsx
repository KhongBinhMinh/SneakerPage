import React from 'react'
import SlideProduct3 from './SlideProduct3'
import img11 from "../image/Rectangle 56.png"
import img12 from "../image/Rectangle 57.png"
import img13 from "../image/Rectangle 58.png"
import img14 from "../image/Rectangle 59.png"
type Props = {}

const Promo = (props: Props) => {
    return (
        <section className='justify-between items-center w-max lg:w-full h-full w-full object-cover object-center relative mb-8'>
            <div className="mx-auto max-w-2xl py-10 px-4 sm:py-1 sm:px-6 lg:max-w-7xl lg:px-8 grid grid-cols-3 mb-8">
                <div><img className='w-full ' src={img11} alt="" /></div>
                <div><img className='w-full ml-2' src={img12} alt="" /></div>
                <div className='ml-4 grid '>
                    <div><img className='w-full  ' src={img13} alt="" /></div>
                    <div className=''><img className='w-full mt-10' src={img14} alt="" /></div>
                </div>
            </div>
            <div className='overflow-visible absolute -bottom-80 left-40'>
                <SlideProduct3 />
            </div>
        </section>
    )
}

export default Promo