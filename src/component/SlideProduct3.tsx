
import React, { useEffect, useState } from 'react'
import { useFormState } from 'react-hook-form';
import Slider from 'react-slick';
import img1 from "../image/Rectangle 7.png"
// import "../css/slide.css"
type Props = {}

const SlideProducts3 = (props: Props) => {
    const [products, setProducts] = useState([])
    const apiGet = () => {

        fetch('https://api.escuelajs.co/api/v1/products')
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setProducts(json);
            })
    }
    useEffect(() => {
        apiGet();
    }, [])
    const settings = {
        // dots: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (


        <div className="justify-between items-center w-max lg:w-full h-full w-full object-cover object-center">


            <div className="" >
                <div className="-mx-10 max-w-2xl py-9 mb-5 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <Slider {...settings}>
                        {products.map((item: any) => (
                            <div className='group relative px-5'>
                                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                                    <img src={item.images} alt="Front of men's Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-sm text-gray-500">
                                            <a href="#">

                                                <span aria-hidden="true" className="absolute inset-0" />
                                                {item.title}
                                            </a>
                                        </h3>
                                        <p className="mt-1 text-sm font-bold text-gray-900">{item.price}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>


        </div>
    )
}

export default SlideProducts3