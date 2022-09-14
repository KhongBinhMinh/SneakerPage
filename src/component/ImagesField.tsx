import React from 'react'
import img16 from "../image/Rectangle 61.png"
import img17 from "../image/Rectangle 68.png"
import img18 from "../image/Rectangle 69.png"
import img19 from "../image/Rectangle 62.png"
import img20 from "../image/Rectangle 63.png"
import img21 from "../image/Rectangle 67.png"
import img22 from "../image/Rectangle 64.png"
import img23 from "../image/Rectangle 65.png"
import img24 from "../image/Rectangle 66.png"
type Props = {}

const ImagesField = (props: Props) => {
    return (
        <section className='flex justify-between items-center w-max lg:w-full h-full w-full object-cover object-center'>
            <div className="mx-auto max-w-2xl py-5 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8 grid grid-cols-3 mb-8">
                <div className='grid grid-cols-2 gap-3  '>
                    <img className='col-span-2 w-full ' src={img16} alt="" />
                    <img className='w-full' src={img17} alt="" />
                    <img className='w-full' src={img18} alt="" />
                </div>
                <div className='grid grid-cols-1 gap-3 w-full mx-auto  '>
                    <img className='mx-auto ' src={img19} alt="" />
                    <img className='mx-auto ' src={img20} alt="" />
                    <img className='mx-auto ' src={img21} alt="" />
                </div>
                <div className='grid grid-cols-2 gap-3 '>
                    <img className='w-full' src={img22} alt="" />
                    <img className='w-full' src={img23} alt="" />
                    <img className='col-span-2 w-full ' src={img24} alt="" />
                </div>
            </div>
        </section>
    )
}

export default ImagesField