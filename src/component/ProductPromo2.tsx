import React from 'react'
import img6 from "../image/Rectangle 16.png"
import img7 from "../image/Rectangle 18.png"
import img8 from "../image/Rectangle 19.png"
import img9 from "../image/Rectangle 20.png"
import img10 from "../image/Rectangle 21.png"
type Props = {}

const ProductPromo2 = (props: Props) => {
    return (
        <section className='flex flex-col'>
            <div className='grid grid-cols-3  gap-1  justify-between items-center object-cover object-center mt-10 pr-24 '>
                <div className=''>
                    <img className='items-center justify-between ml-72 w-3/5 h-2/5' src={img6} alt="" />
                </div>
                <div>
                    <img className='items-center justify-between mx-36 w-3/5 h-2/5' src={img7} alt="" />
                </div>
                <div className=''>
                    <img className='items-center justify-between  w-3/5 h-2/5' src={img8} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-2 gap-1 mt-5'>
                <div>
                    <img className='items-center justify-between ml-72 w-3/5' src={img9} alt="" />
                </div>
                <div>
                    <img className='items-center justify-between ml-5 w-3/5' src={img10} alt="" />
                </div>
            </div>
        </section>
    )
}

export default ProductPromo2