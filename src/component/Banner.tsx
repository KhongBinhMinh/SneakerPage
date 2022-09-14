import React from 'react'
import SimpleSlider from './Slide'

type Props = {}

const Banner = (props: Props) => {
    return (
        <section className='justify-between items-center '>
            <div className='justify-between items-center w-max lg:w-full h-full w-full object-cover object-center'><SimpleSlider /></div>
            <ul className='mx-24 px-14 flex md:items-center flex justify-between mt-2  '>
                <li><a className='m-7 items-center justify-between hover:underline decoration-red-700  font-semibold ' href="">VANS</a></li>
                <li><a className='m-7 items-center justify-between hover:underline decoration-red-700 font-semibold ' href="">%40 İNDİRİM</a></li>
                <li><a className='m-7 items-center justify-between hover:underline decoration-red-700 font-semibold ' href="">YENİ GELENLER</a></li>
                <li><a className='m-7 items-center justify-between hover:underline decoration-red-700 font-semibold ' href="">PUMA</a></li>
                <li><a className='m-7 items-center justify-between hover:underline decoration-red-700 font-semibold ' href="">BABALAR GÜNÜ</a></li>
                <li><a className='m-7 items-center justify-between hover:underline decoration-red-700 font-semibold ' href="">KOŞU</a></li>
            </ul>
        </section>
    )
}

export default Banner