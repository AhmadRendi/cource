import { useState } from "react";
import {useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ComRegis1 } from "../components/ComAuth";
import {LogoGoogle, LogoFacebook, LogoApple} from "../components/Logo";
import {ContainerButton} from "../components/Button";
import {ContainerInput} from "../components/Input";


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    // const handleLogin = () => {
    //     if(email == "user@gmail.com" && password == "123"){
    //         console.log("Login Success");
    //         navigate("/home");
    //     }else {
    //         alert("Email or Password is wrong");
    //     }
    // }

    const handleLogin = () => {
        navigate("/home");
    }

    return (
        <main className="flex min-h-screen items-center justify-center bg-blue-500">
            <div className="z-10 w-full max-w-6xl items-center justify-center text-poppins lg:flex lg:justify-between">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="flex flex-col justify-center">
                        {/* content */}
                        <ComRegis1 />
                    </div>
                    <div className="bg-white p-6 mx-4 font-poppins rounded-lg">
                        {/* Form content here */}
                        <form className="w-full lg:w-auto p-1">
                            <h3 className="text-2xl lg:text-3xl mb-3 mt-1 text-center lg:text-left">Sign In</h3>
                            <h3 className="font-bold mb-4 text-center lg:text-left">Don't Have An Account ? <Link to={"/regis"} className="text-blue-500">Sign Up</Link></h3>
                            <ContainerInput type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} label="Email" py={2} />
                            <ContainerInput type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} label="Password" py={2}/>
                            <ContainerButton variant="bg-blue-500" onClick={handleLogin}>Login</ContainerButton>
                        </form>
                        <div className="mb-5">
                            <a href="#" className="text-center float-right mt-7 text-blue-500">Forgot Password</a>
                        </div>
                        <div className="mt-12">
                            <h3 className="mb-5">Or Continue With</h3>
                            <div className="flex gap-5">
                                <LogoGoogle />
                                <LogoFacebook />
                                <LogoApple />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Login;