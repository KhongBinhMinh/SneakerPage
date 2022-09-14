import React from 'react'
import logo from "../image/Full-width.png";

type Props = {}

const Header = (props: Props) => {
    return (
        <header className='box-border'>
            {/* container */}
            <div className='container mx-auto mx-7 px-5 w-460 h-54 flex justify-between '>
                <nav className='flex items-center '>
                    {/* logo */}
                    <div className=' mx-7 px-5'>
                        <img src={logo} alt="" />
                    </div>
                    {/* links */}
                    <ul className='  md:items-center flex justify-between md:h-auto md:static'>
                        <li className='m-6 hover:underline decoration-red-800'><a className='text-slate-600' href="#">ERKEK</a></li>
                        <li className='m-6 hover:underline decoration-red-800'><a className='text-slate-600' href="#">KADIN</a></li>
                        <li className='m-6'><a className='text-gray-400' href="#">ÇOCUK</a></li>
                        <li className='m-6'><a className='text-gray-400' href="#">MARKALAR</a></li>
                    </ul>
                </nav>

                <nav className='flex items-center py-4 px-9 pr-15 divide-x '>
                    <div className='flex py-4 px-12 '>
                        <div className='px-5'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                        </div>
                        <div className='px-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>
                        </div>

                    </div>

                    <ul className='px-12'>
                        <li><a href="#">GİRİŞ YAP / ÜYE OL</a></li>
                    </ul>
                </nav>

            </div>
            <div className='w-460 h-1 bg-slate-300 mb-9 '></div>
        </header>
    )
}

export default Header