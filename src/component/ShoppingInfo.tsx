import React from 'react'
import img25 from "../image/bi_shield-check.png"
import img26 from "../image/Check Cloudy.png"
import img27 from "../image/Left Circle.png"
import img28 from "../image/Piggy.png"
import img29 from "../image/Home.png"
type Props = {}

const ShoppingInfo = (props: Props) => {
    return (
        <section className='grid grid-cols-5 gap-y-1 gap-x-1  justify-between items-center object-cover object-center aspect-w-1 aspect-h-1 mx-44 mt-6'>
            <div className='box-content pl-3 px-2 py-2 bg-white flex flex-col justify-center text-center'>
                <span className=''>
                    <img className='justify-center mx-auto' src={img25} alt="" />
                </span>
                <h1 className='font-bold font-black font-base'>
                    Güvenli Alışveriş
                </h1>
                <p className=' text-center font-thin text-sm decoration-inherit flex flex-col w-52'>
                    Güvenli alışveriş yapabilmeniz
                    için yalispor.com SSL güvenlik
                    sertifikası kullanılmaktadır
                </p>
            </div>
            <div className='box-content pl-3 px-2 py-2 bg-white flex flex-col justify-center text-center'>
                <span className=''>
                    <img className='justify-center mx-auto' src={img26} alt="" />
                </span>
                <h1 className='font-bold font-black font-base'>
                    %100 Orijinal Ürün
                </h1>
                <p className=' text-center font-thin text-sm decoration-inherit flex flex-col w-52'>
                    Tüm ürünlerimiz %100 orijinal
                    ürün garantisine sahiptir.
                </p>
            </div>
            <div className='box-content pl-3 px-2 py-2 bg-white flex flex-col justify-center text-center'>
                <span className=''>
                    <img className='justify-center mx-auto' src={img27} alt="" />
                </span>
                <h1 className='font-bold font-black font-base'>
                    Ücretsiz İade
                </h1>
                <p className=' text-center font-thin text-sm decoration-inherit flex flex-col w-52'>
                    Tüm ürünlerimiz 15 gün içerisinde ücretsiz iade edebilirsiniz.
                </p>
            </div>
            <div className='box-content pl-3 px-2 py-2 bg-white flex flex-col justify-center text-center'>
                <span className=''>
                    <img className='justify-center mx-auto' src={img28} alt="" />
                </span>
                <h1 className='font-bold font-black font-base'>
                    %3 Parapuan
                </h1>
                <p className=' text-center font-thin text-sm decoration-inherit flex flex-col w-52'>
                    Her alışverişinizde %3
                    değerinde parapuan
                    kazanın.
                </p>
            </div>
            <div className='box-content pl-3 px-2 py-2 bg-white flex flex-col justify-center text-center'>
                <span className=''>
                    <img className='justify-center mx-auto' src={img29} alt="" />
                </span>
                <h1 className='font-bold font-black font-base'>
                    Kapıda Ödeme
                </h1>
                <p className=' text-center font-thin text-sm decoration-inherit flex flex-col w-52'>
                    “Kapıda Ödeme seçeneği ile
                    ödemesini ürün elinize geçince yapabilirsiniz
                </p>
            </div>
        </section>
    )
}

export default ShoppingInfo