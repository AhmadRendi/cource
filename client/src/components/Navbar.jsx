
import React, { useState } from 'react';
import { ContainerInput } from './Input';
import { ContainerButtonSearch } from './Button';
import {Profile}  from './Logo';
import { Link } from 'react-router-dom';

function NavbarUser() {

    const [isOpen, setIsOpen] = useState(false);
    const [isOpenPhone, setIsOpenPhone] = useState(false);
    const [search, setSearch] = useState("");

    const name = "Ahm Mau paren";

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleSearch = (e) => {
        setSearch(e.target.value);
    }

    const handleSearchSubmit = (e) => {
        console.log(search);
    }

    return (
        <nav className="bg-blue-500 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex gap-8 items-center">
                    <div className="text-white text-2xl font-bold">LearnHub</div>

                    <div className="flex items-center justify-center hidden lg-inline-block lg:flex gap-4">
                        <ContainerInput type="text" placeholder="Search" value={search} onChange={handleSearch} py={0} w={80} />
                        <ContainerButtonSearch variant="bg-white" onClick={handleSearchSubmit}>Search</ContainerButtonSearch>
                    </div>
                </div>
                <div className="hidden md:flex space-x-4 flex items-center">
                        <Link to={"/home"} className='text-white hover:text-gray-300'>Home</Link>
                    <a href="#" className="text-white hover:text-gray-300">About</a>
                    <a href="#" className="text-white hover:text-gray-300">Services</a>
                    <a href="#" className="text-white hover:text-gray-300">Contact</a>
                    <Profile name={name}/>
                </div>
                <div className="md:hidden flex items-center justify-center gap-3">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                    <div className=''>
                        <Profile name={name}/>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden">
                    <div className='flex items-center justify-center'>
                        <ContainerInput type="text" placeholder="Search" value={search} onChange={handleSearch} py={0} />
                        <ContainerButtonSearch variant="bg-red-500" onClick={handleSearchSubmit}>Search</ContainerButtonSearch>
                    </div>
                        <Link to={"/home"} className='block text-white hover:bg-blue-700 p-2'>Home</Link>
                    <a href="#" className="block text-white hover:bg-blue-700 p-2">About</a>
                    <a href="#" className="block text-white hover:bg-blue-700 p-2">Services</a>
                    <a href="#" className="block text-white hover:bg-blue-700 p-2">Contact</a>
                </div>
            )}
        </nav>
    )
}

export { NavbarUser };