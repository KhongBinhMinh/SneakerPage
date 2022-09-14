import React from 'react'
import img35 from "../image/Phone.png"
import img36 from "../image/App Store.png"
import img37 from "../image/Google Play.png"
import img38 from "../image/image 13.png"
import img39 from "../image/image 15.png"
type Props = {}

const Footer = (props: Props) => {
    return (
        <section className='my-8 w-full bg-gray-200 h-96 flex '>
            {/* block1 */}
            <div className='flex flex-col block box-content my-auto  ml-52 mt-9 justify-center '>
                <h1 className='font-bold mb-7 text-lg '>YALI SPOR</h1>
                <span className='mb-2 font-sans text-base '>Hakkımızda</span>
                <span className='mb-2 font-sans text-base '>İnsan Kaynakları</span>
                <span className='mb-2 font-sans text-base '>İletişim</span>
                <span className='mb-2 font-sans text-base '>Site Haritası</span>
                <span className='mb-2 font-sans text-base '>Mağazalar</span>
                <span className='mb-2 font-sans text-base '>Sneaks Cloud Blog</span>
            </div>
            {/* block2 */}
            <div className='flex flex-col block box-content my-auto  ml-36 mt-9 justify-center '>
                <h1 className='font-bold mb-7 text-lg '>BİLGİLENDİRME</h1>
                <span className='mb-2 font-sans text-base '>Güvenli Alışveriş</span>
                <span className='mb-2 font-sans text-base '>Sıkça Sorulan Sorular</span>
                <span className='mb-2 font-sans text-base '>Üyelik Sözleşmesi</span>
                <span className='mb-2 font-sans text-base '>Gizlilik Taahhütü</span>
                <span className='mb-2 font-sans text-base '>Aydınlatma Metni</span>
                <span className='mb-2 font-sans text-base '>Çerez Politikası</span>
                <span className='mb-2 font-sans text-base '>Yardım </span>
            </div>
            {/* block3 */}
            <div className='flex flex-col block box-content my-auto  ml-36 mt-9 justify-center '>
                <h1 className='font-bold mb-7 text-lg '>SİPARİŞ</h1>
                <span className='mb-2 font-sans text-base '>Sipariş Takibi</span>
                <span className='mb-2 font-sans text-base '>Hesap Numaraları</span>
                <span className='mb-2 font-sans text-base '>Teslimat Koşulları</span>
                <span className='mb-2 font-sans text-base '>İade ve İade Çeki Koşulları</span>
            </div>
            {/* block4 */}
            <div className='flex flex-col block box-content my-auto  ml-36 mt-9 justify-center'>
                <div className='flex flex-row'>
                    <img className='w-9' src={img35} alt="" />
                    <div className='flex flex-col ml-2'>
                        <span className='text-sm font-sans'>Müşteri Danışma Hattı</span>
                        <span className='text-base font-semibold'>0 850 222 77 59</span>
                    </div>
                </div>
                <div className='flex flex-row mt-4'>
                    <img className='w-full' src={img36} alt="" />
                    <img className='w-full pr-6 ml-6' src={img37} alt="" />
                </div>
                <div className='flex flex-row mt-24 block box-content relative'>
                    <img className='w-4/5' src={img39} alt="" />
                    <img className='w-4/5 ' src={img38} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Footer