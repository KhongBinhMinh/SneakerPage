import React, { Component } from "react";
import Slider from "react-slick";
import img1 from "../image/image 9.png"

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            TimeRanges: 1000,
            speed: 700,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div className="justify-between items-center w-max lg:w-full h-full w-full object-cover object-center">
                <Slider {...settings}>
                    <div className="justify-between items-center w-max lg:w-full h-full w-full object-cover object-center">
                        <img className="justify-between items-center w-max lg:w-full h-full w-full object-cover object-center" src={img1} alt="" />
                    </div>
                    <div>
                        <img className="justify-between items-center w-max lg:w-full h-full w-full object-cover object-center" src={img1} alt="" />
                    </div>
                    <div>
                        <img className="justify-between items-center w-max lg:w-full h-full w-full object-cover object-center" src={img1} alt="" />
                    </div>
                    <div>
                        <img className="justify-between items-center w-max lg:w-full h-full w-full object-cover object-center" src={img1} alt="" />
                    </div>
                    <div>
                        <img className="justify-between items-center w-max lg:w-full h-full w-full object-cover object-center" src={img1} alt="" />
                    </div>
                </Slider>
            </div>
        );
    }
}