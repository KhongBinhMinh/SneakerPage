import React from 'react'
import img2 from "../image/image 2.png"
type Props = {}

const SlideImage = (props: Props) => {
    return (
        <section className='mt-10 relative'>
            <div className=''>
                <img className='w-full' src={img2} alt="" />
            </div>
            <div className='border-collapse bg-red-600 w-40 h-12 text-center rounded absolute right-56 bottom-9'>
                <button className='px-4 py-3 font-semibold text-center text-slate-50 ' >HEMEN KEŞFET</button>
            </div>
        </section>
    )
}

export default SlideImage