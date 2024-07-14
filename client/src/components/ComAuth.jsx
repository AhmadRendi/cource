
import React from 'react';
import { ContainerInput } from './Input';

function ComRegis({ setUsername, setEmail, setPassword }) {

    const handleUsername = (even) => {
        setUsername(even.target.value);
    }

    const handleEmail = (even) => {
        setEmail(even.target.value);
    }

    const handlePassword = (even) => {
        setPassword(even.target.value);
    }

    return (
        <div>
            <h3 className="text-2xl lg:text-3xl mb-3 mt-1 text-center lg:text-left">Sign Up</h3>
            <ContainerInput type="text" placeholder="Username" label="Username" onChange={handleUsername} py={2}/>
            <ContainerInput type="email" placeholder="Email" label="Email" onChange={handleEmail} py={2}/>
            <ContainerInput type="password" placeholder="Password" label="Password" onChange={handlePassword} py={2}/>
        </div>
    );
}


function ComRegis1() {
    return (
        <div>
            <div className="mx-4">
                <h1 className="text-center text-4xl lg:text-6xl font-bold text-white mt-3">LearnHub</h1>
                <hr className="w-50 bg-white mt-5 mx-auto" />
                <p className="text-white text-lg mt-5">
                    Mulai belajar dengan mudah dan menyenangkan di LearnHub.
                    Dapatkan akses ke ribuan materi pembelajaran yang bisa kamu akses kapanpun dan dimanapun.
                </p>
                <div className="mt-3">
                    <a href="#" className="bg-white text-blue-500 px-6 py-2 rounded-md mt-5 font-bold">Learn More</a>
                </div>
            </div>
        </div>
    );
}

export default ComRegis;
export { ComRegis1 };