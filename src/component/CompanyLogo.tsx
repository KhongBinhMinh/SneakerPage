import React from 'react'
import logo1 from "../image/image 5.png"
import logo2 from "../image/image 6.png"
import logo3 from "../image/image 7.png"
import logo4 from "../image/ammour.png"
import logo5 from "../image/image 8.png"
import logo6 from "../image/converse.png"

type Props = {}

const CompanyLogo = (props: Props) => {
    return (
        <section className='grid grid-cols-7 gap-y-1 gap-x-1  justify-between items-center object-cover object-center aspect-w-1 aspect-h-1 mx-44 mt-6 '>
            <div className=' justify-between items-center object-cover object-center'>
                <img className='justify-between items-center object-cover object-center  mx-auto w-3/5' src={logo1} alt="" />
            </div>
            <div>
                <img className='justify-between items-center object-cover object-center  mx-auto w-3/5' src={logo2} alt="" />
            </div>
            <div>
                <img className='justify-between items-center object-cover object-center mx-auto w-3/5' src={logo3} alt="" />
            </div>
            <div>
                <img className='justify-between items-center object-cover object-center  mx-auto w-3/5' src={logo4} alt="" />
            </div>
            <div>
                <img className='justify-between items-center object-cover object-center  mx-auto w-3/5' src={logo5} alt="" />
            </div>
            <div>
                <img className='justify-between items-center object-cover object-center  mx-auto w-3/5' src={logo6} alt="" />
            </div>
            <div>
                <img className='justify-between items-center object-cover object-center  mx-auto w-3/5' src={logo5} alt="" />
            </div>
        </section>
    )
}

export default CompanyLogo