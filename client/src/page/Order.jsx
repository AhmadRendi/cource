import {
    ContainerCardBackground,
    CardContent,
    CardText,
    CardOrder
} from "../components/Card"
import { useState } from "react";
import { OrderService } from "../service/Service";
import { NavbarUser } from "../components/Navbar";
import myImage from "../assets/img/th.jpeg";
import { IconVideo, IconLove } from "../components/Logo";
import { CoversCource } from "../components/Card";
import { Link } from "react-router-dom";

function PageOrder() {

    const courses = [
        {
            id: 1,
            title: 'Course 1',
            subCourses: [
                { id: 1, title: 'Sub-course 1.1' },
                { id: 2, title: 'Sub-course 1.2' },
                { id: 3, title: 'Sub-course 1.3' },
            ],
        },
        {
            id: 2,
            title: 'Course 2',
            subCourses: [
                { id: 1, title: 'Sub-course 2.1' },
                { id: 2, title: 'Sub-course 2.2' },
                { id: 3, title: 'Sub-course 2.3' },
                { id: 4, title: 'Sub-course 2.4' },
            ],
        },
        {
            id: 3,
            title: 'Course 3',
            subCourses: [
                { id: 1, title: 'Sub-course 3.1' },
                { id: 2, title: 'Sub-course 3.2' },
            ],
        },
        // Tambahkan kursus lainnya sesuai kebutuhan
    ];

    const setStatus = (e) => {
        return e ? "Premium" : "Free";
    }

    const [like, setLike] = useState(false);

    const handleClick = () => {
        setLike(!like);
        if (like) {
            console.log("Unlike")
        } else {
            console.log("Like")
        }
    }

    const cards =
        { id: 1, title: 'Card 1', status: setStatus(false), content: 'Content for Card 1', imageUrl: myImage };
    return (
        <div>
            <NavbarUser />
            <main>
                <ContainerCardBackground cards={cards} />
                <div>

                </div>
                <div>
                    <div className="container mx-auto md:flex-row">
                        <div className="container mx-auto flex items-center justify-center flex-col md:flex-row">
                            <div className="w-full flex gap-10">
                                <div className="w-full">
                                    <div className="container mx-auto">
                                        <div className="mt-10 border border-slate-500">
                                            <div className="p-5">
                                                <h1 className="ml-1 text-2xl font-poppins">Apa Yang Anda Pelajari</h1>
                                                <CardText description={"Banyak"} />
                                            </div>

                                        </div>
                                        <div className="mt-10 border border-slate-500">
                                            <div className="p-5">
                                                <h1 className="ml-1 text-2xl">Konten</h1>
                                                <CardContent courses={courses} />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                {/* Bagian Pertama: Tampil di semua ukuran layar */}


                                {/* Bagian Kedua: Tampil di layar medium (≥768px) dan lebih besar */}
                                <div className="hidden md:flex container mx-auto">
                                    <div className="container mx-auto bg-red-500">
                                        <div className="flex justify-center">
                                            {/* <CardContent /> */}
                                            <div>
                                                <CardOrder onClick={handleClick} />
                                                <div className="w-full h-10 border border-5 border-black mt-2 flex justify-center items-center cursor-pointer hover:bg-gray-200"
                                                onClick={() => console.log("Beli Sekarang")}
                                                >
                                                    <h1 className="font-poppins">Beli Sekarang</h1>
                                                </div>
                                                <div className="flex justify-center items-center mt-3">
                                                    <h1 className="text-xs">Jaminan Uang Kembali 30 hari</h1>
                                                </div>
                                                <div className="mt-3">
                                                    <h1>Kursus Ini Mencangkup</h1>
                                                    <CoversCource variant={"mt-4 flex flex-col gap-3"} jam={0} materi={0}/>
                                                    {/* <Link */}
                                                    <Link to="/order" className="flex justify-center items-center mt-3">Share</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Tampilan Untuk Handphone */}
                            <div className="md:hidden container max-auto">
                                <CardContent />
                                <div className="container max-auto flex justify-center mt-4 border border-2">
                                    <CardOrder />
                                </div>
                            </div>
                        </div>


                    </div>

                </div>
                <div className="grid grid-cols-3 gap-4">
                </div>
            </main>
        </div>
    );
}


export { PageOrder };