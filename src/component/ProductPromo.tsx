import React from 'react'
import img3 from "../image/Rectangle 10.png"
import img4 from "../image/Rectangle 11.png"
import img5 from "../image/Rectangle 13.png"

type Props = {}

const ProductPromo = (props: Props) => {
    return (
        <section className=' justify-between relative'>
            <div className='flex justify-between px-24 '>
                <div className=" object-cover object-center  ">
                    <img className='ml-10 w-full h-full' src={img3} alt="" />
                </div>
                <div className=" object-cover object-center px-5">
                    <img className='mx-6 w-full h-full' src={img4} alt="" />
                </div>
                <div className=" object-cover object-center px-5 ">
                    <img className='mr-10 w-full h-full' src={img5} alt="" />
                </div>
            </div>
            <div className='box-content pl-3 px-2 py-2 bg-white flex flex-col absolute left-80 bottom-16'>
                <span className=''>
                    LOREM IPSUM
                </span>
                <h1 className='font-bold font-black'>
                    Yazın Trendlerini Keşfet
                </h1>
                <p className=' decoration-inherit flex flex-col w-96'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Egestas interdum a senectus varius elit fringilla eu.
                    Risus dui, odio suspendisse amet id augue duis et donec.
                </p>
            </div>
        </section>
    )
}

export default ProductPromo