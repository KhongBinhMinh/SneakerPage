import React from 'react'
import img30 from "../image/Facebook.png"
import img31 from "../image/Youtube.png"
import img32 from "../image/Twitter.png"
import img33 from "../image/Instagram.png"
import img34 from "../image/Pinterest.png"
type Props = {}

const HeadFooter = (props: Props) => {
    return (
        <section className='my-8 w-full bg-gray-200 h-20 flex flex-initial '>
            <div className=' box-content pl-3 px-2 py-2 flex flex-col justify-center flex-initial '>
                <div className='box-content my-auto mt-3 w-44 ml-48'>
                    <span className='font-bold'>E-BÜLTEN</span>
                    <p className='font-thin text-sm'>Yeniliklerden haberdar olun</p>
                </div>
            </div>
            <div className='flex  box-content w-full ml-6 pl-3 px-2 text-center '>
                <input className='h-11 w-96 my-auto flex-initial' type="text" value="" placeholder='E - Mail adresinizi Yazın' />
                <div className='   bg-cyan-300 h-11 my-auto w-40  '>
                    <button className='box-content h-11 my-auto text-slate-100 font-light text-2xl w-38  '>KAYDET</button>
                </div>
            </div>
            <div className='flex my-auto h-20 mr-96 items-center'>
                <img className='h-11 mx-2' src={img30} alt="" />
                <img className='h-11 mx-2' src={img31} alt="" />
                <img className='h-11 mx-2' src={img32} alt="" />
                <img className='h-11 mx-2' src={img33} alt="" />
                <img className='h-11 mx-2' src={img34} alt="" />
            </div>
        </section>
    )
}

export default HeadFooter