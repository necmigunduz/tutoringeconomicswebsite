import React from 'react'
import Logo from '../assets/Logo.png'
function Header() {
    return (
        <header className="shadow-md fixed top-0 left-0 w-full z-50 bg-fuchsia-100">
            <div className="max-w-6xl mx-auto flex items-center justify-around gap-10">
                <img src={Logo} alt="AP Economics" className='h-48 p-4' />
                <div>
                    <h1 className="text-2xl font-bold italic text-slate-900">Learn Economics and Statistics</h1>
                    <p>with <strong className="text-indigo-900">Necmi Gunduz</strong></p>
                </div>
                <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
                    <a href="#about" className="hover:text-indigo-600 transition">About Me</a>
                    <a href="#services" className="hover:text-indigo-600 transition">Services</a>
                    <a href="#contact" className="hover:text-indigo-600 transition">Contact</a>
                </nav>

                {/* Call to Action */}
                <a
                    href="#contact"
                    className="hidden md:inline-block bg-indigo-600 text-white px-4 py-2 rounded-xl shadow hover:bg-indigo-700 transition"
                >
                    Book a Lesson
                </a>
            </div>
        </header>
    );
}

export default Header;