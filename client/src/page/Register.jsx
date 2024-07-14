import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ComRegis from "../components/ComAuth";
import { ComRegis1 } from "../components/ComAuth";
import { ContainerButton } from "../components/Button";

function Register() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleClick = () => {
        validation(username, email, password);
        if (validation(username, email, password)) {
            navigate("/");
        }
    }

    const handleClickBatal = () => {
        navigate("/");
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
                            <ComRegis setUsername={setUsername} setEmail={setEmail} setPassword={setPassword} />
                            <div className="w-full flex justify-center justify-center mt-10 gap-6">
                                <ContainerButton variant="bg-blue-500" onClick={handleClick}>Buat</ContainerButton>
                                <ContainerButton variant="bg-red-500" onClick={handleClickBatal}>Batal</ContainerButton>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}

function validation(username, email, password) {
    if (username === "") {
        alert("Username is empty");
        return false;
    } else if (email === "") {
        alert("Email is empty");
        return false;
    } else if (password === "") {
        alert("Password is empty");
        return false;
    } else {
        console.log("Register Success");
        return true;
    }
}

export default Register;