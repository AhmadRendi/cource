import React from "react";
import profile from "../assets/img/image.png";
import { useState } from 'react';
import { setNameToDisplay } from "../service/Service";
import { Link } from "react-router-dom";

function LogoGoogle() {
    return (
        <a href="" className="hover:bg-red-500 hover:text-white text-red-500 w-12 h-12 border border-1 flex justify-center items-center transition-colors rounded-lg">
            <svg className="w-6 h-6 inline-block" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 
                    0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 
                    3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z">
                </path>
            </svg>
        </a>
    );
}


function LogoApple() {
    return (
        <a href="" className="hover:bg-blue-500 hover:text-white w-12 h-12 border border-1 flex justify-center items-center transition-colors rounded-lg">
            <svg className="w-6 h-6 inline-block" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 
                    11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 
                    0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 
                    2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 
                    1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z">
                </path>
            </svg>
        </a>
    );
}

function LogoFacebook() {
    return (
        <a href="" className="hover:bg-blue-500 hover:text-white text-blue-500 w-12 h-12 border border-1 flex justify-center items-center transition-colors rounded-lg">
            <svg className="w-6 h-6 inline-block" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 
                    7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 
                    1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z">
                </path>
            </svg>
        </a>
    );
}

function IconVideo({ sizeWidth = "w-6", sizeHeight = "h-6", variant = "text-gray-700" }){

    return (
        <svg
            className={`${sizeWidth} ${sizeHeight} ${variant}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
        >
            <path d="M21 3H3c-1.11 0-2 .89-2 2v12a2 2 0 002 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5a2 2 0 00-2-2zm0 14H3V5h18v12zm-5-6l-7 4V7l7 4z"></path>

        </svg>
    )
}

function IconKeBawah({ sizeHeight = "h-6", sizeWidth = "w-6" }) {
    return (
        <div>
            <svg
                className={`${sizeWidth} ${sizeHeight} text-gray-700`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
            >
                <path d="M16.59 8.59L12 13.17 7.41 8.59 6 
                10l6 6 6-6-1.41-1.41z"
            ></path>
            </svg>
        </div>
    )
}

function IconKeAtas({ sizeHeight = "h-6", sizeWidth = "w-6" }) {
    return (
        <div>
            <svg
                className={`${sizeWidth} ${sizeHeight} text-gray-700`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
            >
                <path 
                    fillRule="evenodd" 
                    d="M16.59 12.59L15.17 14L10 8.83L4.83 14L3.41 
                    12.59L10 6z" 
                    clipRule="evenodd"
                ></path>
            </svg>
        </div>
    )
}

function IconLove({ sizeHeight = "h-6", sizeWidth = "w-6", variant}) {
    return (
        <div>
            <svg
                className=
                    {`${sizeWidth}
                    ${sizeHeight}
                    ${variant ? "text-white" : "text-red-500"}
                    `}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
            >
                <path  d="M12 21.35l-1.45-1.32C5.4 15.36 
                    2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 
                    3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 
                    22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                    stroke="black"
                ></path>
            </svg>
        </div>
    )
}

function IconArtikel({ sizeHeight = "h-6", sizeWidth = "w-6", variant}) {
    return (
        <div>
            <svg
                className=
                    {`${sizeWidth}
                    ${sizeHeight}
                    ${variant}
                    `}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
            >
               <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 
                    1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zM6 
                    20V4h7v5h5v11H6z"
                ></path>
            </svg>
        </div>
    )
}

function IconPiala ({ sizeHeight = "h-6", sizeWidth = "w-6", variant}) {
    return (
        <div>
            <svg
                className=
                    {`${sizeWidth}
                    ${sizeHeight}
                    ${variant}
                    `}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
            >
               <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94A5.01 5.01 0 0011 15.9V19H7v2h10v-2h-4v-3.1a5.01 5.01 0 003.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm7 6c-1.65 0-3-1.35-3-3V5h6v6c0 1.65-1.35 3-3 3zm7-6c0 1.3-.84 2.4-2 2.82V7h2v1z"></path>
            </svg>
        </div>
    )
}

function IconPhone({ sizeHeight = "h-6", sizeWidth = "w-6", variant}) {
    return (
        <div>
            <svg
                className=
                    {`${sizeWidth}
                    ${sizeHeight}
                    ${variant}
                    `}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
            >
               <path 
                    d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 
                    1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 
                    19H7V5h10v14z"
                ></path>
            </svg>
        </div>
    )
}

function IconAccess ({ sizeHeight = "h-6", sizeWidth = "w-6", variant}) {
    return (
        <div>
           <svg
                className=
                    {`${sizeWidth}
                    ${sizeHeight}
                    ${variant}
                    `}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
            >
               <path d="M18.6 6.62c-1.44 0-2.8.56-3.77 1.53L12 10.66 10.48 12h.01L7.8 14.39c-.64.64-1.49.99-2.4.99-1.87 0-3.39-1.51-3.39-3.38S3.53 8.62 5.4 8.62c.91 0 1.76.35 2.44 1.03l1.13 1 1.51-1.34L9.22 8.2A5.37 5.37 0 005.4 6.62C2.42 6.62 0 9.04 0 12s2.42 5.38 5.4 5.38c1.44 0 2.8-.56 3.77-1.53l2.83-2.5.01.01L13.52 12h-.01l2.69-2.39c.64-.64 1.49-.99 2.4-.99 1.87 0 3.39 1.51 3.39 3.38s-1.52 3.38-3.39 3.38c-.9 0-1.76-.35-2.44-1.03l-1.14-1.01-1.51 1.34 1.27 1.12a5.386 5.386 0 003.82 1.57c2.98 0 5.4-2.41 5.4-5.38s-2.42-5.37-5.4-5.37z"></path>
            </svg>
        </div>
    )
}

function IconShare ({ sizeHeight = "h-6", sizeWidth = "w-6", variant}) {
    return (
        <div>
            <svg
                className=
                    {`${sizeWidth}
                    ${sizeHeight}
                    ${variant}
                    `}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
            >
               <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 12v1.5a3.5 3.5 0 107 0V12m0-8a4 4 0 00-8 0v12a4 4 0 008 0V5m0-1.5A3.5 3.5 0 0015.5 4H17a3.5 3.5 0 00-7 0v12a3.5 3.5 0 007 0v-1.5"
      />
            </svg>
        </div>
    )
}

function ContainerIconAtasBawah({ sizeHeight = "h-6", sizeWidth = "w-6", isUp }) {

    return (
        <div className="flex items-center justify-center">
            {isUp ? (
                <IconKeAtas sizeHeight={sizeHeight} sizeWidth={sizeWidth} />
            ) : (
                <IconKeBawah sizeHeight={sizeHeight} sizeWidth={sizeWidth} />
            )}
        </div>
    )
}

function Profile({ name }) {

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    const names = setNameToDisplay(name);

    return (
        <div className="relative">
            <div className="flex items-center gap-3">
                <button
                    className="w-10 h-10 bg-gray-200 rounded-full relative z-10"
                    onClick={handleClick}
                >
                    <img
                        src={profile}
                        alt="profile"
                        className="w-10 h-10 bg-gray-200 rounded-full"
                    />
                </button>
                <div className="md:block">{names}</div>
            </div>

            {isOpen && (
                <div className="origin-top-right absolute right-0 mt-12 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                    <div className="py-1" role="none">
                        <div className="md:hidden">
                            {/* <div>{name}</div> */}
                        </div>
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            role="menuitem"
                        >
                            Link 1
                        </a>
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            role="menuitem"
                        >
                            Link 2
                        </a>
                        <Link to={"/"} className="text-poppins hover:bg-gray-100 hover px-4">Log Out</Link>
                    </div>
                </div>
            )}
        </div>
    );
}

export {
    LogoGoogle,
    LogoFacebook,
    LogoApple,
    Profile,
    IconVideo,
    ContainerIconAtasBawah,
    IconLove,
    IconArtikel,
    IconPhone,
    IconAccess,
    IconPiala,
    IconShare
};