import React, { useRef, useEffect } from 'react';
import { useState } from 'react';
import myImage from '../assets/img/th.jpeg';
import { PageOrder } from '../page/Order';
import { useNavigate, Link } from 'react-router-dom';
import { OrderService } from '../service/Service';
import {
  IconVideo,
  ContainerIconAtasBawah,
  IconLove,
  IconArtikel,
  IconPhone,
  IconAccess,
  IconPiala,
  IconShare
} from './Logo';
import { ContainerButton } from './Button';

function Card({ title, description, myImage, onClick, status }) {
  return (
    <div
      onClick={onClick}
      className="max-w-sm relative rounded overflow-hidden bg-stone-200 shadow-lg 
        hover:shadow-2xl transition-shadow duration-300 ease-in-out 
        focus:outline-none rounded-lg hover:text-blue-500 cursor-pointer"
    >
      <div className='w-full h-30 absolue top-0 inset-x-0'>
        {myImage && <img className="w-full h-full inline-block bg-gray-200 text-xs text-gray-700 mr-2" src={myImage} alt="Card image cap" />}
      </div>
      <div className="w-full py-1 flex-col">
        <div className="font-semibold text-lg px-1 mb-1 w-full text-start break-words truncate-multi-line">
          {title}
        </div>
        <div className="w-full flex items-start mt-2">
          <div>
            <div className='text-poppins'>
              <span className="rounded-full text-poppins flex items-start px-1 text-sm mr-2">
                {status};
              </span>
            </div>
            <div>
              <span className="rounded-full py-1 px-1 text-sm mr-2">
                {description}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CardVideo({ myImage, onClick, title, description }) {

  const cardRef = React.useRef();
  const handleClick = (e) => {
    e.stopPropagation();
    cardRef.current.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
  };
  return (
    <div
      ref={cardRef}
      className="relative w-full h-80 inline-block object-cover bg-gray-200 px-3 py-1 text-xs text-gray-700 mr-2"
      style={{
        backgroundImage: `url(${myImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
      onClick={handleClick}
    >
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100 transition-opacity">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm">{description}</p>
        <button
          className="mt-2 px-4 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          onClick={(e) => {
            onClick;
            console.log('Play button clicked');
          }}
        >
          Play
        </button>
      </div>
    </div>
  );
}

function CardImageScroll() {

  {/* <div className="relative flex items-center">               
        <div className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth">
          {myImage && <img className="w-full  h-40  inline-block bg-gray-200 px-3 py-1 text-xs text-gray-700 mr-2" src={myImage} alt="Card image cap" />}
          {myImage && <img className="w-full  h-[160px]  inline-block bg-gray-200 px-3 py-1 text-xs text-gray-700 mr-2" src={myImage} alt="Card image cap" />}
          {myImage && <img className="w-full h-40  inline-block bg-gray-200 px-3 py-1 text-xs text-gray-700 mr-2" src={myImage} alt="Card image cap" />}
        </div>
      </div> 
  */}

  return (
    <img
      className="w-full h-60 inline-block object-cover bg-gray-200 px-3 py-1 text-xs text-gray-700 mr-2"
      src={myImage}
      alt="Card image cap"
    />
  );
}

function CardBackground({ title, description, myImage, onClick, status }) {

  return (
    <div className="relative flex items-center">
      <div className="w-full h-full bg-dark">
        {/* {cards.map((card) => ( */}
        {/* // <CardImageScroll key={card.id} myImage={card.imageUrl} /> */}
        {/* console.log(card) */}
        {/* ))} */}
      </div>
    </div>
  );

}

function ContainerCard({ cards, onClick, children }) {
  return (
    <div>
      <div>
        <label className="text-2xl">
          {children}
        </label>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 p-4">
        {cards.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            description={card.content}
            myImage={card.imageUrl}
            status={card.status}
            onClick={() => onClick(card)}
          />
        ))}
      </div>
    </div>

  );
}

function ContainerCardVideo({ cards, myImage, onClick }) {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const { scrollLeft, clientWidth, scrollWidth } = scrollContainerRef.current;
        const isEnd = scrollLeft + clientWidth >= scrollWidth;

        if (isEnd) {
          scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollContainerRef.current.scrollBy({ left: clientWidth, behavior: 'smooth' });
        }
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex items-center">
      <div
        ref={scrollContainerRef}
        className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth">
        {cards.map((card) => (
          <CardVideo
            key={card.id}
            myImage={myImage}
            onClick={onClick}
            title={card.title}
            description={card.content}
          />
        ))}
      </div>
    </div>
  );
}

function ContainerCardImageScroll({ cards }) {
  return (
    <div className="relative flex items-center">
      <div className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth">
        <CardImageScroll myImage={myImage} />

      </div>
    </div>
  );
}

function ContainerDescriptionVideo() {
  return (
    <div className="w-full h-40">
      <p>Hello</p>
    </div>
  )
}

function ContainerCardBackground({ cards }) {
  return (
    <div className="bg-zinc-800 font-mono text-white">
      <div className='flex flex-col items-center justify-center'>
        <div className='mt-5 mb-5 gap-11'>
          <h1 className='text-2xl font-bold'>{cards.title}</h1>
          <h3 className='text-xl mt-5'>{cards.title}</h3>
          <div className='flex gap-5 mt-5'>
            <h5>Peringkat : 74</h5>
            <h5>5000 Peserta</h5>
          </div>
          <h5 className='gap-5 mt-3'>DiBuat Oleh :
            <Link to={"/home"} className='text-blue-500'> {cards.title}</Link>
          </h5>
          <div className='mt-3'>
            <h5>DiBuat : 7 Juli 2024</h5>
            <h5>DiUpdate : 7 Juli 2024</h5>
          </div>
        </div>
      </div>
    </div>
  );

}

function CardText({ description, ml = "ml-1" }) {
  return (
    <div className={`${ml} flex items-center gap-5 font-poppins`}>
      {description}
    </div>
  )
}

function CardContent({ courses }) {

  const [openCourseId, setOpenCourseId] = useState(null);
  const [openState, setOpenState] = useState({});

  const toggleSubCourses = (id) => {
    setOpenCourseId(openCourseId === id ? null : id);
    setOpenState(prevState => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };

  if (!Array.isArray(courses)) {
    return null;
  }

  return (
    <div className="p-1">
      {courses.map((course) => (
        <div key={course.id} className="border border-slate-800">
          <div
            onClick={() => toggleSubCourses(course.id)}
            className="cursor-pointer bg-zinc-200 text-mono p-4 bg-white text-black font-bold rounded-md"
          >
            <div className='flex items-center gap-3 w-full h-full'>
              <ContainerIconAtasBawah sizeWidth="w-6" sizeHeight="h-6" isUp={openState[course.id]} />
              {course.title}
            </div>
          </div>
          {openCourseId === course.id && (
            <div className="ml-2 mr-2 border-slate-800 ">
              {course.subCourses.map((subCourse) => (
                <div
                  onClick={() => console.log(subCourse.id)}
                  key={subCourse.id}
                  className=" hover:bg-gray-300 hover:text-white cursor-pointer 
                      p-2 text-blue-600 bg-white 
                      rounded-md font-poppins
                       hover:shadow-xl transform hover:-translate-y-2 transition-transform duration-300
                      "
                >
                  <div className='flex items-center gap-5 font-poppins'>
                    <IconVideo sizeWidth="w-4" sizeHeight="h-4" />
                    {subCourse.title}
                  </div>

                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function CardOrder({ course, onClick }) {

  const [variant, setVariant] = useState(true);

  const handleClick = () => {
    if (onClick) {
      onClick()
    }
    setVariant(!variant);
  }

  return (
    <div>
      <div className='flex gap-2 items-center justify-center bg-white mt-2'>
        <ContainerButton variant="bg-blue-500 text-white h-30" onClick={() => console.log('Button clicked')} mt='mt-0' >Tambahkan Ke Keranjang</ContainerButton>
        <div
          className='w-11 h-10 border border-black hover:bg-gray-200 cursor-pointer  flex justify-center items-center mt-0 rounded'
          onClick={handleClick}
        >
          <IconLove sizeWidth="w-8" sizeHeight="h-8" variant={variant} />
        </div>
      </div>
    </div>
  )
}

function CoversCource(props) {

  let { jam, materi } = props;
  const { variant } = props;


  jam = jam + " jam";
  materi = materi + " Artikel";

  return (
    <div className={`${variant}`}>
      <div className='flex gap-3 items-center bg-white'>
        <IconVideo sizeWidth="w-5" sizeHeight="h-5" variant='text-black' />
        <h1 className="text-xs">Video Atas Permintaan {jam}</h1>
      </div>
      <div className='flex gap-3 items-center bg-white'>
        <IconArtikel sizeWidth="w-5" sizeHeight="h-5" variant='text-black' />
        <h1 className="text-xs">{materi}</h1>
      </div>
      <div className='flex items-center bg-white gap-3'>
        <IconPhone sizeWidth="w-5" sizeHeight="h-5" variant='text-black' />
        <h1 className="text-xs">Akses Di Petangkat Seluler dan TV</h1>
      </div>
      <div className='flex items-center gap-3 bg-white'>
        <IconAccess sizeWidth="w-5" sizeHeight="h-5" variant='text-black' />
        <h1 className='text-xs'>Akses Penuh Seumur Hidup</h1>
      </div>
      <div className='flex items-center gap-3 bg-white'>
        <IconPiala sizeWidth="w-5" sizeHeight="h-5" variant='text-black' />
        <h1 className='text-xs'>Sertifikat Penyelesaian</h1>
      </div>
      <div>
        <IconShare sizeWidth="w-5" sizeHeight="h-5" variant='text-black' />
        
      </div>
    </div>
  )
}


export {
  ContainerCard,
  ContainerCardVideo,
  ContainerDescriptionVideo,
  ContainerCardBackground,
  CardContent,
  CardText,
  CardOrder,
  CoversCource
}