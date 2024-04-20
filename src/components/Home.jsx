import React from "react";
import photo from "../components/image/photo.jpg";
import Maincontent from './Maincontent'

const Home = () => {
  const handleDiscoverMoreClick = (event) => {
    event.preventDefault();
    // setMainContentVisible(true);
    window.scrollTo(0, 900);
  };

  return (
    // <div className="hero">
    //   <div class="text-gray-600 body-font w-screen border">
    //     <img class=" mb-10 w-full rounded h-screen " alt="hero" src={photo} />
    //     <div class="card-img-display ">
    //       {/* <div className="container mt-0"> */}
    //         <h1 className="card-title">Card Tittle</h1>
    //         <p className="card-text text-black ">
    //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nihil
    //           error magnam praesentium ratione provident eum, sit nesciunt
    //           quibusdam incidunt nulla libero eligendi labore voluptatum,
    //           officia possimus inventore rem voluptate?
    //         </p>
    //       {/* </div> */}
    //     </div>
    //   </div>
    // </div>
   <>
    <section className='h-[800px] bg-no-repeat bg-cover bg-center relative'>
    <div className="container w-full flex  h-full">
      <div className="flex flex-col mt-5 z-10  ml-5"> {/* Added z-10 to ensure text appears above the image */}
        <div className="uppercase font-semibold flex items-center">
          <div className="w-8 h-0.5 text-white mr-3 "></div>
        </div>
        <h1 className='text-[70px] leading-[1.1] font-light mb-4 text-white'> {/* Added text-white to make text visible on the image */}
          New Year Sale <br />
          <span className='font-semibold'>For Men & Women</span>
        </h1>
        <a href ="/" className='self-start uppercase font-semibold border-primary cursor-pointer text-white'
          onClick={handleDiscoverMoreClick}
        >
          Discover More....
        
        </a>
      </div>
      <div className="absolute inset-0 hidden lg:block">
        <img src={photo} alt="" className="w-full h-full object-cover" /> {/* Added object-cover to ensure the image covers the container */}
      </div>
    </div>
  </section>
  <Maincontent/>
   </>
   
  
  );
};

export default Home;
