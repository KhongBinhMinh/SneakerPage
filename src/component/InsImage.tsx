import React from 'react'
import img15 from "../image/Frame 167.png"
type Props = {}

const InsImage = (props: Props) => {
    return (
        <section className='mt-64 mx-auto'>
            <div>
                <img className='mx-auto' src={img15} alt="" />
            </div>
            <div className=''>
                <p className='mx-auto text-center font-thin font-sans text-sm'>Tarzını oluştur, etiketle ve paylaş...</p>
            </div>
        </section>
    )
}

export default InsImage