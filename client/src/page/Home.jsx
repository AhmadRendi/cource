import { useState } from "react";
import { NavbarUser } from "../components/Navbar";
import {ContainerCard, ContainerCardVideo} from "../components/Card";
import myImage from '../assets/img/th.jpeg';
import { PageOrder } from "./Order";
import { useNavigate } from "react-router-dom";



function Home() {

    const navigate = useNavigate();

    const setStatus = (e) => {
        return e ? "Premium" : "Free";
    }

    const cards = [
        { id: 1, title: 'Card 1 Full-Stack Java Programming Di Metrodata', status:setStatus(false) ,content: 'Content for Card 1', imageUrl: myImage},
        { id: 2, title: 'Card 2', status:setStatus(true) ,content: 'Content for Card 2', imageUrl: myImage},
        { id: 3, title: 'Card 3', status:setStatus(false) ,content: 'Content for Card 3',  imageUrl: myImage},
        { id: 4, title: 'Card 4', status:setStatus(true) ,content: 'Content for Card 4',  imageUrl: myImage},
        { id: 5, title: 'Card 5', status:setStatus(false) ,content: 'Content for Card 5',  imageUrl: myImage},
        { id: 6, title: 'Card 6', status:setStatus(true) ,content: 'Content for Card 6',  imageUrl: myImage},
        { id: 7, title: 'Card 7', status:setStatus(true) ,content: 'Content for Card 7',  imageUrl: myImage},
        { id: 8, title: 'Card 8', status:setStatus(false) ,content: 'Content for Card 8',  imageUrl: myImage},
        { id: 9, title: 'Card 9', status:setStatus(true) ,content: 'Content for Card 9',  imageUrl: myImage},
        { id: 10, title: 'Card 10', status:setStatus(false) ,content: 'Content for Card 10',  imageUrl: myImage},
        // tambahkan card lainnya sesuai kebutuhan
      ];

    const cardsVideo = [
        { id: 1, title: 'Card 1', content: 'Content for Card 1', imageUrl: myImage},
        { id: 2, title: 'Card 2', content: 'Content for Card 2', imageUrl: myImage},
        { id: 3, title: 'Card 3', content: 'Content for Card 3',  imageUrl: myImage},
    ];


    // const handleClick = (cards) => {
    //     console.log(cards.id);
    // }

    const [activePage, setActivePage] = useState(true);

    const handleClick = () => {
        // setActivePage(page);
        navigate('/order');
    }

    return (
        <div className="bg-white overflow-auto">
            <NavbarUser />
            <main className="p-4 h-full">
                {/* <CardHomeListCource isActive={true}/> */}
                {/* <PageOrder isAtive={false}/> */}
                
                

                <div className="container mx-auto">
                    <ContainerCardVideo cards={cardsVideo} myImage={myImage} onClick={handleClick} />
                    


                </div>
                <div className="container mx-auto">
                    <ContainerCard cards={cards} onClick={handleClick} children={"Belajar"}/>
                </div>
                <div className="container mx-auto shodow-lg mt-5">
                    <ContainerCard cards={cards} onClick={handleClick} children={"Nonton"}/>
                </div>
            </main>
        </div>

    );
}


function MyButton() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <button onClick={handleClick}>
            Jumlah : {count} times
        </button>
    )
}



export {Home};

