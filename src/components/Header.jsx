import React from 'react'
import Logo from '../assets/Logo.png'

function Header() {
    return (
        <header className="shadow-md fixed top-0 left-0 w-full z-50 bg-fuchsia-100">
            <div className="w-full flex items-center justify-around px-8">
                <img src={Logo} alt="AP Economics" className='h-48 lg:h-56 md:h-40 sm:h-32 max-sm:h-24' />
                
                <div>
                    <h1 className="text-4xl md:text-2xl sm:text-lg max-sm:text-base font-bold italic text-slate-900">Learn Economics and Statistics</h1>
                    <p className='text-3xl md:text-2xl sm:text-lg max-sm:text-base'>with <strong className="text-5xl md:text-2xl sm:text-lg max-sm:text-base text-indigo-900">Necmi Gunduz</strong></p>
                </div>
                <nav className="hidden md:flex space-x-8 text-gray-700 font-medium text-2xl">
                    <a href="#about" className="hover:text-indigo-600 transition">About Me</a>
                    <a href="#services" className="hover:text-indigo-600 transition">Services</a>
                    <a href="#contact" className="hover:text-indigo-600 transition">Contact</a>
                </nav>

                {/* Call to Action */}
                <a
                    href="#contact"
                    className="hidden md:inline-block ml-2 bg-indigo-600 text-white px-4 py-2 rounded-xl shadow hover:bg-indigo-700 transition"
                >
                    Book a Lesson
                </a>
            </div>
        </header>
    );
}

export default Header;